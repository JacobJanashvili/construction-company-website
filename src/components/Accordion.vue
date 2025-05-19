<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";

defineProps({
  header: String,
  content: String,
});
const show = ref(false);
</script>
<template>
  <div class="wrapper" @click="show = !show" :class="{ active: show }">
    <div class="header" :class="{ active: show }">
      <h1>{{ header }}</h1>
      <svg
        id="arrow-up"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="#374957"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5436 8.20998C19.4477 8.11625 19.3336 8.04186 19.208 7.99109C19.0823 7.94032 18.9475 7.91418 18.8113 7.91418C18.6751 7.91418 18.5403 7.94032 18.4147 7.99109C18.289 8.04186 18.1749 8.11625 18.079 8.20998L13.3552 12.79C13.2593 12.8837 13.1453 12.9581 13.0196 13.0089C12.8939 13.0596 12.7591 13.0858 12.6229 13.0858C12.4868 13.0858 12.352 13.0596 12.2263 13.0089C12.1006 12.9581 11.9865 12.8837 11.8906 12.79L7.16685 8.20998C7.07097 8.11625 6.95689 8.04186 6.83121 7.99109C6.70552 7.94032 6.57071 7.91418 6.43456 7.91418C6.2984 7.91418 6.16359 7.94032 6.03791 7.99109C5.91222 8.04186 5.79815 8.11625 5.70227 8.20998C5.51017 8.39734 5.40234 8.6508 5.40234 8.91498C5.40234 9.17917 5.51017 9.43262 5.70227 9.61998L10.4364 14.21C11.0165 14.7718 11.803 15.0873 12.6229 15.0873C13.4429 15.0873 14.2293 14.7718 14.8095 14.21L19.5436 9.61998C19.7357 9.43262 19.8435 9.17917 19.8435 8.91498C19.8435 8.6508 19.7357 8.39734 19.5436 8.20998Z"
          fill=""
        />
      </svg>
    </div>
    <div class="content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper:hover #arrow-up {
  fill: #ffb717;
}
.wrapper {
  margin-left: 20px;
  cursor: pointer;
  border-top: 2px solid #d9d9d9;
  border-bottom: 2px solid #d9d9d9;
  user-select: none;
}
.wrapper + .wrapper {
  border-top: none;
}

.wrapper.active svg {
  transform: rotate(180deg);
  fill: #ffb717;
}
.wrapper.active .content {
  max-height: 300px;
  color: #5b5b5b;
  transition: max-height 0.3s ease-in;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.header.active {
  color: #242424;
}
.content {
  max-height: 0;
  overflow: hidden;
  margin-bottom: 10px;
}
svg {
  transition: transform 0.3s ease-in;
}
@media (min-width: 200px) and (max-width: 900px) {
  .accordion-wrapper {
    width: auto;
    .wrapper {
      width: 374px;
      .header{
        #arrow-up{
          width: 25px;
          height: 24px;
        }
        h1{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
