<script>
	import Button from '../components/Button.vue';
	export default {
		name: 'AvelPage',
		components: {
			Button
		},
		data() {
			return {
				kickAsName: ['Ultra ', 'Super ', 'Mega ', 'Satan ', 'Young ', 'Lil ', 'Von '],
				nameEndings: ['missan', 'popy', 'snutt', 'laban', 'wolf', 'gädd', 'pop', 'plupp', 'snor'],
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
			}
		}
	};
</script>

<template>
	<div id="mainDiv">
		<div class="cards">
			<div @click="isShow = !isShow" class="cardDiv">
				<img v-show="!isShow" class="cardimg" src="/assets/satancat.jpeg" alt="" />
				<h3>Catferatu</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow2 = !isShow2" class="cardDiv">
				<img v-show="!isShow2" class="cardimg" src="/assets/satancat2.jpeg" alt="" />
				<h3>Catferatu</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow2">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow3 = !isShow3" class="cardDiv">
				<img v-show="!isShow3" class="cardimg" src="/assets/satancat3.jpeg" alt="" />
				<h3>Catferatu</h3>
				<p>Lol bub bob pop</p>
				<div v-show="isShow3">
					<p>jksdjksdjfkjskdjfslkdf jhsdläfjäakljdsfö lkjasöldkfhjl öakdhsföj ahsdkjfhaökdlsj hfakjsdhf</p>
					<Button @click="avlaFormShow = !avlaFormShow" class="btn btn-secondary">Avla</Button>
				</div>
			</div>
			<div @click="isShow4 = !isShow4" class="cardDiv">
				<img v-show="!isShow4" class="cardimg" src="/assets/satancat.jpeg" alt="" />
				<h3>Catferatu</h3>
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
</style>
