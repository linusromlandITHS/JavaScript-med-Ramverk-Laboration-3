<script>
	export default {
		name: 'Button',
		props: {
			alternative: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			larger: {
				type: Boolean,
				default: false
			}
		},
		emits: ['clicked'],
		computed: {
			className() {
				return `btn btn-${this.larger ? 'large' : 'small'} btn-${!this.alternative ? 'primary' : 'secondary'}`;
			}
		},
		methods: {
			clicked() {
				this.$emit('clicked');
			}
		}
	};
</script>

<template>
	<button type="button" :class="className" @click="clicked" :disabled="disabled"><slot>Submit</slot></button>
</template>

<style scoped>
	.btn {
		height: 42px;
		border-radius: 8px;
		font-family: 'Roboto Mono', monospace;
	}

	.btn-small {
		width: 200px;
		font-size: 14px;
	}

	.btn-large {
		width: 300px;
		font-size: 18px;
	}

	.btn-primary:hover {
		background: #fbc39d;
	}

	.btn-primary:disabled {
		background: #faac77;
	}

	.btn-secondary {
		background: #606b6f;
		color: white;
	}

	.btn-secondary:hover {
		background: #7c898d;
		color: white;
	}

	.btn-primary:disabled {
		background: #606b6f;
		color: white;
	}
</style>
