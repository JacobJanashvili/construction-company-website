<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
  Items: {
    type: Array,
    default: () => []
  }
});

// Use standard Vue ref
const inner = ref(null);
const localChildArr = ref([...(props.Items || [])]);
const innerStyles = ref({});
let transitioning = false;
let stepSize = 0;

onMounted(async () => {
  await nextTick();
  if (inner.value) {
    calculateStepSize();
    resetTranslate();
    // Add window resize listener to recalculate on window resize
    window.addEventListener('resize', calculateStepSize);
  }
});

function calculateStepSize() {
  if (!inner.value || localChildArr.value.length === 0) return;

  const cardWidth = inner.value.querySelector('.card')?.offsetWidth || 0;
  const marginRight = 20; // From your CSS
  stepSize = cardWidth + marginRight;

  // Apply initial offset
  resetTranslate();
}

function moveLeft() {
  innerStyles.value = {
    transform: `translateX(-${stepSize}px)`,
    transition: 'transform 0.2s'
  };
}

function moveRight() {
  innerStyles.value = {
    transform: `translateX(${stepSize}px)`,
    transition: 'transform 0.2s'
  };
}

function afterTransition(callback) {
  if (!inner.value) return;

  const listener = () => {
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };

  inner.value.addEventListener("transitionend", listener);
}

function resetTranslate() {
  innerStyles.value = {
    transition: "none",
    transform: "translateX(0px)"
  };
}

function next() {
  if (transitioning || !inner.value) return;
  transitioning = true;

  moveLeft();
  afterTransition(() => {
    const item = localChildArr.value.shift();
    localChildArr.value.push(item);
    resetTranslate();
    transitioning = false;
  });
}

function prev() {
  if (transitioning || !inner.value) return;
  transitioning = true;

  moveRight();
  afterTransition(() => {
    const item = localChildArr.value.pop();
    localChildArr.value.unshift(item);
    resetTranslate();
    transitioning = false;
  });
}
</script>

<template>
  <div class="wrapper">
    <div class="item" v-for="(item, index) in localChildArr" :key="item.id || index">
      <div class="item_subwrapper">
        <h1 class="title">{{ item.title }}</h1>
        <p class="description">{{ item.description }}</p>
        <div class="button-container">
          <button @click="prev">Previous</button>
          <button @click="next">Next</button>
        </div>
      </div>
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="(image, imgIndex) in item.images" :key="imgIndex">
            <img :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

      .button-container {
        display: flex;
        gap: 10px;

        button {
          padding: 8px 16px;
          cursor: pointer;
        }
      }
    }
  }

  .carousel {
    width: 70%;
    overflow: hidden;

    .inner {
      display: flex;
      transition: transform 0.3s ease;

      .card {
        flex: 0 0 auto;
        margin-right: 20px;

        img {
          height: 366px;
          width: auto;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
