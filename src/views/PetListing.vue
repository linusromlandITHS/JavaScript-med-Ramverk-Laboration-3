<template>
	<transition>
		<div
			style="

				background: white;

				color: black;
				padding: 12px;
				text-align: center;
				max-width: 78%;
				margin-right: auto;
				margin-left: auto;
			"
		>
			<!-- <small><b>TestPetListing.vue</b> (anropar komponenten som motsvarar cards: ProductView) med en v-for </small> -->
			<h4 class="listing_header">Välkommen att se våra djur!</h4>

			<!--
		<span class="badgelike" @click="filter_by_pet_type('alla')">Alla</span>
		<span class="badgelike" @click="filter_by_pet_type('katt')">Katter</span>
		<span class="badgelike" @click="filter_by_pet_type('hund')">Hundar</span>
		<span class="badgelike" @click="filter_by_pet_type('kanin')">Kaniner</span>
		<span class="badgelike" @click="filter_by_pet_type('fisk')">Fiskar</span>
		<span class="badgelike" @click="filter_by_pet_type('häst')">Hästar</span>
 -->
			<div class="petHeaders d-flex flex-wrap justify-content-center">
				<span class="badgelike" @click="filter_by_pet_type('alla')">Alla</span>
				<span class="badgelike" @click="filter_by_pet_type('katt')">Katter</span>
				<span class="badgelike" @click="filter_by_pet_type('hund')">Hundar</span>
				<span class="badgelike" @click="filter_by_pet_type('kanin')">Kaniner</span>
				<span class="badgelike" @click="filter_by_pet_type('fisk')">Fiskar</span>
				<span class="badgelike" @click="filter_by_pet_type('häst')">Hästar</span>
			</div>

			<div class="cartdiv">
				<span class="cartspan" @click="displayCartContents()">Visa varukorg</span>
				<span class="cartspan" @click="purgeCart()">Töm varukorg</span>
			</div>

			<div
				id="mainbg"
				class="d-flex flex-wrap justify-content-center"
				style="margin-left: auto; margin-right: auto"
			>
				<div
					class="d-flex flex-wrap justify-content-center"
					style="background-color: #aaaaaa !important; margin-left: auto; margin-right: auto"
				>
					<div v-for="pet in current_pet_list" class="p-2" :key="pet.id">
						<!-- v-if="pet.type=='Fisk'" -->

						<ProductCard
							:key="pet.id"
							:p_id="pet.id"
							:p_name="pet.name"
							:p_images_arr="pet.images"
							:p_temperament="pet.temperament"
							:p_price="pet.price"
							:p_type="pet.type"
							:p_one_picture="this.picture_1"
							:p_description="pet.description"
						/>
					</div>
				</div>
				<hr />
			</div>
		</div>
	</transition>
</template>

<script>
	import ProductCard from '../components/ProductCard.vue';
	export default {
		name: 'PetListing',

		components: {
			ProductCard
		},
		data() {
			return {
				nn:123,
				current_pet_list: null,
				full_pet_list: null,
				picture_1: '' //current_pet_list[0]
			};
		},

		methods: {
			// keep_only_type(pet_type_to_show)
			// 	{
			// 		let full = this.full_pet_list;

			// let output_obj = new Object();

			// //https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
			// output_obj = { ...full };

			// 		for(let i in output_obj)
			// 			{
			// 				var b1 = output_obj[i];

			// console.log(b1)

			// 			output_obj[i]['IM1'] = this.image_1//output_obj[i]['p_images_arr'][0];

			// 			console.log("1¤¤¤¤¤¤ " + output_obj[i]['IM1'])
			// 			//['IM1']);

			// //	:p_images_arr = pet.images

			// 				//output_obj[i]['type']

			// 				console.log(full[i]['type'].toLowerCase() + " -- " +pet_type_to_show);

			// 				if(output_obj[i]['type'].toLowerCase() != pet_type_to_show)
			// 					{
			// 						console.log("tar bort:" + output_obj[ i ] + output_obj[ i ].name);
			// 						delete output_obj[ i ];

			// 					}
			// 					else
			// 					{

			// 				//output_obj[ i ]["picture_1"] = full[ i ]["p_images_arr"][0];

			// 						console.log("behåller:" + output_obj[ i ].name);
			// 						console.log("den har denna image1:" + output_obj[ i ]['image1']);
			// 						console.log("den har denna IM1:" + output_obj[i]['IM1']);

			// 						console.log("och detta:" + output_obj[ i ]);

			// console.log("#######" + output_obj[ i ]['image1'] + b1)
			// 			//	var b1 = output_obj[i]['p_images_arr'][0];

			// 					}
			// 			}

			// 	console.log(output_obj);
			// 	return output_obj;
			// 	},

			filter_by_pet_type(category) {
				//alla katt hund häst fisk kanin

				//
				//
				//
				console.log('filter_by_pet_type ' + category);
				switch (category) {
					case 'katt':
						this.current_pet_list = this.keep_only_type('katt');
						break;
					case 'hund':
						this.current_pet_list = this.keep_only_type('hund');
						break;
					case 'häst':
						this.current_pet_list = this.keep_only_type('häst');
						break;
					case 'fisk':
						this.current_pet_list = this.keep_only_type('fisk');
						break;
					case 'kanin':
						this.current_pet_list = this.keep_only_type('kanin');
						break;
					default:
						this.current_pet_list = this.full_pet_list;
				}
			},

			// Tömmer innehållet i varukorg (petCart) i localStorage
			purgeCart() {
				//https://stackoverflow.com/questions/15193461/how-to-set-localstorage-item-back-to-null
				localStorage.removeItem('petCart');


			// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');

			},
			add_to_cart(id_, na_) {
				//alert("Här lägger vi " + na_ + " i varukorgen:\nID: " + id_);

				// 1 Hämta tidigare innehåll i localStorage (en array)
				let cart;
				if (localStorage.getItem('petCart')) {
					cart = JSON.parse(localStorage.getItem('petCart'));

					//	alert("Det fanns ngt i ls");
				} else {
					//alert("ls var tomt.");
					cart = {}; //sessionStorage.getItem('petCart');
				}

				// 2 Lägg till det aktuella id:t till hämtat obj
				// Lägger till aktuellt djur
				cart[id_] = na_;

				// 3 Sätt localStorage till det nya objektet
				localStorage.setItem('petCart', JSON.stringify(cart));

				// 4 (Ev.) meddela vad som ligger i localStorage (varukorgen) nu
				//this.displayCartContents();
			},
			// Alerta innehållet i varukorg (petCart) i Localstorage
			displayCartContents() {
				let fetched_cart = JSON.parse(localStorage.getItem('petCart'));
				let utarr = [];

				for (let i in fetched_cart) {
					utarr.push(i + ' (' + fetched_cart[i] + ')');
				}

				alert('Innehåll i petCart (i localStorage) nu:\n\n' + utarr.join('\n'));
			},

			keep_only_type(pet_type_to_show) {
				let full = this.full_pet_list;

				let output_obj = new Object();

				//https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
				output_obj = { ...full };

				for (let i in output_obj) {
					var b1 = output_obj[i];

					console.log(b1);

					output_obj[i]['IM1'] = this.image_1; //output_obj[i]['p_images_arr'][0];

					console.log('1¤¤¤¤¤¤ ' + output_obj[i]['IM1']);
					//['IM1']);

					//	:p_images_arr = pet.images

					//output_obj[i]['type']

					console.log(full[i]['type'].toLowerCase() + ' -- ' + pet_type_to_show);

					if (output_obj[i]['type'].toLowerCase() != pet_type_to_show) {
						console.log('tar bort:' + output_obj[i] + output_obj[i].name);
						delete output_obj[i];
					} else {
						//output_obj[ i ]["picture_1"] = full[ i ]["p_images_arr"][0];

						console.log('behåller:' + output_obj[i].name);
						console.log('den har denna image1:' + output_obj[i]['image1']);
						console.log('den har denna IM1:' + output_obj[i]['IM1']);

						console.log('och detta:' + output_obj[i]);

						console.log('#######' + output_obj[i]['image1'] + b1);
						//	var b1 = output_obj[i]['p_images_arr'][0];
					}
				}
				console.log(output_obj);
				return output_obj;
			}
		},
		created() {
			//this.picture_1 = this.p_images_arr[0];
			fetch('/database.json')
				.then((response) => response.json())
				.then((djur) => {
					console.log(djur);
					this.djur = djur;
					let d = djur.animals;
					this.full_pet_list = d;
					// Börja med att lista alla djur;
					this.current_pet_list = this.full_pet_list;
				});

				

			// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');


		}
	};
</script>

<style>
	* {
		font-family: 'Noto Mono', 'Roboto Mono', monospace;
		font-style: normal;
		font-weight: normal;
	}

	.linklike {
		cursor: pointer;
		font-family: 'Roboto Medium', 'Roboto', 'Roboto Mono' !important;
		color: #333333;
	}

	.linklike:hover {
		text-decoration-line: underline;
		color: black;
	}

	.listing_header {
		font-family: 'Roboto Medium', 'Roboto', 'Roboto Mono' !important;
		color: black;
	}

	/* https://www.codegrepper.com/code-examples/css/how+to+import+roboto+font+in+css */

	/* https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin-ext */
	* {
		font-family: 'Roboto Light', 'Roboto Medium', 'Roboto';
	}

	.p-2 {
		margin-bottom: 14px;
		cursor: pointer;
		flex-basis: 25%;
	}

	.badgelike {
		font-family: 'Roboto Mono', 'Noto Mono', 'Roboto Medium', 'Roboto';
		cursor: pointer;
		line-height: 11px;
		font-size: 13px !important;
		background: #faac77;
		padding: 5px;
		border: 1px solid black;
		color: black;
		margin: 0px;
		margin-top: 15px;
		margin-bottom: 15px;
		margin-right: 3px;
	}

	.petHeaders {
		color: #aaa;

		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#eeeeee+47,cccccc+99 */
		background: white;
		padding: 5px;
		margin-top: 15px;
	}

	.badgelike:hover {
		background-color: white;
	}

	.cartspan {
		font-family: 'Roboto Mono', 'Noto Mono', 'Roboto Medium', 'Roboto';
		cursor: pointer;
		font-size: 13px !important;
		background: white;
		padding: 5px;
		padding-left: px;
		padding-right: 8px;
		border: 1px solid grey;
		color: black;
		margin-top: 2px;
		margin-bottom: 1px;
		margin-right: 3px;
	}

	.cartspan:hover {
		background: #faac77;
	}

	.cartdiv {
		font-family: 'Roboto Mono', 'Noto Mono', 'Roboto Medium', 'Roboto';
		cursor: pointer;

		background: white;
		padding: 6px;
		border: none;
		color: black;
		margin-top: 11px;
		margin-bottom: 15px;
		min-height: 33px;

		background: white;
	}

	#mainbg {
		padding: 16px;
		background-color: #aaaaaa;
		margin-top: 9px;
	}
</style>
