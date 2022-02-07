<template >
    <div style="border: solid black 2px;padding: 12px; text-align:center" class="card d-flex flex-row">
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
    </div>
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
				image_1 : "assets/products/" + this.p_images_arr[0],
        // str : "<img class='card_img' src='assets/products/" + this.p_images_arr[0] + "' style='width=100%' />",
        img_src: "assets/products/" + this.p_images_arr[0]
}
  },
  created()
  {
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

<style>
.card_img
{
  max-width: 90%;
  margin:5px;
  margin-bottom: 15px;
  border:1px solid black;

}

.card{
  max-width:158px;
  margin-top: 12px;
}

@media screen and (min-width: 500px)
{
.card{
  max-width:270px;
  margin-top: 14px;
}

}

/* Desktop: Bredd 200px, Höjd 290px
Mobil: Bredd 158px, Höjd 229px */
</style>
