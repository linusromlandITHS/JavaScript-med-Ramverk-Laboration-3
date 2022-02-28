<template>
	<transition>
		<div id="above_mainbg" style="">
			<div id="mainbg" style="margin-left: auto; margin-right: auto; background-color: white">
				<!-- <small><b>TestPetListing.vue</b> (anropar komponenten som motsvarar cards: ProductView) med en v-for </small> -->
				<header class="listing_header" style="margin: auto">
					<h3>Välkommen att se våra djur!</h3>
				</header>

				<div class="petHeaders d-flex flex-wrap justify-content-center">
					<span class="badgelike" @click="filter_by_pet_type('alla')">Alla</span>
					<span class="badgelike" @click="filter_by_pet_type('katt')">Katter</span>
					<span class="badgelike" @click="filter_by_pet_type('hund')">Hundar</span>
					<span class="badgelike" @click="filter_by_pet_type('kanin')">Kaniner</span>
					<span class="badgelike" @click="filter_by_pet_type('fisk')">Fiskar</span>
					<span class="badgelike" @click="filter_by_pet_type('häst')">Hästar</span>
				</div>

				<!-- <small
					><span class="linklike"> (Ta bort dessa sedan: </span>

					<span class="linklike" @click="displayCartContents()">Visa varukorg</span> &nbsp; | &nbsp;
					<span class="linklike" @click="purgeCart()">Töm varukorg</span>)</small
				> -->

				<div id="cardcontainer" class="d-flex flex-wrap justify-content-center">
					<!-- style="margin-left: auto; margin-right: auto" -->

					<div v-for="pet in current_pet_list" class="p-2" flex-fill :key="pet.id">
						<ProductCard2
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
	import ProductCard2 from '../components/ProductCard.vue';
	export default {
		name: 'PetListing2',

		components: {
			ProductCard2
		},
		data() {
			return {
				nn: 123,
				current_pet_list: null,
				full_pet_list: null,
				picture_1: ''
			};
		},

		methods: {
			filter_by_pet_type(category) {
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

				// UPPDATERAR ANTAL VAROR I KORGEN FÖR KNAPPEN UTIFRÅN LS (generisk)
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

<style scoped>
	* {
		font-family: 'Noto Mono', 'Roboto Mono', monospace;
		font-style: normal;
		font-weight: normal;
	}

	#cardcontainer {
		padding-top: 20px;
		padding-left: 10px;
		padding-right: 10px;

		/* background-image: url(assets/farm.jpg); */
		/* background-image: url(assets/farm2.jpg); */
		/* background-image: url('assets/mountain2.jpg'); */
		background-image: url('assets/bg10.jpg');
		/* background-image: url('assets/bg1.jpg'); */

		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;

		/*https://ui.glass/generator/ */
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(255, 255, 255, 0.75);
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
		display: block;

		font-family: 'Roboto Medium', 'Roboto', 'Roboto Mono' !important;
		color: black;
		margin-left: auto;
		margin-right: auto;
		padding: 16px;
		text-align: center;
	}

	/* https://www.codegrepper.com/code-examples/css/how+to+import+roboto+font+in+css */

	/* https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin-ext */
	* {
		font-family: 'Roboto Light', 'Roboto Medium', 'Roboto';
	}

	.p-2 {
		margin-bottom: 23px;
		cursor: pointer;
		flex-basis: 32%;
	}

	.badgelike {
		cursor: pointer;
		width: 120px;
		height: 42px;
		border-radius: 8px;

		/* font-family: 'Roboto Mono', monospace; */
		font-size: 18px;

		background: white;
		padding: 5px;
		border: none;
		color: black;
		margin: 2px;
		vertical-align: middle;

		margin-bottom: 4px;

		margin-right: 3px;

		transition: 0.3s;
	}

	.petHeaders {
		display: block;
		color: #aaa;

		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#eeeeee+47,cccccc+99 */

		padding: 1px;
		margin-top: 0px;
	}

	.badgelike:hover {
		background-color: white;
		font-size: 19px;
	}

	.cartspan {
		font-family: 'Roboto Mono', 'Noto Mono', 'Roboto Medium', 'Roboto';
		cursor: pointer;
		font-size: 13px !important;
		background: white;

		border: 1px solid grey;
		color: black;

		max-height: 26px;
	}

	.cartspan:hover {
		background: #faac77;
	}

	.cartdiv {
		font-family: 'Roboto Mono', 'Noto Mono', 'Roboto Medium', 'Roboto';
		cursor: pointer;

		background-color: antiquewhite;
		background-position: center;

		padding: 6px;
		border: none;
		color: black;
		margin-top: 11px;
		margin-bottom: 15px;
		min-height: 33px;

		backdrop-filter: blur(11px) saturate(80%);
		-webkit-backdrop-filter: blur(11px) saturate(80%);
	}

	@media screen and (min-width: 1281px) {
		#above_mainbg {
			color: black;
			padding: none;
			text-align: center;
			max-width: 74%;
			margin-right: auto;
			margin-left: auto;

			-webkit-box-shadow: 0px 16px 39px 0px rgba(0, 0, 0, 0.64);
			-moz-box-shadow: 0px 16px 39px 0px rgba(0, 0, 0, 0.64);
			box-shadow: 0px 16px 39px 0px rgba(0, 0, 0, 0.64);
		}
	}

	#mainbg {
		padding: 0px;

		margin-top: 9px;

		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}
</style>
