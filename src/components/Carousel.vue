<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, nextTick, defineAsyncComponent, computed, onUnmounted } from 'vue';
import Swiper, { Navigation } from 'swiper';
import Skeleton from 'primevue/skeleton';
import { debounce } from 'lodash'; // Requires: npm install lodash

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Define Galleria component asynchronously
const Gallery = defineAsyncComponent(() => import('primevue/galleria'));

// Define props with validation
const props = defineProps({
  Items: {
    type: Array,
    required: true,
    validator: (items) => items.every(item =>
      item.id && item.title && item.description && Array.isArray(item.images) &&
      item.images.every(img => img.full && img.thumb)
    ),
  },
});

// Reactive state for pagination and loading
const isLoading = ref(false);
const itemsPerPage = ref(7);
const currentPage = ref(1);
const swiperInstances = ref([]);
const totalLength = ref(props.Items.length);
const pageNumbers = ref([]);
const indexOfLastPage = ref(currentPage.value * itemsPerPage.value);
const indexOfFirstPage = ref(indexOfLastPage.value - itemsPerPage.value);
const currentItems = ref(props.Items.slice(indexOfFirstPage.value, indexOfLastPage.value));

// Optimized galleriaData with limited images
const galleriaData = computed(() => {
  return currentItems.value.map((location, idx) => ({
    ...location,
    galleriaItems: location.images.slice(0, 10).map((imgObj, imgIdx) => ({
      itemImageSrc: imgIdx === 0 ? imgObj.full : imgObj.thumb, // Load full image only for first item
      thumbnailImageSrc: imgObj.thumb,
      alt: `${location.title} სლაიდი ${imgIdx + 1}`,
      title: location.title,
    })),
  }));
});

// Galleria state
const isGalleryVisible = ref(false);
const selectedImages = ref([]);
const activeImageIndex = ref(0);

// Debounced gallery opening to prevent rapid toggling
const openGallery = debounce(async (groupIndex, imageIndex) => {
  try {
    if (!swiperInstances.value[groupIndex]?.initialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
      return openGallery(groupIndex, imageIndex); // Retry if Swiper not ready
    }

    // Load full images only for the selected index
    const location = props.Items[indexOfFirstPage.value + groupIndex];
    selectedImages.value = location.images.slice(0, 10).map((imgObj, idx) => ({
      itemImageSrc: idx === imageIndex ? imgObj.full : imgObj.thumb,
      thumbnailImageSrc: imgObj.thumb,
      alt: `${location.title} სლაიდი ${idx + 1}`,
      title: location.title,
    }));
    activeImageIndex.value = imageIndex;
    isGalleryVisible.value = true;

    // Preload next/previous images after a delay
    setTimeout(() => {
      if (selectedImages.value[imageIndex + 1]) {
        selectedImages.value[imageIndex + 1].itemImageSrc = location.images[imageIndex + 1]?.full;
      }
      if (selectedImages.value[imageIndex - 1]) {
        selectedImages.value[imageIndex - 1].itemImageSrc = location.images[imageIndex - 1]?.full;
      }
    }, 500);
  } catch (error) {
    console.error('Error opening gallery:', error);
    isGalleryVisible.value = false;
  }
}, 300);

// Close gallery and clean up
const closeGallery = () => {
  isGalleryVisible.value = false;
  selectedImages.value = [];
  activeImageIndex.value = 0;
  if (window.gc) window.gc(); // Encourage garbage collection
};

// Simplified button styling
const applyGalleryButtonStyles = async () => {
  await nextTick();
  const galleryButtons = document.querySelectorAll('.p-galleria-item-nav, .custom-nav-button');
  galleryButtons.forEach(button => {
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    newButton.style.setProperty('background-color', 'white', 'important');
    newButton.style.setProperty('border', 'none', 'important');
    newButton.style.setProperty('outline', 'none', 'important');
    newButton.style.setProperty('box-shadow', 'none', 'important');

    const img = newButton.querySelector('img');
    if (img) {
      img.style.setProperty('filter', 'none', 'important');
      img.style.setProperty('background-color', 'transparent', 'important');
    }

    newButton.addEventListener('mouseenter', () => {
      newButton.style.setProperty('background-color', '#ffb717', 'important');
      if (img) {
        img.style.setProperty('filter', 'invert(100%) sepia(100%) saturate(2%) hue-rotate(282deg) brightness(107%) contrast(101%)', 'important');
      }
    });
    newButton.addEventListener('mouseleave', () => {
      newButton.style.setProperty('background-color', 'white', 'important');
      if (img) img.style.setProperty('filter', 'none', 'important');
    });
    newButton.addEventListener('click', () => {
      newButton.style.setProperty('background-color', 'white', 'important');
      if (img) img.style.setProperty('filter', 'none', 'important');
    });
  });
};

// Apply button styles when gallery is visible
watch(isGalleryVisible, async (newVal) => {
  if (newVal) {
    await nextTick();
    applyGalleryButtonStyles();
  }
});

// Initialize Swiper instances
const initializeSwiper = async () => {
  await nextTick();
  swiperInstances.value.forEach(swiper => swiper?.destroy(true, true));
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

// Set up pagination
onMounted(() => {
  for (let i = 1; i <= Math.ceil(totalLength.value / itemsPerPage.value); i++) {
    pageNumbers.value.push(i);
  }
  initializeSwiper();
});

// Clean up Swiper instances
onUnmounted(() => {
  swiperInstances.value.forEach(swiper => swiper?.destroy(true, true));
  swiperInstances.value = [];
});

// Handle page navigation
const goToPage = async (page) => {
  try {
    isLoading.value = true;
    currentPage.value = page;
    indexOfLastPage.value = currentPage.value * itemsPerPage.value;
    indexOfFirstPage.value = indexOfLastPage.value - itemsPerPage.value;
    currentItems.value = props.Items.slice(indexOfFirstPage.value, indexOfLastPage.value);

    await nextTick();
    const images = document.querySelectorAll('.swiper-slide img');
    const loadImages = Array.from(images).map(img =>
      img.complete ? Promise.resolve() : new Promise(resolve => {
        img.onload = img.onerror = resolve;
      })
    );
    await Promise.all(loadImages);
    await initializeSwiper();
  } catch (error) {
    console.error('Error navigating to page:', error);
  } finally {
    isLoading.value = false;
  }
};

// Watch for changes in currentItems
watch(currentItems, async () => {
  try {
    await nextTick();
    const images = document.querySelectorAll('.swiper-slide img');
    const loadImages = Array.from(images).map(img =>
      img.complete ? Promise.resolve() : new Promise(resolve => {
        img.onload = img.onerror = resolve;
      })
    );
    await Promise.all(loadImages);
    await initializeSwiper();
  } catch (error) {
    console.error('Error updating Swiper:', error);
  } finally {
    isLoading.value = false;
  }
});

// Watch activeImageIndex to preload adjacent images
watch(activeImageIndex, (newIndex) => {
  if (isGalleryVisible.value && selectedImages.value[newIndex]) {
    const location = props.Items[indexOfFirstPage.value + Math.floor(newIndex / 10)];
    if (location) {
      selectedImages.value[newIndex].itemImageSrc = location.images[newIndex % 10]?.full;
      // Preload adjacent images
      if (selectedImages.value[newIndex + 1]) {
        selectedImages.value[newIndex + 1].itemImageSrc = location.images[(newIndex + 1) % 10]?.full;
      }
      if (selectedImages.value[newIndex - 1]) {
        selectedImages.value[newIndex - 1].itemImageSrc = location.images[(newIndex - 1) % 10]?.full;
      }
    }
  }
});
</script>

<template>
  <div class="wrapper">
    <!-- Skeleton loading state -->
    <template v-if="isLoading">
      <div v-for="n in 3" :key="n" class="skeleton-container">
        <Skeleton height="24px" width="300px" class="mb-2" />
        <Skeleton height="20px" width="250px" class="mb-2" />
        <div class="skeleton-swiper" style="display: flex; gap: 10px">
          <Skeleton height="366px" width="100%" v-for="i in 3" :key="i" class="mr-2" />
        </div>
      </div>
    </template>
    <!-- Main content -->
    <template v-else>
      <div class="item" v-for="(carousel, index) in currentItems" :key="carousel.id">
        <div class="item_subwrapper">
          <h1 class="title">{{ carousel.title }}</h1>
          <p class="description">{{ carousel.description }}</p>
          <div class="button-div">
            <a class="prevButton arrowWrapper" :class="'prevButton-' + index" @click="swiperInstances[index]?.slidePrev()">
              <img class="arrow-left" src="/fi-rr-arrow-left.svg" alt="Previous" />
            </a>
            <a class="nextButton arrowWrapper" :class="'nextButton-' + index" @click="swiperInstances[index]?.slideNext()">
              <img class="arrow-right" src="/fi-rr-arrow-right.svg" alt="Next" />
            </a>
        </div>
        </div>
        <div class="swiper" :class="'swiper-' + index">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="openGallery(index, i)" v-for="(image, i) in carousel.images" :key="image.full">
              <img class="item-img" :src="image.thumb" :alt="carousel.title" />
              <div class="img-hover">
                <svg class="img-hover-icon" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.3 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Galleria component -->
    <Gallery
      v-model:visible="isGalleryVisible"
      :value="selectedImages"
      v-model:activeIndex="activeImageIndex"
      :full-screen="true"
      :circular="true"
      :showItemNavigators="true"
      :num-visible="1"
      :show-thumbnail-navigators="false"
      @hide="closeGallery"
      :pt="{
        root: { style: 'position: relative; overflow: visible; border: none;', class: 'custom-gallery' },
        nextButton: {
          style: `
            position: absolute !important;
            top: 50% !important;
            right: -80px !important;
            transform: translateY(-50%) !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 20 !important;
            cursor: pointer !important;
            background-color: white !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          `,
          class: 'custom-nav-button custom-next-button'
        },
        prevButton: {
          style: `
            position: absolute !important;
            top: 50% !important;
            left: -80px !important;
            transform: translateY(-50%) !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 20 !important;
            cursor: pointer !important;
            background-color: white !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          `,
          class: 'custom-nav-button custom-prev-button'
        },
      }"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" style="width: 840px; height: 630px; object-fit: cover" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" style="display: block; width: 100%" />
      </template>
      <template #previousitemicon>
        <img class="custom-arrow-left" src="/fi-rr-arrow-left.svg" alt="Previous" style="pointer-events: none;" />
      </template>
      <template #nextitemicon>
        <img class="custom-arrow-right" src="/fi-rr-arrow-right.svg" alt="Next" style="pointer-events: none;" />
      </template>
    </Gallery>

    <!-- Pagination -->
    <div class="pagination_wrapper">
      <div class="pageNumber" :class="{ active: currentPage === page }" @click="goToPage(page)" v-for="page in pageNumbers" :key="page">
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
}
.item {
  display: flex;
  margin-bottom: 40px;
  font-family: 'Helvetica';
}
.item_subwrapper {
  margin-right: 20px;
  width: 310px;
}
.title {
  font-size: 24px;
}
.description {
  font-size: 14px;
  margin-bottom: 20px;
  width: 310px;
  word-wrap: break-word;
  color: #5b5b5b;
  font-family: 'helvetica-light';
}
.item-img {
  position: relative;
  height: 366px;
  width: 100%;
  object-fit: cover;
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
.button-div {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.arrowWrapper {
  margin: 0 10px;
  display: block;
  transition: background-color 0.3s ease;
}
.arrowWrapper:hover {
  background-color: #ffb717;
}
.arrowWrapper:hover #arrow {
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(282deg) brightness(107%) contrast(101%);
}
#arrow {
  height: auto;
  padding: 13px;
  border: 1px solid #ffb717;
  cursor: pointer;
  display: block;
  transition: filter 0.3s ease;
}
.pagination_wrapper {
  display: flex;
  justify-content: center;
}
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
  font-family: 'Helvetica-light';
}
.pageNumber:hover {
  background-color: #ffb717;
  transition: 0.3s ease-out;
}
.active {
  background-color: #ffb717;
}

/* Simplified Galleria button styles */
:deep(.custom-gallery) {
  .p-galleria-item-nav,
  .custom-nav-button {
    background-color: white !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    transition: background-color 0.3s ease !important;
  }
  .p-galleria-item-nav:hover,
  .custom-nav-button:hover {
    background-color: #ffb717 !important;
  }
  .p-galleria-item-nav:hover img,
  .custom-nav-button:hover img {
    filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(282deg) brightness(107%) contrast(101%) !important;
  }
  .p-galleria-item-nav img,
  .custom-nav-button img {
    pointer-events: none;
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
  }
}
</style>
