<template>
	<div style="background-color: white !important;color:black; padding: 12px; border: 1px solid; text-align:center">

<p>Testsida för listningen</p>
<i>(Visar här upp  info via TestPetCardComponent som får info som props)</i>
<hr />
<small>** <u>Använder ej Nathis mall här än</u><br/>Använder Bootstrap flex: <b>class="d-flex flex-wrap justify-content-around"</b> på "containern"
samt <b>class="p-2"</b> på elementen</small>


		<!-- <div v-html="djurtabell" style="padding: 12px; border: 1px solid" /> -->

<hr /> 
<h4><i>Välkommen att se våra djur!</i></h4>
<hr /> 

<span class="linklike" v-on:click="onclick('alla')">Alla</span> | <span class="linklike" v-on:click="onclick('katt')">Katter</span> | <span class="linklike" v-on:click="onclick('hund')">Hundar</span> | <span class="linklike" v-on:click="filter_by_pet_type('kanin')">Kaniner</span> | <span class="linklike" v-on:click="filter_by_pet_type('fisk')">Fiskar</span> | <span class="linklike" v-on:click="filter_by_pet_type('häst')">Hästar</span>
<hr /> 
<div  class="d-flex flex-wrap bg-light  justify-content-around">
  <div v-for="pet in current_pet_list" class="p-2">

	<TestPetCardComponent 
	:p_id=pet.id
  :p_name=pet.name
	:p_images_arr = pet.images
  :p_temperament=pet.temperament
	:p_price=pet.price
	/>


</div>	
</div>
			<hr />
	</div>
</template>

<script>
	import TestPetCardComponent from '../components/TestPetCardComponent.vue';

	export default {
		name: 'TestPetListing',
			components: {
			TestPetCardComponent
		},
		data() {
			return {
				current_pet_list: null,
				full_pet_list: null,
				//image_1 : ""

				//djurtabell: null
			};
		},
		created() 
		{
			this.image_1 = this.p_images_arr[0];
		},

		methods: 
		{
			onclick(djurtyp
			)
			{
				this.filter_by_pet_type(djurtyp);
			},

	keep_only_type(pet_type_to_show)
	{ 
		let full = this.full_pet_list;


let output_obj = new Object();

//https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
output_obj = { ...full };

		for(let i in output_obj)
			{
			output_obj[i]['IM1'] = this.image_1//output_obj[i]['p_images_arr'][0];

			console.log("1¤¤¤¤¤¤ "+output_obj[i]['IM1'])
			//['IM1']);


//	:p_images_arr = pet.images


				//output_obj[i]['type']

				console.log(full[i]['type'].toLowerCase() + " -- " +pet_type_to_show);

				if(output_obj[i]['type'].toLowerCase() != pet_type_to_show)
					{
						console.log("tar bort:" + output_obj[ i ] + output_obj[ i ].name);
						delete output_obj[ i ];

					}
					else
					{
						console.log("behåller:" + output_obj[ i ].name);
						console.log("den har denna image1:" + output_obj[ i ]['image1']);
						console.log("den har denna IM1:" + output_obj[i]['IM1']);
						
						//output_obj[i]['IM1']

						console.log("och detta:" + output_obj[ i ]);

					}
			}

	console.log(output_obj);
	return output_obj;
	},


		filter_by_pet_type(category)
		{
//alla katt hund häst fisk kanin

// 
// 
// 
	console.log("filter_by_pet_type " + category);
	switch(category) {

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
}

		},
		created() {
			fetch('/database.json')
				.then((response) => response.json())
				.then((djur) => {
					console.log(djur);
					this.djur = djur;
					let d = djur.animals;
          this.full_pet_list = d;
					// Börja med att lista alla djur;
					this.current_pet_list =this.full_pet_list;
				});
		}
	};
</script>

<style>

.linklike{
cursor: pointer;

}

</style>

