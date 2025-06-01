<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
let burgerMenuClicked = ref(false);
const emits = defineEmits(["sendScreenData"]);
const windowWidth = ref(document.documentElement.clientWidth);
function updateWidth() {
  windowWidth.value = document.documentElement.clientWidth;
  emits("sendScreenData", windowWidth.value);
}
onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<template>
  <nav v-if="windowWidth >= 900">
    <img class="header-logo" :style="{'right': windowWidth > 900 && windowWidth <= 1400 ? 0 : '150px'}" src="/logo.jpg" alt="" />
    <ul>
      <li :class="{ active: $route.path == '/' }" @click="$router.push('/')">
        მთავარი
      </li>
      <li
        :class="{ active: $route.path == '/about' }"
        @click="$router.push('/about')"
      >
        ჩვენს შესახებ
      </li>
      <li
        :class="{ active: $route.path == '/projects' }"
        @click="$router.push('/projects')"
      >
        პროექტები
      </li>
      <li
        :class="{ active: $route.path == '/contacts' }"
        @click="$router.push('/contacts')"
      >
        კონტაქტი
      </li>
    </ul>
    <div class="language-select"></div>
  </nav>
  <nav v-else>
    <header class="mobile-menu-header">
      <div
        class="hamburger-menu"
        @click="burgerMenuClicked = !burgerMenuClicked"
      >
        <div
          class="top"
          :style="{
            rotate: burgerMenuClicked ? '45deg' : '',
            width: burgerMenuClicked ? '16.97056274844px' : '20px',
          }"
        ></div>
        <div
          class="middle"
          :style="{
            opacity: burgerMenuClicked ? 0 : 1,
            width: burgerMenuClicked ? 0 : '20px',
          }"
        ></div>
        <div
          class="bottom"
          :style="{
            rotate: burgerMenuClicked ? '-45deg' : '',
            width: burgerMenuClicked ? '16.97056274844px' : '20px',
            translate: burgerMenuClicked ? '0 1px' : '',
          }"
        ></div>
      </div>
      <img src="/logo.jpg" alt="" />
      <div class="mobile-menu-popup" v-if="burgerMenuClicked">
        <div class="menu-wrapper">
          <h1 @click="$router.push('/')">მთავარი</h1>
          <h1 @click="$router.push('/about')">ჩვენს შესახებ</h1>
          <h1 @click="$router.push('/projects')">პროექტები</h1>
          <h1 @click="$router.push('/contacts')">კონტაქტი</h1>
        </div>
      </div>
    </header>
  </nav>
  <div class="mobile-menu"></div>
</template>
<style lang="scss" scoped>
:root {
  overflow: hidden;
  z-index: 0;
}
nav {
  z-index: 1;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0;
  align-items: center;
  background-color: #fffeff;
  height: 90px;
  font-family: "Helvetica";

  .mobile-menu-header {
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: fixed;
    z-index: 2;
    padding: 10px;

    img {
      margin-left: 32%;
    }
    .mobile-menu-popup {
      background-color: #fdfdfd;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 6;
      margin-top: 70px;
      transition: 200ms ease-in-out;
      .menu-wrapper {
        margin: 92px 20px;
        color: #242424;
        h1 {
          margin: 19px 0;
        }
        h1::after {
          content: "";
          display: block;
          background-color: #dddddd99;
          height: 2px;
          width: 95%;
          margin-top: 19px;
        }
      }
    }
  }
  .hamburger-menu .top,
  .hamburger-menu .middle,
  .hamburger-menu .bottom {
    width: 30px;
    height: 2px;
    margin: 3.5px 0;
    background-color: black;
    transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
      rotate 200ms ease-in-out, translate 200ms ease-in-out;
    transform-origin: left center;
  }

  .hamburger-menu .top {
    transform: translate(50% -100%);
  }

  .hamburger-menu {
    margin-top: 10px;
    margin-left: 20px;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
  }
  .header-logo {
    height: 48px;
    position: relative;
    right: 150px;
    cursor: pointer;
  }
  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0 20px;
      font-weight: 500;
      cursor: pointer;
    }
    li::after {
      content: "";
      background-color: black;
      height: 2px;
      width: 0;
      display: block;
      transition: 0.3s ease-in;
      margin-top: 3px;
      color: #242424;
    }
    li:hover::after {
      content: "";
      width: 100%;
    }
    li:hover {
      text-shadow: 0px 0px 0px #242424;
    }
    li.active {
      text-shadow: 0px 0px 0px #242424;
      pointer-events: none;
    }
    li.active::after {
      content: "";
      background-color: black;
      height: 2px;
      width: 100%;
      display: block;
      margin-top: 3px;
      color: #242424;
    }
  }
}
@media (max-width: 1400px) {
  .header-logo {
    right: 0;
  }
}
</style>
