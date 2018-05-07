<template>
  <div id="app">
    <navbar-header/>
    <router-view/>
  </div>
</template>

<script>
import NavbarHeader from '@/components/layout/Header'
export default {
  name: 'App',
  components: {
    NavbarHeader
  }
}
</script>

<style>
* {
  font-size: 14px;
}
body {
   background-image: url('assets/bg_accounting.jpeg');
}
</style>
