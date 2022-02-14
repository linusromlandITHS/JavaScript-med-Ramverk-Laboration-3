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
		<Tab title="David">
			<h2 class="tab-heading">David Sabel</h2>
			<h3 class="tab-info">Utvecklare</h3>
		</Tab>
		<Tab title="Fredric">
			<h2 class="tab-heading">Fredric Ryding</h2>
			<h3 class="tab-info">Utvecklare</h3>
		</Tab>
		<Tab title="Kenneth">
			<h2 class="tab-heading">Kenneth Wilhelmsson</h2>
			<h3 class="tab-info">Utvecklare</h3>
		</Tab>
		<Tab title="Linus">
			<h2 class="tab-heading">Linus Romland</h2>
			<h3 class="tab-info">Projektledare</h3>
		</Tab>
		<Tab title="Nathi">
			<h2 class="tab-heading">Nathi Geigant</h2>
			<h3 class="tab-info">UI/UX</h3>
		</Tab>
		<Tab title="Olena">
			<h2 class="tab-heading">Olena Drozdova</h2>
			<h3 class="tab-info">Utvecklare</h3>
		</Tab>
		<Tab title="Patryk">
			<h2 class="tab-heading">Patryk Sroka</h2>
			<h3 class="tab-info">Utvecklare</h3>
		</Tab>
	</TabsWrapper>
</template>

<style scoped>
	.tab-heading {
		font-size: 18px;
		padding: 0;
		margin: auto;
	}

	.tab-info {
		font-size: 12px;
		font-family: 'Noto Mono', monospace;
	}
</style>
