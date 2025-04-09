<script setup>
import 'swiper/css';
import 'swiper/css/navigation';

</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica";
}
@font-face {
  font-family: "Helvetica";
  src:
    local("Helvetica"),
    url("./assets/fonts/Helvetica Neue LT GEO 65 Medium.ttf") format("opentype"),
    url("./assets/fonts/Helvetica Neue LT GEO 65 Medium.ttf") format("woff");
}

</style>
