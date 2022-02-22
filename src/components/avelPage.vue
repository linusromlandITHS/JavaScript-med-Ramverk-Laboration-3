<script>
	const image = new Image();
	image.src = '/assets/satancat2.jpeg';
	image.addEventListener('load', function () {
		const canvas = document.getElementById('canvas1');
		const ctx = canvas.getContext('2d');
		canvas.width = 572;
		canvas.height = 352;

		let particlesArray = [];
		const numberOfParticles = 12000;
		const detail = 1;

		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let grid = [];
		for (let y = 0; y < canvas.height; y += detail) {
			let row = [];
			for (let x = 0; x < canvas.width; x += detail) {
				const red = pixels.data[y * 4 * pixels.width + x * 4];
				const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
				const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
				const brightness = calculateBrightness(red, green, blue) / 100;

				row.push(brightness);
			}
			grid.push(row);
		}

		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = 0;
				//this.prevX = this.x;
				this.speed = 0;
				this.velocity = Math.random() * 0.7;
				this.size = Math.random() * 2 + 0.1;
			}
			update() {
				this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
				let movement = 2.5 - this.speed + this.velocity;
				this.y += movement;
				if (this.y >= canvas.height) {
					this.y = 0;
					this.x = Math.random() * canvas.width;
				}
				//console.log(this.x += movement)
			}
			draw() {
				ctx.beginPath();
				ctx.fillStyle = 'white';
				ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
				ctx.fill();
			}
		}

		function init() {
			for (let i = 0; i < numberOfParticles; i++) {
				particlesArray.push(new Particle());
			}
		}
		init();

		function animate() {
			ctx.globalAlpha = 0.05;
			ctx.fillStyle = 'rgb(0, 0,0)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.globalAlpha = 0.2;
			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
				ctx.globalAlpha = particlesArray[i].speed * 0.3;
				particlesArray[i].draw();
			}
			requestAnimationFrame(animate);
		}
		animate();

		function calculateBrightness(red, green, blue) {
			return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114);
		}
	});
	import Button from '../components/Button.vue';
	export default {
		name: 'AvelPage',
		components: {
			Button
		},
		data() {
			return {
				kickAsName: ['Ultra ', 'Super ', 'Mega ', 'Satan ', 'Young ', 'Lil ', 'Von '],
				nameEndings: ['missan', 'popy', 'snutt', 'aban', 'wolf', 'gädd', 'pop', 'plupp', 'snor'],
				surName: [' Hellscream', ' Jr', ' Satansdotter', ' Powerwolf', ' Dragonsbreath'],
				finalName: '',
				inputName: '',
				nollaAllt: '',
				url: null,
				ereSant: false,
				finalNameErr: '',
				isShow: false,
				isShow2: false,
				isShow4: false,
				isShow3: false,
				avlaFormShow: false
			};
		},
		methods: {
			randomName() {
				if (this.inputName !== '' && this.url !== null) {
					let chosenNumber = Math.floor(Math.random() * this.kickAsName.length);
					let ending = Math.floor(Math.random() * this.nameEndings.length);
					let efternamn = Math.floor(Math.random() * this.surName.length);
					let letters = this.inputName.split('');
					this.finalName =
						this.kickAsName[chosenNumber] +
						letters[0] +
						letters[1] +
						letters[2] +
						letters[3] +
						this.nameEndings[ending] +
						this.surName[efternamn];
					this.ereSant = true;
					this.finalNameErr = '';
				} else {
					this.finalNameErr = 'Skriv din katts namn och ladda upp en bild.';
				}
			},
			onFileChange(e) {
				const file = e.target.files[0];
				this.url = URL.createObjectURL(file);
				console.log(this.url);
			},
			reload() {
				this.location.reload();
			}
		},
		mounted() {
			//location.reload();
		}
	};
</script>

<template>
	<div id="mainDiv" @change.once="reload">
		<canvas id="canvas1" />
		<h1>Avla på våra superkatter</h1>
		<div class="cards">
			<div @click="isShow = !isShow" class="cardDiv">
				<img v-show="!isShow" class="cardimg" src="/assets/satancat.jpeg" alt="" />
				<h3>Kattferatu</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow2 = !isShow2" class="cardDiv">
				<img v-show="!isShow2" class="cardimg" src="/assets/satancat2.jpeg" alt="" />
				<h3>Count Kattula</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow2">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow3 = !isShow3" class="cardDiv">
				<img v-show="!isShow3" class="cardimg" src="/assets/satancat3.jpeg" alt="" />
				<h3>Cat the ripper</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow3">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow4 = !isShow4" class="cardDiv">
				<img v-show="!isShow4" class="cardimg" src="/assets/satancat4.jpeg" alt="" />
				<h3>Pelle von Guldsvans</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow4">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
		</div>
		<div v-show="avlaFormShow" id="formDiv">
			<input type="text" placeholder="Kattens namn" v-model="inputName" />
			<input type="file" id="inputImg" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />
			<p class="hello">{{ finalNameErr }}</p>
			<button @click="randomName">KLICK</button>
		</div>
		<div id="displayImg" />
		<div id="preview" v-show="ereSant">
			<img id="bild" v-if="url" :src="url" />
			<p v-if="url" id="coolName">{{ finalName }}</p>
			<Button class="btn btn-secondary">Avla</Button>
		</div>
	</div>
</template>

<style scoped>
	h1 {
		color: black;
		text-decoration-line: underline;
	}
	.cardimg {
		height: 300px;
		width: 320px;
		object-fit: cover;
	}
	p {
		transition: all 1s ease;
	}
	.cards {
		display: flex;
		flex-direction: row;
	}
	.cardDiv {
		width: 350px;
		height: auto;
		margin: 20px;
		padding: 15px;
		background-color: black;
		transition: 2s ease-out;
	}
	.cardDiv:hover {
		background-color: black;
		filter: invert(100%);
		cursor: pointer;
	}
	#bild {
		width: 330px;
		height: auto;
		filter: invert(100%);
		border-radius: 16px;
	}
	#preview {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: black;
		width: 350px;
		height: 400px;
		border-radius: 16px;
		transition: width 2s, height 4s;
		position: relative;
	}
	#mainDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 100px;
		margin-bottom: 100px;
	}
	#formDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		flex-direction: column;
		margin-bottom: 30px;
		width: 350px;
		height: 200px;
		border-radius: 10px;
	}
	#coolName {
		position: absolute;
		color: white;
		top: 70%;
		color: red;
		background-color: black;
		font-size: 1.5em;
	}
	HTML CSS JSResult Skip Results Iframe EDIT ON * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: black;
	}
	canvas {
		top: 50%;
		left: 50%;
		width: 572px;
		height: 352px;
		display: flex;
		justify-content: center;
		align-items: center;
		filter: invert(100%);
	}
	footer,
	article {
		font-family: monospace;
		width: 100%;
		color: white;
		font-size: 15px;
		margin-left: 5px;
		text-shadow: 1px 1px 1px #737373;
	}
	article {
		padding: 10px;
	}
	footer {
		position: absolute;
		bottom: 0;
		width: 95%;
		text-align: left;
		padding-bottom: 15px;
	}
	footer a {
		color: orangered;
	}
	article {
		width: 48%;
		font-size: 15px;
	}
</style>
