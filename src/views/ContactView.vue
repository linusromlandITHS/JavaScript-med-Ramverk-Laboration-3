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
	<div class="main">
		<div class="field">
			<label>Namn</label>
			<input v-model="name" type="text" :class="{ 'input-error': !name && clicked }" />
		</div>
		<div class="field">
			<label>Email</label>
			<input v-model="email" type="email" :class="{ 'input-error': !email && clicked }" />
		</div>
		<div class="field">
			<textarea placeholder="Skriv din fråga" />
		</div>
		<input class="button" @click="onClick" type="button" value="Skicka" />
		<h3>{{ msg }}</h3>
	</div>

	<div class="text-inner">
		<p>Öppettider: 9:00 - 18:00</p>
		<p>Adress:</p>
		<p>Email: redmountain_team@gmail.com</p>
	</div>
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
		margin-left: 375px;
		height: 450px;
		width: 600px;
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
	.field {
		clear: both;
		text-align: right;
	}
	label {
		float: left;
	}
	.main {
		float: left;
	}
	.input-error {
		border-color: red;
	}
	.button {
		position: relative;
		width: 80px;
	}

	@media screen and (max-width: 375px) {
		h1 {
			text-align: center;
		}
		iframe {
			margin: 10px;
			height: 200px;
			width: 300px;
		}
		.main {
			display: flex;
			flex-direction: column;
			margin: 15px;
			float: left;
		}
		p {
			margin: 15px;
		}
		textarea {
			margin: 10px;
			margin-left: 0;
			margin-right: 0;
			padding: 0;
			width: 100%;
			float: left;
		}
		.field {
			clear: both;
			text-align: left;
		}
		label {
			float: left;
		}
		/* .main {
			float: left;
		} */
	}
</style>
