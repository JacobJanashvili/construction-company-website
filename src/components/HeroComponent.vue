<script setup>
const props = defineProps(["screenWidth"]);
console.log(props.screenWidth);
</script>
<template>
  <div class="wrapper">
    <div class="hero-content" v-if="screenWidth > 900">
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
  <div v-if="props.screenWidth < 900" class="hero-content-mobile">
    <h1>ჩვენი სერვისები</h1>
    <p class="hero-description-mobile">
      2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი
      რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
      გახდა.
    </p>
    <div class="subwrapper-mobile">
      <div class="page-transfer">
        <p>კონტაქტი</p>
      </div>
      <div class="page-transfer no-background">
        <p>ჩვენი პროექტები</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 760px;
  background: url("/background-hero.jpg") no-repeat center/cover;
  font-family: "Helvetica";
  overflow: hidden;
  .hero-content {
    position: relative;
    font-size: 25px;
    color: #242424;
    font-weight: 700;
    margin-left: 70px;
    top: 328px;

    .hero-description {
      font-size: 14px;
      font-weight: 400;
      width: 393px;
      margin-top: 16px;
      color: #5b5b5b;
    }

    .subwrapper {
      margin-top: 30px;
      display: flex;
      align-items: center;
      margin-left: -12px;
      div {
        margin: 0 10px;
        cursor: pointer;
      }

      .page-transfer {
        background-color: #ffb717;
        padding: 10px 18px;
        font-size: 18px;
      }
      .no-background {
        background-color: white;
        border: 1px solid #ffb717;
      }
    }
  }
}
.hero-content-mobile {
  color: #242424;
  font-weight: 700;
  font-family: "Helvetica";
  padding: 20px;
  p {
    font-size: 14px;
    font-weight: 400;

    color: #5b5b5b;
  }
  h1 {
    font-size: 20px;
  }
  .subwrapper-mobile {
    margin-top: 15px;
    display: flex;
    align-items: center;
    margin-left: -12px;

    .page-transfer {
      background-color: #ffb717;
      margin: 0 10px;
      cursor: pointer;
      padding: 15px 26px 15px 26px;
    }
    .no-background {
      background-color: white;
      border: 1px solid #ffb717;
    }
    p {
      font-weight: 700;
      white-space: nowrap;
      font-size: 16px;
      color: #242424;
    }
  }
}
@media (min-width: 200px) and (max-width: 900px) {
  .wrapper {
    position: relative;
  }
}
</style>
