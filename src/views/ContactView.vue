<script>
	export default {
		name: 'ContactView',
		data() {
			return {
				name: '',
				email: '',
				msg: '',
				question: '',
				nameError: false,
				emailError: false
			};
		},
		methods: {
			onClick() {
				this.nameError = false;
				this.emailError = false;
				this.clicked = true;

				if (this.name != '' && this.email != '') {
					this.msg = 'Tack för din fråga! Vi kommer att kontakta dig så snart som möjligt.';
					this.clearValue();
				} else {
					if (!this.name) this.nameError = true;
					if (!this.email) this.emailError = true;
					this.msg = 'Skriv ditt namn och email!';
				}
			},
			clearValue() {
				this.name = '';
				this.email = '';
				this.question = '';
			}
		}
	};
</script>

<template>
	<div class="main">
		<div class="text-field">
			<h4>Ställ en fråga till oss</h4>
			<div class="field">
				<input v-model="name" type="text" class="" :class="{ 'input-error': nameError }" placeholder="Namn" />
			</div>
			<div class="field">
				<input v-model="email" type="email" :class="{ 'input-error': emailError }" placeholder="Email" />
			</div>

			<div class="field">
				<textarea v-model="question" placeholder="Skriv ditt meddelande här" />
			</div>

			<input class="btn btn-primary btn" @click="onClick" type="button" value="Skicka" />
			<h3>{{ msg }}</h3>
		</div>
		<div class="address">
			<p><i class="bi bi-alarm-fill" /> 9:00 - 18:00</p>
			<p><i class="bi bi-building" /> Klaraborgen, 411 03 Göteborg</p>
			<p><i class="bi bi-envelope-fill" /> Rmr@info.com</p>
			<p><i class="bi bi-telephone-fill" /> 031-118 118</p>

			<iframe src="http://maps.google.com/maps?q=57.7089,11.9746&z=16&output=embed" />
		</div>
	</div>
</template>

<style scoped>
	input {
		margin: 5px;
		width: 100%;
	}
	label {
		margin: 10px;
	}
	iframe {
		margin: 20px;
		height: 200px;
		width: 300px;
	}
	h3,
	p {
		margin: 15px;
	}
	h4 {
		margin: 10px;
	}
	textarea {
		margin: 10px;
		margin-left: 5px;
		margin-right: 0;
		padding: 0;
		width: 100%;
		height: 200px;
	}
	label {
		float: left;
	}
	h1,
	label,
	h3,
	p {
		color: black;
	}
	.text-inner {
		position: absolute;
		margin-top: 250px;
	}
	.text-field {
		float: left;
		width: 350px;
		margin: 10px;
	}
	.address {
		float: left;
		width: 350px;
		margin: 10px;
	}
	label {
		float: left;
	}
	.main {
		background-color: white;
		color: black;
		padding: 12px;
		max-width: 78%;
		margin-right: auto;
		margin-left: auto;
		height: 700px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
	.input-error {
		border-color: red;
	}

	@media (min-width: 320px) and (max-width: 375px) {
		h4 {
			text-align: center;
		}
		h3 {
			font-size: 16px;
			color: red;
		}
		iframe {
			margin: 10px;
			height: 235px;
			width: 200px;
		}
		.icons {
			height: 14px;
		}
		.main {
			display: flex;
			flex-direction: column;
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			position: relative;
			height: 950px;
		}
		.text-field {
			display: block;
			width: 200px;
			margin: 10px;
			position: absolute;
			top: 2%;
		}
		.address {
			display: block;
			width: 200px;
			margin: 10px;
			position: absolute;
			top: 51%;
		}
		p {
			margin: 15px;
			font-size: 12px;
		}
		textarea {
			margin: 10px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
			width: 100%;
			float: left;
		}
		input {
			margin-left: 0;
		}
		.field {
			clear: both;
			text-align: left;
		}
		label {
			float: left;
		}
	}

	@media (min-width: 376px) and (max-width: 425px) {
		h4 {
			text-align: center;
		}
		h3 {
			font-size: 16px;
			color: red;
		}
		iframe {
			margin: 10px;
			height: 205px;
			width: 200px;
		}
		.main {
			display: flex;
			flex-direction: column;
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			position: relative;
			height: 950px;
		}
		.text-field {
			display: block;
			width: 200px;
			margin: 10px;
			position: absolute;
			top: 2%;
		}
		.address {
			display: block;
			width: 200px;
			margin: 10px;
			position: absolute;
			top: 51%;
		}
		p {
			margin: 15px;
			font-size: 14px;
		}
		textarea {
			margin: 10px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
			width: 100%;
			float: left;
		}
		input {
			margin-left: 0;
		}
		.field {
			clear: both;
			text-align: left;
		}
		label {
			float: left;
		}
	}
	@media (min-width: 426px) and (max-width: 768px) {
		h4 {
			text-align: center;
		}
		h3 {
			font-size: 18px;
			color: red;
		}
		iframe {
			margin: 10px;
			height: 220px;
			width: 300px;
		}
		.main {
			display: flex;
			flex-direction: column;
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			position: relative;
			height: 950px;
		}
		.text-field {
			display: block;
			width: 300px;
			margin: 10px;
			position: absolute;
			top: 2%;
		}
		.address {
			display: block;
			width: 300px;
			margin: 10px;
			position: absolute;
			top: 51%;
		}
		p {
			margin: 15px;
			font-size: 15px;
		}
		textarea {
			margin: 10px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
			width: 100%;
			float: left;
		}
		input {
			margin-left: 0;
		}
		.field {
			clear: both;
			text-align: left;
		}
		label {
			float: left;
		}
	}
	@media (min-width: 769px) and (max-width: 980px) {
		h4 {
			text-align: center;
		}
		h3 {
			font-size: 18px;
			color: red;
		}
		iframe {
			margin: 10px;
			height: 220px;
			width: 300px;
		}
		.main {
			display: flex;
			flex-direction: column;
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			position: relative;
			height: 950px;
		}
		.text-field {
			display: block;
			width: 300px;
			margin: 10px;
			position: absolute;
			top: 2%;
		}
		.address {
			display: block;
			width: 300px;
			margin: 10px;
			position: absolute;
			top: 51%;
		}
		p {
			margin: 15px;
			font-size: 15px;
		}
		textarea {
			margin: 10px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
			width: 100%;
			float: left;
		}
		input {
			margin-left: 0;
		}
		.field {
			clear: both;
			text-align: left;
		}
		label {
			float: left;
		}
	}
</style>
