<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div
    class="footer-wrapper"
    :style="{ marginTop: $route.path != '/' ? '110px' : '' }"
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
  font-family: "Helvetica";
  overflow: hidden;

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
      letter-spacing: 1px;
    }
    .footer-content {
      display: flex;

      p {
        margin: 0 51px;
      }
    }
  }
}
@media (min-width: 200px) and (max-width: 900px) {
  .footer-wrapper {
    .footer-subwrapper {
      flex-direction: column-reverse;
      padding: initial;
      justify-content: initial;
      align-items: initial;
      .footer-title{
        font-size: 14px;
        font-family: "Helvetica-light";
        margin: 22px 20px;

      }
      .footer-content {
        flex-direction: column;
        margin: 0 20px;
        margin-top: 20px;
        .title-highlight {
          font-size: 14px;
          margin-right: 9px;
        }
        p {
          display: flex;
          font-family: "Helvetica-light";
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
