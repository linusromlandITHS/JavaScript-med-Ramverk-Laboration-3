<script>
	import TabsWrapper from '../components/TabsWrapper.vue';
	import Tab from '../components/Tab.vue';

	export default {
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
			<h2 class="tab-heading">David Sabel</h2>
			<h3 class="tab-info">Utvecklare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Fredric">
			<div class="img-container">
				<img class="img" src="assets\members\Fredric.jpg" alt="fredricryding" />
			</div>
			<h2 class="tab-heading">Fredric Ryding</h2>
			<h3 class="tab-info">Utvecklare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Kenneth">
			<div class="img-container">
				<img class="img" src="assets\members\Kenneth.jpg" alt="kennethwilhelmsson" />
			</div>
			<h2 class="tab-heading">Kenneth Wilhelmsson</h2>
			<h3 class="tab-info">Utvecklare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Linus">
			<div class="img-container">
				<img class="img" src="assets\members\Linus.jpg" alt="linusromland" />
			</div>
			<h2 class="tab-heading">Linus Romland</h2>
			<h3 class="tab-info">Projektledare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Nathi">
			<div class="img-container">
				<img class="img" src="assets\members\Nathi.jpg" alt="nathigeigant" />
			</div>
			<h2 class="tab-heading">Nathi Geigant</h2>
			<h3 class="tab-info">UI/UX</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Olena">
			<div class="img-container">
				<img class="img" src="assets\members\Olena.jpg" alt="olenadrozdova" />
			</div>
			<h2 class="tab-heading">Olena Drozdova</h2>
			<h3 class="tab-info">Utvecklare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
		<Tab title="Patryk">
			<div class="img-container">
				<img class="img" src="assets\members\Patryk.jpg" alt="patryksroka" />
			</div>
			<h2 class="tab-heading">Patryk Sroka</h2>
			<h3 class="tab-info">Utvecklare</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iure eligendi molestias sapiente?
				Quam ipsa dolorem perspiciatis vitae, adipisci odit magnam mollitia sed fugit incidunt dicta ipsam id
				unde exercitationem. Veniam accusantium iure saepe officiis, labore eveniet rem harum fugiat modi,
				pariatur vero, qui eum quibusdam temporibus unde dolorum. Molestiae.
			</p>
		</Tab>
	</TabsWrapper>
</template>

<style scoped>
	.img_container {
		background-color: black;
		height: 250px;
		width: auto;
		padding: 20px;
		border-radius: 8px;
	}
	.img {
		background-color: black;
		height: 250px;
		width: auto;
		/* padding: 20px; */
		border-radius: 8px;
	}
	.tab-heading {
		font-size: 18px;
		padding: 0;
		margin: auto;
	}

	.tab-info {
		font-size: 12px;
		font-family: 'Noto Mono', monospace;
	}

	p {
		font-family: Noto Serif;
		font-size: 12px;
	}
</style>
