<script setup>
import { defineAsyncComponent } from "vue";
const HeaderComponent = defineAsyncComponent(() =>
  import("./HeaderComponent.vue")
);
const Footer = defineAsyncComponent(() => import("./Footer.vue"));
const HeroComponent = defineAsyncComponent(() => import("./HeroComponent.vue"));
const Accordion = defineAsyncComponent(() => import("./Accordion.vue"));
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
  <section class="logo-section">
    <h1>ჩვენ გვენდობიან</h1>
    <div class="img-wrapper">
      <img src="/company-partner-logo-1.jpg" alt="" />
      <img src="/company-partner-logo-2.jpg" alt="" />
      <img src="/company-partner-logo-3.jpg" alt="" />
      <img src="/company-partner-logo-4.jpg" alt="" />
      <img src="/company-partner-logo-5.jpg" alt="" />
      <img src="/company-partner-logo-6.jpg" alt="" />
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

  <Footer />
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.section1 {
  margin-top: 50px;
  margin-left: 70px;
  margin-bottom: 50px;
  display: flex;
  font-family: "Helvetica";
  .company-description-wrapper h1 {
    margin-top: 50px;
    color: #242424;
  }

  .company-description-wrapper p {
    font-size: 14px;
    margin-top: 20px;
    color: #5b5b5b;
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
  position: absolute;
  left: 0;
  right: 0;
  color: #242424;
  font-family: "Helvetica";
  display: flex;
  justify-content: center;

  .wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 20px;
    .subwrapper {
      margin: 0 100px;
      .number {
        font-size: 64px;
        font-weight: bold;
        position: relative;
      }
      .text-background {
        position: absolute;
        background-color: #ffb717;
        top: 70%;
        margin-left: 8px;
        width: 300px;

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
  font-family: "Helvetica";

  .text-wrapper p {
    margin-top: 20px;
    font-size: 14px;
    color: #5b5b5b;
  }
  h1 {
    font-size: 24px;
    color: #242424;
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
  font-family: "Helvetica";

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
  margin-left: 70px;
  flex-direction: column;

  h1 {
    color: #242424;
  }
  .img-wrapper {
    display: flex;
    margin-top: 20px;

    img {
      opacity: 0.6;
      margin-right: 90px;
    }
  }
}
</style>
