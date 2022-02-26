<script>
	import TabsWrapper from '../components/TabsWrapper.vue';
	import Tab from '../components/Tab.vue';

	export default {
		data() {
			return {
				text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.`,
				pl: `Projektledare`,
				ui: `UI/UX`,
				ut: `Utvecklare`
			};
		},
		components: {
			TabsWrapper,
			Tab
		}
	};
</script>

<template>
	<TabsWrapper>
		<Tab title="David"
			><div class="img-container">
				<img class="img" src="assets\members\David.jpg" alt="davidsabel" />
			</div>
			<h2 class="tab-heading">
				David Sabel
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ ut }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Fredric">
			<div class="img-container">
				<img class="img" src="assets\members\Fredric.jpg" alt="fredricryding" />
			</div>
			<h2 class="tab-heading">
				Fredric Ryding
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ ut }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Kenneth">
			<div class="img-container">
				<img class="img" src="assets\members\Kenneth.jpg" alt="kennethwilhelmsson" />
			</div>
			<h2 class="tab-heading">
				Kenneth Wilhelmsson
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ ut }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Linus">
			<div class="img-container">
				<img class="img" src="assets\members\Linus.jpg" alt="linusromland" />
			</div>
			<h2 class="tab-heading">
				Linus Romland
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ pl }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Nathi">
			<div class="img-container">
				<img class="img" src="assets\members\Nathi.jpg" alt="nathigeigant" />
			</div>
			<h2 class="tab-heading">
				Nathi Geigant
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ ui }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Olena">
			<div class="img-container">
				<img class="img" src="assets\members\Olena.jpg" alt="olenadrozdova" />
			</div>
			<h2 class="tab-heading">
				Olena Drozdova
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
			</h2>

			<h3 class="tab-info">{{ ut }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
		<Tab title="Patryk">
			<div class="img-container">
				<img class="img" src="assets\members\Patryk.jpg" alt="patryksroka" />
			</div>
			<h2 class="tab-heading">
				Patryk Sroka
				<a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook" /></a>
				<a href="https://www.twitter.com" target="_blank"><i class="bi bi-twitter" /></a>
				<a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin" /></a>
				<a href="https://www.twitch.tv/pappapatryk" target="_blank"><i class="bi bi-twitch" /></a>
			</h2>

			<h3 class="tab-info">{{ ut }}</h3>
			<p>
				{{ text }}
			</p>
		</Tab>
	</TabsWrapper>
</template>

<style lang="scss" scoped>
	.img {
		background-color: black;
		height: 100%;
		width: 100%;
		border-radius: 8px;
		margin-bottom: 10px;
	}
	.tab-heading {
		font-size: 18px;
		margin: 0;
	}

	.tab-info {
		font-size: 12px;
		font-family: 'Noto Mono', monospace;
	}

	p {
		font-family: Noto Serif;
		font-size: 12px;
	}

	.bi-facebook {
		margin-right: 1%;
	}

	.bi-twitter {
		margin-right: 1%;
	}

	.bi-linkedin {
		margin-right: 1%;
	}

	/* | ------------------------ Max-width ----------------------------- | */

	@media (max-width: 575.98px) {
		.img-container {
			display: flex;
			justify-content: center;
		}

		.img {
			display: flex;
			justify-content: center;
			max-width: 100%;
		}
		.tab-heading {
			font-size: 14px;
			margin: 0;
		}
	}
</style>
