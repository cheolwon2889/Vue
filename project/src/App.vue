<template>
  <TheHeaderVue></TheHeaderVue>
  <router-view></router-view>
</template>

<script>
import TheHeaderVue from './components/layout/TheHeader.vue'
export default {
  components : {
    TheHeaderVue,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  scroll-padding-top: 2rem;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background: #1f242d;
  color: #fff;
}
html {
  font-family: 'Poppins', sans-serif;
}
</style>