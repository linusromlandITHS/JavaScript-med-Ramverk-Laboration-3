<template>
	<div>
		<!-- Navbar  -->
		<Navbar />
		<router-view v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component" style="background: white" />
			</transition>
		</router-view>
	</div>
	<Toast
		:title="toast.title"
		:message="toast.message"
		:type="toast.type"
		:position="toast.position"
		:duration="toast.duration"
		ref="toastRef"
	/>
</template>

<script>
	//Component Imports:
	import Navbar from './components/Navbar.vue';
	import Toast from './components/Toast.vue';

	export default {
		name: 'App',
		components: {
			Navbar,
			Toast
		},
		data() {
			return {
				toast: {
					title: '',
					message: '',
					type: 'info',
					position: 'top-right',
					duration: 3000
				},
				toastRef: null
			};
		},
		methods: {
			showToast(options) {
				if (options.title) this.toast.title = options.title;
				this.toast.message = options.message;
				if (options.type) this.toast.type = options.type;
				if (options.position) this.toast.position = options.position;
				if (options.duration) this.toast.duration = options.duration;
				this.$refs.toastRef.show();
			}
		}
	};
</script>

<style>
	.scale-slide-enter-active,
	.scale-slide-leave-active {
		position: absolute;
		transition: all 0.85s ease;
	}

	.scale-slide-enter-from {
		left: -100%;
	}

	.scale-slide-enter-to {
		left: 0%;
	}

	.scale-slide-leave-from {
		transform: scale(1);
	}

	.scale-slide-leave-to {
		transform: scale(0.8);
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.34s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
