<script setup>
import "swiper/css";
import "swiper/css/navigation";
import ProgressSpinner from "primevue/progressspinner";
import Toast from "primevue/toast";
</script>

<template>
  <Toast />
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <ProgressSpinner />
    </template>
  </Suspense>
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
.p-toast,
.p-toast-message,
.p-toast-summary,
.p-toast-detail {
  font-family: "Helvetica-light", sans-serif !important;
}
</style>
