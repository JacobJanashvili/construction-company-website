<script setup></script>
<template>
  <menu>
    <img class="header-logo" src="/logo.jpg" alt="" />
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
      <li>კონტაქტი</li>
    </ul>
    <div class="language-select"></div>
  </menu>
</template>
<style lang="scss" scoped>
:root {
  overflow: hidden;
}
menu {
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
</style>
