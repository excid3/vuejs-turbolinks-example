/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App from './app.vue'

document.addEventListener('turbolinks:load', () => {
  var vueapp = new Vue({
    el: "#hello",
    template: '<App/>',
    components: { App },
    beforeMount: function() {
      this.$originalEl = this.$el.outerHTML
    },
    destroyed: function() {
      this.$el.outerHTML = this.$originalEl;
    }
  })

  document.addEventListener('turbolinks:before-cache', () => {
    vueapp.$destroy()
  })
})
