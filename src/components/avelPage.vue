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
				kickAsName: ['Ultra ', 'Super ', 'Mega ', 'Young ', 'Lil ', 'Von '],
				nameEndings: ['missan', 'popy', 'snutt', 'aban', 'wolf', 'gädd', 'pop', 'plupp', 'snor'],
				surName: [' Hellscream', ' Jr', ' Häggdotter', ' Powerwolf', ' Dragonsbreath'],
				superKatterArr: ['Missan Val Enberg', 'Navel af Ludd', 'Count Kattula', 'Pelle von Guldsvans'],
				superKatter: '',
				parent: '',
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
				if (this.inputName !== '') {
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
					this.parent = this.superKatter.substr(this.superKatter.indexOf(' ') + 1);
					this.ereSant = true;
					this.finalNameErr = '';
				} else {
					this.finalNameErr = 'Skriv din katts namn.';
				}
			},
			onFileChange(e) {
				const file = e.target.files[0];
				this.url = URL.createObjectURL(file);
				// console.log(this.url);
			},
			reload() {
				this.location.reload();
			},
			AddItem() {
				const avelItem = {
					name: 'Avel',
					id: '58c6f899-15fb-4c45-8597-dd4dbb1c2d99'
				};
				this.$store.commit('increment');
				this.$store.commit('incrementAvel');
				// console.log(this.$store.state.avelPris);
				this;
				this.$store.state.namnNyKatt = this.finalName;
				localStorage.setItem('avel', JSON.stringify(avelItem));
			},
			loadCat(index) {
				this.superKatter = this.superKatterArr[index];
			},
			setToLocal() {
				localStorage.setItem('petCart', JSON.stringify('58c6f899-15fb-4c45-8597-dd4dbb1c2d99'));
			}
		},
		mounted() {
			//location.reload();
		}
	};
</script>

<template>
	<div id="mainDiv" @change.once="reload">
		<h1>Avla på våra superkatter</h1>
		<div class="cardFotter" />
		<div class="cards">
			<div class="sides" />
			<div @click="isShow = !isShow" class="cardDiv">
				<img v-show="!isShow" class="cardimg" src="/assets/epiccat1.jpeg" alt="" />
				<h3>Missan Val Enberg</h3>
				<p>"Alla nio liv kvar!"</p>
				<div v-show="isShow">
					<p>
						Missan Val Enberg är av kunglig börd. Ultrastark, smidig, explosiv och har kvar alla sina nio
						liv. Ingen kommer bli missnöjd av Missan. I generationer har Val Enberg släktträdet kammat hem
						äver femton katt VM-guld.
					</p>
					<Button
						@click="
							avlaFormShow = !avlaFormShow;
							loadCat(0);
						"
						class="btn btn-secondary"
						>Avla</Button
					>
				</div>
			</div>
			<div @click="isShow2 = !isShow2" class="cardDiv">
				<img v-show="!isShow2" class="cardimg" src="/assets/epiccat2.jpeg" alt="" />
				<h3>Navel af Ludd</h3>
				<p>"Varken lasange eller blomkål går säker!"</p>
				<div v-show="isShow2">
					<p>
						Navel af Ludd kan äta tre middagar. Vill du ha en kattunge med god aptit? Då är Navel af Ludd
						katten för dig. Katten Gustaf framstår som en amatör i förhållande till af Ludd. Varken lasange
						eller blomkål går säker.
					</p>
					<Button
						@click="
							avlaFormShow = !avlaFormShow;
							loadCat(1);
						"
						class="btn btn-secondary"
						>Avla</Button
					>
				</div>
			</div>
			<div @click="isShow3 = !isShow3" class="cardDiv">
				<img v-show="!isShow3" class="cardimg" src="/assets/epiccat3.jpeg" alt="" />
				<h3>Count Kattula</h3>
				<p>"Rumäniens stolthet!"</p>
				<div v-show="isShow3">
					<p>
						Rumäniens stolthet. Count Kattula har överlevt svälttider och torka. Vill du ha en kattunge som
						sover tjugotvå timmar om dygnet och är vresig och bitsk resten av tiden så är Count Kattula
						katten du skall avla på.
					</p>
					<Button
						@click="
							avlaFormShow = !avlaFormShow;
							loadCat(2);
						"
						class="btn btn-secondary"
						>Avla</Button
					>
				</div>
			</div>
			<div @click="isShow4 = !isShow4" class="cardDiv">
				<img v-show="!isShow4" class="cardimg" src="/assets/epiccat4.jpeg" alt="" />
				<h3>Pelle von Guldsvans</h3>
				<p>"Vill du ha tur i affärer?"</p>
				<div v-show="isShow4">
					<p>
						Pelle är rik! Väääldigt rik! Vill du ha tur i affärer? Pelle von Guldsvans är bättre än vilken
						vinkande guldkatt som helst. Han har dessutom en brun guldliknande urtjusig svans som passar i
						vilket snabbigt hem som helst.
					</p>
					<Button
						@click="
							avlaFormShow = !avlaFormShow;
							loadCat(3);
						"
						class="btn btn-secondary"
						>Avla</Button
					>
				</div>
			</div>
			<div class="sides" />
		</div>
		<div class="cardFotter" />
		<transition name="fade">
			<div v-show="avlaFormShow" class="formDiv slide-item" name="slide" mode="in-out">
				<p class="mimimi">Avla på {{ superKatter }}</p>
				<input type="text" placeholder="Din katts namn" v-model="inputName" />
				<!--<input type="file" id="inputImg" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />-->
				<p class="hello">{{ finalNameErr }}</p>
				<Button @click="randomName">Ny katt</Button>
				<Button @click="AddItem" class="btn btn-secondary">Avla</Button>
				<p id="coolName">{{ finalName }} {{ parent }}</p>
			</div>
		</transition>
		<!--<div id="displayImg" />

		<div id="preview" v-show="ereSant">
			<img id="bild" v-if="url" :src="url" />
			<p v-if="url" id="coolName">{{ finalName }} {{ parent }}</p>
			<Button @click="AddItem" class="btn btn-secondary">Avla</Button>
			<canvas id="canvas1" />
		</div> -->
	</div>
</template>

<style scoped>
	h1 {
		color: black;
		text-decoration-line: underline;
		animation: burn2 0.4s linear infinite alternate;
		filter: grayscale(100%);
		margin-bottom: 20px;
	}
	.sides {
		background-color: black;
		width: 400px;
		height: auto;
	}
	.cardFotter {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fbc39d;
		height: 30px;
		width: 100%;
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
		justify-content: center;
		flex-direction: row;
	}
	@keyframes burn {
		from {
			box-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85, -0.2em -0.2em 0.4em #ffae34,
				0.2em -0.3em 0.3em #ec760c, -0.2em -0.4em 0.7em #cd4606, 0.1em -0.5em 0.7em #973716,
				0.1em -0.7em 0.7em #451b0e;
		}
		45% {
			box-shadow: 0.1em -0.2em 0.5em #fefcc9, 0.15em 0 0.4em #feec85, -0.1em -0.25em 0.5em #ffae34,
				0.15em -0.45em 0.5em #ec760c, -0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
				0.2em -1em 0.8em #451b0e;
		}
		70% {
			box-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85, -0.2em -0.2em 0.6em #ffae34,
				0.2em -0.3em 0.4em #ec760c, -0.2em -0.4em 0.7em #cd4606, 0.1em -0.5em 0.7em #973716,
				0.1em -0.7em 0.9em #451b0e;
		}
		to {
			box-shadow: -0.1em -0.2em 0.6em #fefcc9, -0.15em 0 0.6em #feec85, 0.1em -0.25em 0.6em #ffae34,
				-0.15em -0.45em 0.5em #ec760c, 0.1em -0.5em 0.1em #cd4606, 0 -0.8em 0.6em #973716,
				-0.2em -1em 0.8em #451b0e;
		}
	}

	@media screen and (max-width: 600px) {
		.cards {
			flex-direction: column;
		}
		h1 {
			font-size: 1.7em;
		}
	}
	.cardDiv {
		width: 350px;
		height: 440px;
		padding: 15px;
		background-color: black;
		transition: 0.5s ease-out;
		/*	border-right: solid 1px #fbc39d; */
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
	.formDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		flex-direction: column;
		margin-bottom: 30px;
		width: 600px;
		height: 300px;
	}
	#coolName {
		margin-top: 15px;
		color: white;
		top: 70%;
		color: red;
		background-color: black;
		font-size: 1.5em;
		animation: burn2 0.4s linear infinite alternate;
	}
	@keyframes burn2 {
		from {
			text-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85, -0.2em -0.2em 0.4em #ffae34,
				0.2em -0.3em 0.3em #ec760c, -0.2em -0.4em 0.4em #cd4606, 0.1em -0.5em 0.7em #973716,
				0.1em -0.7em 0.7em #451b0e;
		}
		45% {
			text-shadow: 0.1em -0.2em 0.5em #fefcc9, 0.15em 0 0.4em #feec85, -0.1em -0.25em 0.5em #ffae34,
				0.15em -0.45em 0.5em #ec760c, -0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
				0.2em -1em 0.8em #451b0e;
		}
		70% {
			text-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85, -0.2em -0.2em 0.6em #ffae34,
				0.2em -0.3em 0.4em #ec760c, -0.2em -0.4em 0.7em #cd4606, 0.1em -0.5em 0.7em #973716,
				0.1em -0.7em 0.9em #451b0e;
		}
		to {
			text-shadow: -0.1em -0.2em 0.6em #fefcc9, -0.15em 0 0.6em #feec85, 0.1em -0.25em 0.6em #ffae34,
				-0.15em -0.45em 0.5em #ec760c, 0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
				-0.2em -1em 0.8em #451b0e;
		}
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
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 2s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	.mimimi {
		font-size: 1.5em;
	}
</style>
