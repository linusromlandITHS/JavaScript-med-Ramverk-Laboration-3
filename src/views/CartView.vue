<script></script>

<template>
	<h1>Min varukorg</h1>
	<div id="itemSection">
		<li>Added item*</li>
		<li>Added item*</li>
		<li>Added item*</li>
	</div>
	<div class="container-sm">
		<h4>
			Total summa
			<span id="inclVAT">inkl. moms </span>
		</h4>
		<p id="totalAmount">"Total amount"</p>
	</div>
	<button id="checkOut" type="button" class="btn btn-secondary">Gå vidare till kassan</button>
</template>

<style>
	li {
		list-style: none;
	}

	h1 {
		margin-bottom: 20px;
	}

	h4 {
		margin-top: 0.5rem;
	}
	@media (max-width: 575.98px) {
		.container-sm {
			background-color: rgba(44, 44, 44, 0.5);
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			margin: 20px 0 20px 0;
		}

		#checkOut {
			width: 100%;
		}
	}

	#inclVAT {
		display: block;
		font-size: small;
	}

	#itemSection {
		color: black;
	}

	#totalAmount {
		margin-top: 1rem;
	}
</style>
