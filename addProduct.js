/*
 * @author Linus Romland, Svante Jonsson
 * @description This program adds a product to the "database".
 * Please do not touch this file!
 */

// Dependencies
const { v4: uuidv4 } = require('uuid');
const inquirer = require('inquirer');
const isImage = require('is-image');
const fs = require('fs');
const path = require('path');

async function main() {
	console.log(
		`\nLet's add some products!\nIf you input something wrong or just want to stop adding products press 'CTRL' + 'C'\n`
	);

	let newProduct = {
		id: uuidv4(),
		name: '',
		type: '',
		breed: '',
		sex: '',
		categories: [],
		color: '',
		temperament: '',
		age: '',
		images: [],
		price: null
	};

	newProduct.name = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Name:',
			default() {
				return 'Namn';
			}
		})
	).output;

	newProduct.type = await (
		await inquirer.prompt({
			name: 'output',
			type: 'list',
			choices: ['Katt', 'Hund', 'Häst', 'Kanin', 'Fisk', 'Övriga'],
			message: 'Animal Species:'
		})
	).output;

	newProduct.breed = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Breed:',
			default() {
				return 'Ras';
			}
		})
	).output;

	newProduct.sex = await (
		await inquirer.prompt({
			name: 'output',
			type: 'list',
			choices: ['Male', 'Female'],
			message: 'Sex:'
		})
	).output;

	newProduct.color = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Color:',
			default() {
				return 'Färg';
			}
		})
	).output;

	newProduct.temperament = await (
		await inquirer.prompt({
			name: 'output',
			type: 'input',
			message: 'Temperament:',
			default() {
				return 'Temperament';
			}
		})
	).output;

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const category = await (
			await inquirer.prompt({
				name: 'output',
				type: 'input',
				message: 'Category:'
			})
		).output;

		newProduct.categories.push(category);

		const addNewCategory = await (
			await inquirer.prompt({
				name: 'output',
				type: 'confirm',
				message: 'Do you want to add another category?',
				default() {
					return false;
				}
			})
		).output;

		if (!addNewCategory) break;
	}

	// eslint-disable-next-line no-constant-condition
	while (true) {
		let addNewMessage = 'Add another image?';

		const image = await (
			await inquirer.prompt({
				name: 'output',
				type: 'input',
				message: 'Drop image here, then press enter:'
			})
		).output;

		const validFile = (await fs.existsSync(image)) && isImage(image);

		if (!validFile && newProduct.images.length <= 0) {
			console.log('Invalid file, please try again!');
			continue;
		} else if (!validFile) {
			addNewMessage = 'Invalid file, do you want to try again?';
		} else {
			newProduct.images.push(image);
		}

		const addNewImage = await (
			await inquirer.prompt({
				name: 'output',
				type: 'confirm',
				message: addNewMessage,
				default() {
					return false;
				}
			})
		).output;

		if (!addNewImage) break;
	}

	newProduct.age = await (
		await inquirer.prompt({
			name: 'output',
			type: 'number',
			message: 'Age:',
			default() {
				return 2;
			}
		})
	).output;

	newProduct.price = await (
		await inquirer.prompt({
			name: 'output',
			type: 'number',
			message: 'Price:',
			default() {
				return 1949;
			}
		})
	).output;

	// Copies user submitted images to the project
	const dir = `./assets/products/${newProduct.id}`;
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	for (let i = 0; i < newProduct.images.length; i++) {
		const element = newProduct.images[i];
		fs.copyFileSync(element, `${dir}/${i}${path.extname(element)}`);
		newProduct.images[i] = `${newProduct.id}/${i}${path.extname(element)}`;
	}

	// Adds the new product to the "database"
	const products = './public/database.json';
	fs.readFile(products, 'utf8', (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const obj = JSON.parse(data);
			obj.animals.push(newProduct);
			fs.writeFile(products, JSON.stringify(obj), 'utf8', (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('\nSuccessfully saved the product to the database!\n');
				}
			});
		}
	});

	return;
}

main();
