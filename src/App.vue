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
    url("./assets/fonts/helvetica-neue-lt-geo-75-bold-caps.ttf") format("opentype"),
    url("./assets/fonts/helvetica-neue-lt-geo-75-bold-caps.ttf") format("woff");
}

</style>
