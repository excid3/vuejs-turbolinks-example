/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App from './app.vue'

document.addEventListener('turbolinks:load', () => {
  var element  = document.getElementById("hello")
  var cachedHtml = element.outerHTML

  var vueapp = new Vue({
    el: element,
    template: '<App/>',
    components: { App },
    destroyed: function() {
      this.$el.outerHTML = cachedHtml;
    }
  })

  document.addEventListener('turbolinks:before-cache', () => {
    vueapp.$destroy()
  })
})
