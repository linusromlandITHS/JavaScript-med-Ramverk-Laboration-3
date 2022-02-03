<script>
  export default {
    created() {
      fetch('/database.json')
        .then((response) => response.json())
        .then((djur) => {
          console.log(djur);
          this.djur = djur;
          let d = djur.djursamling;
          let htmlarr = ["<table class=\"table\">"];
          for(let i=0; i<d.length; i++)
            {
            console.log( d[ i ]);
            let post = d[ i ];
            htmlarr.push("<tr>"); 
            console.log( post);
            for(let j in post) 
              {
                htmlarr.push("<td>" +  post[ j ] + "</td>");
              }
              htmlarr.push("</tr>"); 
            }
                  htmlarr.push("</table>");    
                  this.djurtabell = htmlarr.join("");
        })
    },
    data() {
      return {
        cities: null,
        djur:null,
        djurtabell:null
      }
    }
  }
</script>

<template>
<hr />
<h3>Vue-router-sidan DJUR här:</h3>
<h6>Visar bara innehållet i databasen som en tabell</h6>
  <!-- <ol>
    <li :key="city.id" v-for="city in cities">{{ city.name }}</li>
  </ol> -->


  <div v-html="djurtabell">

  </div>
<b>
DJUR SLUTAR HÄR
</b></template>
