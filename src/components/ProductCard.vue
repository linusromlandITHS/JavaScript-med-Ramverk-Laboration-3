<script>
	import Button from './Button.vue';

	export default {
		name: 'ProductCard',
		components: {
			Button
		},
		props: {
			data: {
				type: Object,
				required: true
			},
			// NYTT
			p_id: {
				type: String,
				required: true
			},
			p_name: {
				type: String,
				required: true
			},
			p_one_picture: {
				type: String,
				required: true
			},
			p_image_1: {
				type: String,
				required: true
			},
			p_temperament: {
				type: String,
				required: true
			},
			p_price: {
				type: String,
				required: true
			},
			p_images_arr: {
				type: String,
				required: true
			},
			p_type: {
				type: String,
				required: true
			},
			p_description: {
				type: String,
				required: true
			}
		},


computed: {
      shorter_text_description() {
				if(this.p_description)
				{
        return this.p_description.substring(0,130).trim() + "..."; 
				}
				else{
					return "";
				}
      },
			p_price_with_space()
			{ // Visar pris snyggare (10000 blir 10 000)
				return this.p_price.toLocaleString();
			}
    },

		data() {
			return {
				//image_1: 'assets/products/' + this.p_id + '/0.jpg',
				img_src: 'assets/products/' + this.p_images_arr[0]
				/*
				//image_1 : "assets/products/" + this.p_id + "/0.jpg" ,
        // str : "<img class='card_img' src='assets/products/" + this.p_id + "/0.jpg' style='width=100%' />",
        //img_src: "assets/products/" + this.p_id + "/0.jpg"
*/
			};
		},

		created() {
//			console.log(this.data);

			//alert("this.p_id \n"+ this.p_id);
			this.img_src = 'assets/products/' + this.p_images_arr[0];
		},

		methods: {
			go_to_details_view(id_) {
				this.$router.push({ path: '/product/' + id_ + '/' });
			},
			add_to_cart(id_, na_) {
				//alert("Här lägger vi " + na_ + " i kundvagnen:\nID: " + id_);

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

				// 4 (Ev.) meddela vad som ligger i localStorage (kundvagnen) nu
				this.displayCartContents();
			},
			// Alerta innehållet i kundvagn (petCart) i Localstorage
			displayCartContents() {
				let fetched_cart = JSON.parse(localStorage.getItem('petCart'));
				let utarr = [];

				for (let i in fetched_cart) {
					utarr.push(i + ' (' + fetched_cart[i] + ')');
				}

				alert('Innehåll i petCart (i localStorage) nu:\n\n' + utarr.join('\n'));
			}
		}
	};
</script>
<template>
	<div @click="go_to_details_view(this.p_id)" class="card">
		<div class="image">

			<picture>
				<source :srcset="this.img_src" media="(max-width: 480px)" />
				<source :srcset="this.img_src" media="(max-width: 768px)" />
				<source :srcset="this.img_src" media="(max-width: 1500px)" />
				<img :srcset="this.img_src" style="max-width: 100%;max-height: 100%" alt="brutus" />
			</picture>

		</div>
		<div class="title">{{ p_name }}</div>
		<div class="text">{{ shorter_text_description }}</div>
		<div class="price">{{ p_price_with_space }}:-</div>
	</div>
	<Button class="btn" @click="add_to_cart(this.p_id, this.p_name)">lägg i kundvagn</Button>
</template>

<style scoped>
	.card {
		width: 200px;
		height: 250px;
		background-color: #f0efee;
		color: #333c3e;
		padding: 5px;
		margin-bottom: 5px;
		border-radius: 8px;
		border-style: none;

		cursor: pointer;
		transition: 0.3s ease-out;

		margin-left: auto;
		margin-right: auto;
	}

	.card:hover {
		transform: scale(1.04);
	}

	.img-image {
		width: 190px;
		height: 137.1px;
		object-fit: cover;
		object-position: 100% 0;
		max-width: 100%;
		/* max-width: fit-content; */
	}

	.image {
		width: 190px;
		height: 137.1px;
		background: #cfc6c6;
		margin-bottom: 5px;
		border-radius: 8px;
	}

	.title {
		width: 190px;
		height: 17.14px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 5px;
	}

	.text {
		width: 190px;
		height: 50.4px;

		font-family: Noto Serif;
		font-style: normal;
		font-weight: 200;
		font-size: 10px;
		line-height: 12px;

		margin-bottom: 5px;
	}

	.price {
		width: 190px;
		height: 14.11px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		margin-bottom: 5px;
	}

	/* .cart-button {
		width: 200px;
		height: 42px;

		background: #faac77;
		border-radius: 8px;
		margin-top: 5px;

		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 9px;
		line-height: 12px;
		text-align: center;
		text-transform: uppercase;

		color: #f0efee;
		border: none;
	} */

	.btn {
		text-transform: uppercase;
	}
</style>
