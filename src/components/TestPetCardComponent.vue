<template >


<!-- <div style="border: solid black 2px;padding: 12px; text-align:center" class="card d-flex flex-row">
      <div style="margin:auto">
<img :src="this.img_src" class="card_img" alt="Bild på djur"  style="width:100%"/>

        <h6 >{{ p_name }}</h6>
<hr />
        {{ p_price }} kr
<hr /> 
<p><b>
  
  <span v-on:click="go_to_details_view( this.p_id, this.p_name)" style="cursor:pointer">
  Läs mer om {{ p_name }}
  </span>
  </b></p> 

      </div>
    </div> -->




    <div class="card">
		<div class="image">
			<picture>
				<source  media="(max-width: 480px)" />
				<source :srcset="this.img_src" media="(max-width: 768px)" />
				<source :srcset="this.img_src" media="(max-width: 1500px)" />
				<img style="max-width:100%" alt="Bild på djur" />
			</picture>
		</div>
		<div class="title">{{ p_name }}</div>
		<div class="text">{{ p_name }} är {{ p_temperament }} - Lorem ipsum dolor sit amet...</div>
		<div class="price">{{p_price}} KR</div>
	</div>
	<button type="button" class="cart-button">Lägg i kundvagn</button>
</template>

<script>
	export default {
		name: 'TestPetCardComponent',
		props: {
  p_id: String,
  p_name: String,
  p_images_arr:Array,
	p_image_1:String,
  p_temperament: String,
	p_price:Number

  },
  data() 
  {
    		return {
				image_1 : "assets/products/" + this.p_id + "/0.jpg" ,
        // str : "<img class='card_img' src='assets/products/" + this.p_id + "/0.jpg' style='width=100%' />",
        img_src: "assets/products/" + this.p_id + "/0.jpg"
}
  },
  created()
  {
    //alert("this.p_id \n"+ this.p_id);
    this.img_src ="assets/products/" + this.p_images_arr[0];
  },
  methods: 
  {
    go_to_details_view(a, b, c)
    {
        alert("Här går vi till detaljvyn för: \n\n" + a, b, c);
    }
  }
	};
</script>

<style scoped>
/* .card_img
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
}
} */

/* Desktop: Bredd 200px, Höjd 290px
Mobil: Bredd 158px, Höjd 229px */


/* NATHIS STYLE HÄR */


	.card {
		width: 200px;
		height: 250px;
		background-color: #f0efee;
		padding: 5px;
		border-radius: 8px;
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
		color: #000000;
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

		color: #000000;
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
		color: #000000;
		margin-bottom: 5px;
	}

	.cart-button {
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
	}



</style>
