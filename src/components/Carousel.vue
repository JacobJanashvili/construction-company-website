<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Swiper from "swiper";
import { ref, onMounted } from "vue";
import { Navigation } from "swiper/modules";
const swiperInstances = ref([]); // To store each swiper instance

const props = defineProps({
  Items: Array,
});

onMounted(() => {
  // Initialize Swiper for each item
  swiperInstances.value = props.Items.map((_, index) => {
    return new Swiper(`.swiper-${index}`, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: `.nextButton-${index}`,
        prevEl: `.prevButton-${index}`,
      },
    });
  });
});
</script>

<template>
  <div class="wrapper">
    <div class="item" v-for="(carousel, index) in props.Items" :key="carousel.id">
      <div class="item_subwrapper">
        <h1 class="title">{{ carousel.title }}</h1>
        <p class="description">{{ carousel.description }}</p>
        <button class="prevButton" :class="'prevButton-' + index" @click="swiperInstances[index]?.slidePrev()">← Prev</button>
        <button class="nextButton" :class="'nextButton-' + index" @click="swiperInstances[index]?.slideNext()">Next →</button>
      </div>
      <div class="swiper" :class="'swiper-' + index">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="image in carousel.images"
            :key="image"
          >
            <img :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper{
  width: 100%;

}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  margin-top: 150px;
  margin-left: 70px;
  .item {
    display: flex;
    margin-bottom: 40px;

    .item_subwrapper {
      margin-right: 20px;
      width: 310px;

      h1{
        font-size: 24px;
      }
      p {
        font-size: 14px;
        margin-bottom: 20px;
        width: 310px;
        word-wrap: break-word;
      }
    }
  }

    img {
      height: 366px;
      width: 100%;
      object-fit: cover;
      object-position: bottom center;

    }

}
</style>
