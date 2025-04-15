<script setup>
import "swiper/css";
import "swiper/css/navigation";
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: "Helvetica";
  src: url("./assets/fonts/helvetica-neue-lt-geo-75-bold-caps.ttf")
    format("woff");
}
@font-face {
  font-family: "Helvetica-light";
  src: url("./assets/fonts/helvetica-neue-lt-geo-55-roman-caps.ttf")
    format("woff");
}
</style>
