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
	<div><input type="text" placeholder="Kattens namn" v-model="inputName" /></div>
	<input type="file" id="inputImg" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />
	<p class="hello">{{ finalName }}</p>
	<button @click="randomName">KLICK</button>
	<div id="displayImg" />
	<div id="preview">
		<img v-if="url" :src="url" />
	</div>
</template>

<style>
	#preview {
		max-width: 100%;
		max-height: 500px;
		filter: invert(100%);
	}
</style>
