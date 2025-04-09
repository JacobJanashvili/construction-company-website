<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive } from "vue";
import { useCycleList } from "@vueuse/core";

const props = defineProps({
  Items: Array,
});
const carousels = props.Items.map((item) => {
  const { state, next, prev } = useCycleList(item.images);
  return {
    item,
    currentImage: computed(() => state.value),
    next,
    prev,
  };
});
</script>

<template>
  <div class="wrapper">
    <div class="item" v-for="carousel in carousels" :key="carousel.item.id">
      <div class="item_subwrapper">
        <h1 class="title">{{ carousel.item.title }}</h1>
        <p class="description">{{ carousel.item.description }}</p>
        <button @click="carousel.prev()">← Prev</button>
        <button @click="carousel.next()">Next →</button>
      </div>
      <div class="carousel">
        <Transition name="fade">
          <img :src="carousel.currentImage.value" alt="Image" :key="carousel.currentImage.value" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  margin-top: 50px;

  .item {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 70px;
    margin-bottom: 40px;

    .item_subwrapper {
      width: 30%;
      padding-right: 20px;

      p {
        font-size: 14px;
        margin-bottom: 20px;
      }

    }
  }

  .carousel {
    width: 70%;
    img {
      height: 366px;
      width: 800px;
      object-fit: cover;
      object-position: bottom center;
    }


  }
}
</style>
