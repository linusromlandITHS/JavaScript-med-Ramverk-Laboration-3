<script>
	export default {
		name: 'AvelPage',
		data() {
			return {
				kickAsName: ['Ultra ', 'Super ', 'Mega ', 'Satan ', 'Young ', 'Lil ', 'Von '],
				nameEndings: ['missan', 'popy', 'prutt'],
				surName: [' Hellscream', ' Jr', ' Killer'],
				finalName: '',
				inputName: '',
				nollaAllt: '',
				url: null
			};
		},
		methods: {
			randomName() {
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
				if (this.inputName === '') {
					this.finalName = 'Skriv din katts namn!';
				}
			},
			onFileChange(e) {
				const file = e.target.files[0];
				this.url = URL.createObjectURL(file);
			}
		}
	};
</script>

<template>
	<div id="mainDiv">
		<div id="formDiv">
			<input type="text" placeholder="Kattens namn" v-model="inputName" />
			<input type="file" id="inputImg" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />
			<p class="hello">{{ finalName }}</p>
			<button @click="randomName">KLICK</button>
		</div>
		<div id="displayImg" />
		<div id="preview">
			<img id="bild" v-if="url" :src="url" />
		</div>
	</div>
</template>

<style scoped>
	#bild {
		width: 330px;
		height: 300px;
		filter: invert(100%);
		border-radius: 16px;
	}
	#preview {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #faac77;
		width: 350px;
		height: 400px;
		border-radius: 16px;
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
		background-color: #faac77;
		flex-direction: column;
		margin-bottom: 30px;
		width: 350px;
		height: 200px;
		border-radius: 10px;
	}
</style>
