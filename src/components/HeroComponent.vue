<script setup></script>

<template>
  <div class="hero-content">
    <h1>ჩვენი სერვისები</h1>
    <div class="wrapper">
      <div class="page-transfer">
        <p>კონტაქტი</p>
      </div>
      <div class="page-transfer no-background">
        <p>ჩვენი პროექტები</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  z-index: 0;
  font-family: "Helvetica Neue LT GEO";
  margin: 100px 0;
  background: url("/background-hero.jpg") no-repeat center center/cover;
  width: 100%;
  height: 60%;

  .hero-content {
    font-size: 25px;
    color: #242424;
    width: 90px;
    font-weight: 700;
    margin-left: 70px;
    margin-top: 177px;

    .wrapper {
      margin-top: 87px;
      display: flex;
      align-items: center;
      margin-left: -10px;

      p{
        font-weight: 700;
        white-space: nowrap;
        font-size: 18px;
        color: #242424;
      }
      div {
        margin: 0 10px;
        cursor: pointer;
      }

      .page-transfer {
        background-color: #ffb717;
        padding: 10px 18px;
      }
      .no-background{
        background-color: white;
        border: 1px solid #ffb717;
      }
    }
  }
}
</style>
