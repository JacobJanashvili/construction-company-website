<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div
    class="footer-wrapper"
    :style="{marginTop: $route.path != '/'? '110px' : ''}"
  >
    <div class="footer-subwrapper">
      <p class="footer-title">
        შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი” (ს/კ 000000000)
      </p>
      <div class="footer-content">
        <p><span class="title-highlight">ელ-ფოსტა: </span>info@mail.com</p>
        <p><span class="title-highlight">ტელეფონი: </span>+999 999 999 9999</p>
        <p><span class="title-highlight">მისამართი: </span>ქუჩა # 1</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-wrapper {
  margin-top: 50px;
  width: 100%;
  min-height: 19vh;
  background-color: #141515;
  .footer-full-height {
    margin-top: 450px;
  }
  .footer-subwrapper {
    display: flex;
    color: #cacaca;
    padding-left: 70px;
    align-items: center;
    padding-top: 70px;
    justify-content: space-between;
    align-items: center;

    .title-highlight {
      color: white;
      font-weight: 700;
      font-size: 24px;
    }
    .footer-content {
      display: flex;

      p {
        margin: 0 51px;
      }
    }
  }
}
</style>
