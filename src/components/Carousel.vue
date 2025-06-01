<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Swiper from "swiper";
import {
  ref,
  onMounted,
  watch,
  nextTick,
  defineAsyncComponent,
  computed,
} from "vue";
import Skeleton from "primevue/skeleton";

import { Navigation } from "swiper/modules";
const swiperInstances = ref([]);
const Gallery = defineAsyncComponent(() => import("primevue/galleria"));

const props = defineProps({
  Items: Array,
});

const isLoading = ref(false);
const totalLength = ref(props.Items.length);
const pageNumbers = ref([]);
const itemsPerPage = ref(7);
const currentPage = ref(1);
const indexOfLastPage = ref(currentPage.value * itemsPerPage.value);
const indexOfFirstPage = ref(indexOfLastPage.value - itemsPerPage.value);
const currentItems = ref([]);
const isNextHovered = ref(false);
const isPrevHovered = ref(false);

const galleriaData = computed(() =>
  currentItems.value.map((location) => {
    const galleriaItems = location.images.map((imgObj) => ({
      itemImageSrc: imgObj.full,
      thumbnailImageSrc: imgObj.thumb,
      alt: `${location.title} სლაიდი`,
      title: location.title,
    }));
    return {
      ...location,
      galleriaItems,
    };
  })
);

// Galleria State
const isGalleryVisible = ref(false);
const selectedImages = ref([]);
const activeImageIndex = ref(0);
const openGallery = (groupIndex, imageIndex) => {
  selectedImages.value = galleriaData.value[groupIndex]?.galleriaItems || [];
  activeImageIndex.value = imageIndex;
  isGalleryVisible.value = true;
};
const closeGallery = () => {
  isGalleryVisible.value = false;
  selectedImages.value = [];
  activeImageIndex.value = 0;
};

// Pagination Setup
currentItems.value = props.Items.slice(
  indexOfFirstPage.value,
  indexOfLastPage.value
);
for (let i = 1; i <= Math.ceil(totalLength.value / itemsPerPage.value); i++) {
  pageNumbers.value.push(i);
}

const goToPage = async (page) => {
  window.scrollTo(0, 0);
  isLoading.value = true;
  currentPage.value = page;
  indexOfLastPage.value = currentPage.value * itemsPerPage.value;
  indexOfFirstPage.value = indexOfLastPage.value - itemsPerPage.value;
  currentItems.value = props.Items.slice(
    indexOfFirstPage.value,
    indexOfLastPage.value
  );

  await nextTick();
  const images = document.querySelectorAll(".swiper-slide img");
  const loadImages = Array.from(images).map((img) =>
    img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        })
  );
  await Promise.all(loadImages);
  initializeSwiper();
  isLoading.value = false;
};

const initializeSwiper = async () => {
  await nextTick();
  swiperInstances.value = [];

  currentItems.value.forEach((_, index) => {
    const container = document.querySelector(`.swiper-${index}`);
    if (container) {
      swiperInstances.value[index] = new Swiper(container, {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: `.nextButton-${index}`,
          prevEl: `.prevButton-${index}`,
        },
      });
    }
  });
};

onMounted(() => {
  initializeSwiper();
});

watch(currentItems, async () => {
  await nextTick();
  const images = document.querySelectorAll(".swiper-slide img");
  const loadImages = Array.from(images).map((img) =>
    img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        })
  );
  await Promise.all(loadImages);
  initializeSwiper();
  isLoading.value = false;
});
</script>

<template>
  <div class="wrapper">
    <!-- Show skeleton while loading -->
    <template v-if="isLoading">
      <div v-for="n in 3" :key="n" class="skeleton-container">
        <Skeleton height="24px" width="300px" class="mb-2" />
        <Skeleton height="20px" width="250px" class="mb-2" />
        <div class="skeleton-swiper" style="display: flex; gap: 10px">
          <Skeleton
            height="366px"
            width="100%"
            v-for="i in 3"
            :key="i"
            class="mr-2"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="item"
        v-for="(carousel, index) in currentItems"
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
              <img
                id="arrow"
                class="arrow-left"
                src="/fi-rr-arrow-left.svg"
                alt=""
              />
            </a>
            <a
              class="nextButton arrowWrapper"
              :class="'nextButton-' + index"
              @click="swiperInstances[index]?.slideNext()"
            >
              <img
                id="arrow"
                class="arrow-right"
                src="/fi-rr-arrow-right.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="swiper" :class="'swiper-' + index">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              @click="openGallery(index, i)"
              v-for="(image, i) in carousel.images"
              :key="image.full"
            >
              <img class="item-img" :src="image.full" alt="" />
              <div class="img-hover">
                <svg
                  class="img-hover-icon"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Gallery with activeIndex -->
    <Gallery
      v-model:visible="isGalleryVisible"
      :value="selectedImages"
      :activeIndex="activeImageIndex"
      :full-screen="true"
      :circular="true"
      :showItemNavigators="true"
      :num-visible="4"
      :show-thumbnail-navigators="false"
      @hide="closeGallery"
      :pt="{
        root: { style: 'position: relative; overflow: visible; border: none;' },
        nextButton: {
          style: `
      position: absolute;
      top: 50%;
      right: -80px; /* negative offset moves it outside */
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      z-index: 20;
      cursor: pointer;
      background-color: white;
      border: 1px solid #ffb717;
      border-radius: 0
    `,
          onmouseenter: (event) => {
            event.target.style.backgroundColor = '#ffb717';
            const img = event.target.querySelector('img');
            if (img) {
              img.style.filter =
                'invert(100%) brightness(1000%) contrast(100%)';
            }
          },
          onmouseleave: (event) => {
            event.target.style.backgroundColor = 'white';
            const img = event.target.querySelector('img');
            if (img) {
              img.style.filter = 'invert(0%)';
            }
          },
        },
        prevButton: {
          style: `
      position: absolute;
      top: 50%;
      left: -80px; /* negative offset to move outside left */
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      z-index: 20;
      cursor: pointer;
      background-color: white;
      border-radius: 0;
      border: 1px solid #ffb717;

    `,
          onmouseenter: (event) => {
            event.target.style.backgroundColor = '#ffb717';
            const img = event.target.querySelector('img');
            if (img) {
              img.style.filter =
                'invert(100%) brightness(1000%) contrast(100%)';
            }
          },
          onmouseleave: (event) => {
            event.target.style.backgroundColor = 'white';
            const img = event.target.querySelector('img');
            if (img) {
              img.style.filter = 'invert(0%)';
            }
          },
        },
      }"
    >
      <template #header>
        <button
          class="galleria-close-btn"
          @click="closeGallery"
          aria-label="Close gallery"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 384 512"
            fill="white"
          >
            <path
              d="M231 256l107-107c12-12 12-33 0-45s-33-12-45 0L186 211 79 104c-12-12-33-12-45 0s-12 33 0 45l107 107L34 363c-12 12-12 33 0 45s33 12 45 0l107-107 107 107c12 12 33 12 45 0s12-33 0-45L231 256z"
            />
          </svg>
        </button>
      </template>

      <!-- Main image -->
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          style="width: 840px; height: 630px; object-fit: cover"
        />
      </template>

      <!-- Thumbnail preview -->
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          style="display: block; width: 100%"
        />
      </template>

      <template #nextitemicon>
        <div
          @mouseenter="isNextHovered = true"
          @mouseleave="isNextHovered = false"
          :style="{
            backgroundColor: isNextHovered ? '#ffb717' : 'white',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }"
        >
          <img
            src="/fi-rr-arrow-right.svg"
            :style="{
              filter: isNextHovered ? 'brightness(0) invert(1)' : 'none',
              width: '20px',
              height: '20px',
            }"
          />
        </div>
      </template>
      <template #previousitemicon>
        <div
          @mouseenter="isPrevHovered = true"
          @mouseleave="isPrevHovered = false"
          :style="{
            backgroundColor: isPrevHovered ? '#ffb717' : 'white',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }"
        >
          <img
            src="/fi-rr-arrow-left.svg"
            :style="{
              filter: isPrevHovered ? 'brightness(0) invert(1)' : 'none',
              width: '20px',
              height: '20px',
            }"
          />
        </div>
      </template>
    </Gallery>
    <div class="pagination_wrapper">
      <div
        class="pageNumber"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
        v-for="page in pageNumbers"
        :key="page"
      >
        <p>{{ page }}</p>
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
.swiper-slide {
  cursor: pointer;
}
.wrapper {
  margin-top: 150px;
  margin-left: 70px;

  .item {
    display: flex;
    margin-bottom: 40px;
    font-family: "Helvetica";

    .item_subwrapper {
      margin-right: 20px;
      width: 310px;

      h1 {
        font-size: 24px;
      }
      .description {
        font-size: 14px;
        margin-bottom: 20px;
        width: 310px;
        word-wrap: break-word;
        color: #5b5b5b;
        font-family: "helvetica-light";
      }
    }
    .item-img {
      position: relative;
    }
    .img-hover {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.404);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(100%);
    }
    .swiper-slide:hover .img-hover {
      transform: translateY(-102%);
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
.pagination_wrapper {
  display: flex;
  justify-content: center;

  .pageNumber {
    margin-right: 10px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: 1px solid #ffb717;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: "Helvetica-light";
  }
  .pageNumber:hover {
    background-color: #ffb717;
    transition: 0.3s ease-out;
  }
  .active {
    background-color: #ffb717;
  }
}
.galleria-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 50;
  background-color: #ffb717;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.galleria-close-btn:hover {
  background-color: #ffa500;
  transform: scale(1.1);
}

.galleria-close-btn svg {
  width: 16px;
  height: 16px;
  pointer-events: none;
}
</style>
