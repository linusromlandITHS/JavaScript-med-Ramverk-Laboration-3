<script>
	export default {
		name: 'ContactView',
		data() {
			return {
				name: '',
				email: '',
				msg: '',
				clicked: false
			};
		},
		methods: {
			onClick() {
				this.clicked = true;
				console.log('onClick', 'test');
				if (this.name != '' && this.email != '') {
					this.msg = 'Tack för din fråga! Vi kommer att kontakta dig så snart som möjligt.';
				} else {
					this.msg = 'Skriv ditt namn och email!';
				}
			}
		}
	};
</script>

<template>
	<h1>Ställ en fråga till oss</h1>
	<div>
		<label>Namn</label>
		<input v-model="name" type="text" :class="{ 'input-error': !name && clicked }" />

		<label>Email</label>
		<input v-model="email" type="email" :class="{ 'input-error': !email && clicked }" />

		<textarea placeholder="Skriv din fråga" />
		<input class="button" @click="onClick" type="button" value="Skicka" />
	</div>
	<h3>{{ msg }}</h3>

	<p>Öppettider: 9:00 - 18:00</p>
	<p>Adress:</p>
	<p>Email: redmountain_team@gmail.com</p>
	<iframe src="http://maps.google.com/maps?q=57.708870,11.974560&z=16&output=embed" />
</template>

<style scoped>
	h1 {
		text-align: center;
	}
	label {
		margin: 10px;
	}
	iframe {
		margin: 20px;
		margin-top: 50px;
		height: 450px;
		width: 600px;
	}
	div {
		display: flex;
		flex-direction: column;
		margin: 15px;
		justify-content: center;
	}
	h3,
	p {
		margin: 15px;
	}
	textarea {
		margin: 10px;
		margin-left: 0;
		margin-right: 0;
		padding: 0;
		width: 60%;
	}
	label {
		float: left;
	}
	input {
		width: 60%;
	}

	.input-error {
		border-color: red;
	}
	.button {
		position: relative;
		width: 80px;
	}

	@media screen and (max-width: 370px) {
		h1 {
			text-align: center;
		}
		iframe {
			margin: 10px;
			height: 200px;
			width: 300px;
		}
		div {
			display: flex;
			flex-direction: column;
			margin: 15px;
		}
		p {
			margin: 15px;
		}
		textarea {
			margin: 15px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
		}
	}
</style>
