<script setup>
import HeaderComponent from "./HeaderComponent.vue";
import HeroComponent from "./HeroComponent.vue";
import Accordion from "./Accordion.vue";
import Footer from "./Footer.vue";
const AccordionList = [
  {
    id: 0,
    title: "შიდა/გარე ძალოვანი და განათების ქსელები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 1,
    title: "საშუალო და დაბალი ძაბვის გამანაწილებელი კვანძები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },

  {
    id: 2,
    title: "სამეთვალყურეო და სპეციალიზირებული მონიტორინგის სისტემები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 3,
    title: "ოპტიკურ-ბოჭკოვანი ქსელები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 4,
    title: "გათბობა-კონდიცირებისა და ვენტილაციის პროექტირება და განხირციელება",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 5,
    title: "ხანძარქრობის სისტემების პროექტირება და განხირციელება",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 6,
    title:
      "წყლის მოწოდების და გამწმენდი/სატუმბი მინი-სადგურების პროექტირება, მონტაჟი და გაშევბა",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
];
</script>
<template>
  <HeaderComponent />
  <HeroComponent />
  <section class="section1">
    <div class="company-description-wrapper">
      <h1>კომპანიის შესახებ</h1>
      <p>
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა.
      </p>
      <p>
        შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს,
        ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და
        გარემოსდაცვით ამოცანებს.
      </p>
      <div class="page-transfer-no-background">ვრცლად</div>
    </div>
    <img src="/Section1-first-image.jpg" alt="" />
    <img src="/Section1-second-image.jpg" alt="" />
  </section>
  <section class="section2">
    <div class="wrapper">
      <div class="subwrapper">
        <p class="number">20</p>
        <div class="text-background">
          <p>წლიანი გამოცდილება</p>
        </div>
      </div>
      <div class="subwrapper">
        <p class="number">15+</p>
        <div class="text-background">
          <p>კმაყოფილი კლიენტი</p>
        </div>
      </div>
      <div class="subwrapper">
        <p class="number">200</p>
        <div class="text-background">
          <p>შესრულებული პროექტი</p>
        </div>
      </div>
      <div class="subwrapper">
        <p class="number">100</p>
        <div class="text-background">
          <p>საერთაშორისო პარტნიორი</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section3">
    <div class="text-wrapper">
      <h1>ჩვენი პროექტები</h1>
      <p>
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო
        სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური
        საინჟინრო და გარემოსდაცვით ამოცანებს.
      </p>
      <div class="page-transfer-no-background">ყველა პროექტი</div>
    </div>
    <div class="img-subwrapper">
      <img src="/Batumis-sinagoga.jpg" alt="" />
      <div class="text-background">ბათუმის სინაგოგა</div>
    </div>
    <div class="img-subwrapper">
      <img src="/Gamshvebi-punqtebi.jpg" alt="" />
      <div class="text-background">გამშვები პუნქტები</div>
    </div>
    <div class="img-subwrapper">
      <img src="/Tetraqtis-samushaoebi.jpg" alt="" />
      <div class="text-background">ტეტრაქტის სამუშაოები</div>
    </div>
  </section>
  <section class="section4">
    <div class="img-wrapper">
      <h1>სერვისები</h1>
      <img src="/Servisebi.jpg" alt="" />
    </div>
    <div class="accordion-wrapper">
      <Accordion
        v-for="accordion in AccordionList"
        :key="accordion.id"
        :header="accordion.title"
        :content="accordion.description"
      />
    </div>
  </section>
  <section class="logo-section">
    <div class="img-wrapper">
      <img src="/Logo1.jpg" alt="" />
      <img src="/Logo2.jpg" alt="" />
      <img src="/Logo3.jpg" alt="" />
      <img src="/Logo4.jpg" alt="" />
    </div>
  </section>
  <Footer />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  font-family: "Helvetica Neue LT GEO";
}
.section1 {
  margin-top: 350px;
  margin-left: 70px;
  margin-bottom: 50px;
  display: flex;

  .company-description-wrapper h1{
    margin-top: 50px;
  }

  .company-description-wrapper p {
    font-size: 14px;
    margin-top: 20px;
  }
  .page-transfer-no-background {
    background-color: white;
    border: 1px solid #ffb717;
    cursor: pointer;
    position: absolute;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
  }
  img {
    margin: 20px 20px;
  }
  .company-description-wrapper h1 {
    font-size: 24px;
  }
}
.section2 {
  background-color: #ffb717;
  width: 100%;
  height: 150px;
  position: absolute;
  left: 0;
  right: 0;

  .wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .subwrapper {
      margin: 0 100px;
      bottom: 10px;
      .number {
        font-size: 64px;
        font-weight: bold;
        position: relative;
        // bottom: 37px;
        // right: 15px;
      }
      .text-background {
        position: absolute;
        background-color: #ffb717;
        // bottom: 10px;
        top: 98px;
        margin-left: 10px;
        padding: 1px;

        p {
          font-weight: 400;
          color: #242424;
        }
      }
    }
  }
}
.section3 {
  margin-top: 250px;
  margin-left: 70px;
  display: flex;

  .text-wrapper p {
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
  }

  .img-subwrapper {
    position: relative;
    cursor: pointer;
    margin: 0 20px;

    .text-background {
      background-color: #ffb717;
      position: absolute;
      bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 20px;
      color: #242424;
      padding: 5px;
      font-weight: 700;
      font-size: 17px;
    }
  }
  .page-transfer-no-background {
    background-color: white;
    border: 1px solid #ffb717;
    cursor: pointer;
    position: absolute;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
  }
}
.section4 {
  display: flex;
  align-items: flex-start;
  background-color: #f3f3f3;
  left: 0;
  right: 0;
  margin: 50px 0;
  position: relative;
  left: 0;
  right: 0;
  padding-bottom: 50px;
  .accordion-wrapper {
    margin-top: 50px;
    width: 70%;
  }
  .img-wrapper {
    margin-left: 70px;
    position: sticky;
    h1 {
      font-size: 26px;
      color: #242424;
      margin-top: 50px;
    }
    img {
      margin-top: 20px;
    }
  }
}
.logo-section {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .img-wrapper {
    img {
      margin: 0 90px;
    }
  }
}
</style>
