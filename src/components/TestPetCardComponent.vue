<template>
	<!-- <div style="border: solid black 2px;padding: 12px; text-align:center" class="card d-flex flex-row">
      <div style="margin:auto">
<img :src="this.img_src" class="card_img" alt="Bild på djur"  style="width:100%"/>

        <h6 >{{ p_name }}</h6>
<hr />
        {{ p_price }} kr
<hr />
<p><b>

  <span v-on:click="go_to_details_view( this.p_id, this.p_name)" style="cursor:pointer">

<router-link to="/">Hem</router-link>

  Läs mer om {{ p_name }}
  </span>
  </b></p>

      </div>
    </div> -->

	<!-- <router-link :to="'product/'" + this.p_id">-->

<div class="container_for_card_and_button">

	<div class="card" @click="go_to_details_view(this.p_id, this.p_name)">
		<div class="image">
			<picture>
				<source :srcset="this.img_src" media="(max-width: 480px)" />
				<source :srcset="this.img_src" media="(max-width: 768px)" />
				<source :srcset="this.img_src" media="(max-width: 1500px)" />
				<img :srcset="this.img_src" style="max-width: 100%" alt="Bild på djur" />
			</picture>

			<!-- <picture>
				<source :srcset="this.img_src" media="(max-width: 480px)" />
				<source :srcset="this.img_src" media="(max-width: 768px)" />
				<source :srcset="this.img_src" media="(max-width: 1500px)" />
				<img  :srcset="this.img_src" style="max-width:100%" alt="Bild på djur" />
			</picture> -->
		</div>
		<div class="title">{{ p_name }}</div>
		<div class="card_description_text">{{ p_name }} är {{ p_temperament }} - Lorem ipsum dolor sit amet...</div>
		
		<!-- .toLocaleString() visar nummer med mellanslag: 10000 blir 10 000 -->
		<div class="price">{{ p_price.toLocaleString() }} KR</div>
	</div>

	<button type="button" class="cart-button" @click="add_to_cart(this.p_id, this.p_name)">Lägg i kundvagn</button>

</div>
</template>

<script>
	export default {
		name: 'TestPetCardComponent',
		props: {
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
			}
		},
		data() {
			return {
				image_1: 'assets/products/' + this.p_id + '/0.jpg',
				img_src: 'assets/products/' + this.p_id + '/0.jpg'
				/*
				//image_1 : "assets/products/" + this.p_id + "/0.jpg" ,
        // str : "<img class='card_img' src='assets/products/" + this.p_id + "/0.jpg' style='width=100%' />",
        //img_src: "assets/products/" + this.p_id + "/0.jpg"
*/
			};
		},
		created() {
			//alert("this.p_id \n"+ this.p_id);
			this.img_src = 'assets/products/' + this.p_id + '/0.jpg';
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

<style scoped>
	/*
// Tidigare style innan Nathis här:

.card_img
{
  max-width: 90%;
  margin:5px;
  margin-bottom: 15px;
  border:1px solid black;

}

.card{
  max-width:45px;
  margin-top: 12px;

	
}

@media screen and (min-width: 500px)
{
.card{
  max-width:190px;
  margin-top: 14px;
  margin-bottom: 12px;
}
} */

	/* Desktop: Bredd 200px, Höjd 290px
Mobil: Bredd 158px, Höjd 229px */

	/* https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin-ext */
	/** {font-family: 'Roboto Light', 'Roboto Medium', 'Roboto'}*/

	/* NATHIS STYLE HÄR */



	.card {
		width: 200px;
		height: 250px;
		background-color: #f0efee;
		padding: 5px;
		border-radius: 8px;
		border:none;
		transition: transform .1s; /* Animation */

		margin-left: auto;
			margin-right: auto;
	}

	.card:hover {
		transform: scale(1.04);
	}

	.image {
		width: 190px;
		height: 137.1px;
		background: #cfc6c6;
		margin-bottom: 5px;
		border-radius: 8px;
	}

	/* Stylar img-element såsom .image nu */
	img {
		width: 190px;
		height: 137.1px;
		background: #cfc6c6;
		margin-bottom: 5px;
		border-radius: 8px;
	}

	.title {
		width: 190px;
		height: 17.14px;
		font-family: 'Roboto Mono', Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 5px;

		margin-top: 5px;
	}

	.card_description_text {
		width: 190px;
		height: 40px;

		font-family: 'Noto Serif', Roboto;/*, 'Roboto Mono', Arial;*/

		font-style: normal;
		font-weight: 200;
		font-size: 10px;
		line-height: 12px;

		color: #000000;
		margin-bottom: 5px;
	}

	.price {
		width: 190px;
		height: 14.11px;

		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		color: #000000;
		margin-bottom: 5px;
		font-family: "Noto Serif";
	}

	.cart-button {
		width: 200px;
		height: 42px;

		background: #faac77;
		border-radius: 8px;
		margin-top: 8px;

		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 12px;
		text-align: center;
		text-transform: uppercase;

		color: #f0efee;
		border: none;
		transition: transform .1s; /* Animation */

	}
	.cart-button:hover {

				transform: scale(1.04);
	}

	* {
		font-family: "Roboto";
		font-style: normal;
		font-weight: normal;
		
	}
</style>
