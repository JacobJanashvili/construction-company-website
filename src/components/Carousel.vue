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
      slidesPerView: 2.8,
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
    <div
      class="item"
      v-for="(carousel, index) in props.Items"
      :key="carousel.id"
    >
      <div class="item_subwrapper">
        <h1 class="title">{{ carousel.title }}</h1>
        <p class="description">{{ carousel.description }}</p>
        <div class="button-div">
          <a
            class="prevButton arrowWrapper"
            :class="'prevButton-' + index"
            @click="swiperInstances[index]?.slidePrev()"
          >
            <img id="arrow" src="/fi-rr-arrow-left.svg" alt="" />
          </a>
          <a
            class="nextButton arrowWrapper"
            :class="'nextButton-' + index"
            @click="swiperInstances[index]?.slideNext()"
          >
            <img id="arrow" src="/fi-rr-arrow-right.svg" alt="" />
          </a>
        </div>
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
.swiper {
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

      h1 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
        margin-bottom: 20px;
        width: 310px;
        word-wrap: break-word;
        color: #5b5b5b;
      }
    }
  }
  .button-div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .arrowWrapper {
      margin: 0 10px;
      display: block;
    }
    .arrowWrapper:hover {
      background-color: #ffb717;
      transition: 0.3s ease-out;
      #arrow {
        filter: brightness(0) saturate(100%) invert(87%) sepia(66%) saturate(0%)
          hue-rotate(232deg) brightness(107%) contrast(101%);
      }
    }
    #arrow {
      height: auto;
      padding: 13px;
      border: 1px solid #ffb717;
      cursor: pointer;
      display: block;
    }
  }
  img {
    height: 366px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
