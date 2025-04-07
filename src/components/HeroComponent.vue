<script setup></script>

<template>
  <div class="wrapper">
    <div class="hero-content">
      <h1>ჩვენი სერვისები</h1>
      <p class="hero-description">
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა.
      </p>
      <div class="subwrapper">
        <div class="page-transfer">
          <p>კონტაქტი</p>
        </div>
        <div class="page-transfer no-background">
          <p>ჩვენი პროექტები</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  z-index: 0;
  width: 100%;
  height: 760px;
  background: url("/background-hero.jpg") no-repeat center center/cover;

  .hero-content {
    position: relative;
    font-size: 25px;
    color: #242424;
    font-weight: 700;
    margin-left: 70px;
    top: 328px;

    .hero-description{
      font-size: 14px;
      font-weight: 400;
      width: 393px;
      margin-top: 16px;

    }
    .subwrapper {
      margin-top: 30px;
      display: flex;
      align-items: center;
      margin-left: -10px;

      p {
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
      .no-background {
        background-color: white;
        border: 1px solid #ffb717;
      }
    }
  }
}
</style>
