<script setup></script>
<template>
  <menu>
    <img class="header-logo" src="/logo.jpg" alt="" />
    <ul>
      <li>მთავარი</li>
      <li>ჩვენს შესახებ</li>
      <li>პროექტები</li>
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
  .header-logo {
    height: 48px;
    position: relative;
    right: 150px;
    cursor: pointer;
  }
  ul {
    font-family: "Helvetica Neue LT GEO";
    list-style: none;
    display: flex;
    position: relative;
    li {
      margin: 0 30px;
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
  }
}
</style>
