<!--
<template>


<div id="#app">
  <vue-toastr ref="mytoast"></vue-toastr>
</div>

</template>

<script>
import Vue from "vue";
import App from "./App.vue";

// import plugin
import VueToastr from "vue-toastr";
// register component
Vue.component("VueToastr", VueToastr);

Vue.config.productionTip = false;
// for more details about using component please check vue.js documentation out.
new Vue({
  render: h => h(App),
  components: {
    // "vue-toastr": VueToastr,
    // VueToastr,
  },
  mounted() {
    // Change default toast position.
    this.$refs.mytoast.defaultPosition = "toast-top-left";
    // Send message to browser screen
    this.$refs.mytoast.s(
      "This Message From Toastr Plugin\n You can access this plugin : <font color='yellow'>this.$toastr</font>"
    );
  }
}).$mount("#app");

</script> -->
