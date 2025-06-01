<script setup>
import { defineAsyncComponent, ref, onMounted, onUnmounted } from "vue";
const HeaderComponent = defineAsyncComponent(() =>
  import("./HeaderComponent.vue")
);
import Swiper from "swiper";
import "swiper/css";

let windowWdth = ref(0);
let projectSwiper = null;
let logoSwiper = null;

const setWindowWidth = (data) => (windowWdth.value = data);

onMounted(() => {
  if (windowWdth.value < 900) {
    projectSwiper = new Swiper(".projects-swiper", {
      allowTouchMove: true,
      slidesPerView: 1.5,
      loop: true,
      spaceBetween: 70,
    });

    logoSwiper = new Swiper(".logo-swiper", {
      allowTouchMove: true,
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 40,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      watchOverflow: true,
    });
  }

  var docWidth = document.documentElement.offsetWidth;
  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
});
onUnmounted(() => {
  if (projectSwiper) {
    projectSwiper.destroy();
  }
  if (logoSwiper) {
    logoSwiper.destroy();
  }
});

const Footer = defineAsyncComponent(() => import("./Footer.vue"));
const HeroComponent = defineAsyncComponent(() => import("./HeroComponent.vue"));
const Accordion = defineAsyncComponent(() => import("./Accordion.vue"));
const AccordionList = [
  {
    id: 0,
    title: "შიდა/გარე ძალოვანი და განათების ქსელები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 1,
    title: "საშუალო და დაბალი ძაბვის გამანაწილებელი კვანძები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 2,
    title: "სამეთვალყურეო და სპეციალიზირებული მონიტორინგის სისტემები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 3,
    title: "ოპტიკურ-ბოჭკოვანი ქსელები",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 4,
    title: "გათბობა-კონდიცირებისა და ვენტილაციის პროექტირება და განხირციელება",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 5,
    title: "ხანძარქრობის სისტემების პროექტირება და განხირციელება",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
  {
    id: 6,
    title:
      "წყლის მოწოდების და გამწმენდი/სატუმბი მინი-სადგურების პროექტირება, მონტაჟი და გაშევბა",
    description:
      "2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი-ს ორიენტირი რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და გარემოსდაცვით ამოცანებს.",
  },
];
</script>
<template>
  <HeaderComponent @send-screen-data="setWindowWidth" />
  <HeroComponent :screen-width="windowWdth" />
  <section class="section1">
    <div class="company-description-wrapper">
      <h1>კომპანიის შესახებ</h1>
      <p>
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი"-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა.
      </p>
      <p>
        შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო სამუშაოებს,
        ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური საინჟინრო და
        გარემოსდაცვით ამოცანებს.
      </p>
      <div class="page-transfer-no-background" @click="$router.push('/about')">
        ვრცლად
      </div>
    </div>
    <div class="image-wrapper">
      <img src="/Section1-first-image.jpg" alt="" />
      <img src="/Section1-second-image.jpg" alt="" />
    </div>
  </section>
  <section class="section2" v-if="windowWdth.valueOf() > 900">
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
  <section class="section2" v-else>
    <div class="section2-mobile-wrapper">
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
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი"-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო
        სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემური
        საინჟინრო და გარემოსდაცვით ამოცანებს.
      </p>
      <div class="page-transfer-no-background">ყველა პროექტი</div>
    </div>
    <div class="img-wrapper" v-if="windowWdth.valueOf() > 900">
      <div class="img-subwrapper" @click="$router.push('/projects')">
        <img src="/Batumis-sinagoga.jpg" alt="ბათუმის სინაგოგა" />
        <div class="text-background">ბათუმის სინაგოგა</div>
      </div>
      <div class="img-subwrapper" @click="$router.push('/projects')">
        <img src="/Gamshvebi-punqtebi.jpg" alt="გამშვები პუნქტები" />
        <div class="text-background">გამშვები პუნქტები</div>
      </div>
      <div class="img-subwrapper" @click="$router.push('/projects')">
        <img src="/Tetraqtis-samushaoebi.jpg" alt="ტეტრაქტის სამუშაოები" />
        <div class="text-background">ტეტრაქტის სამუშაოები</div>
      </div>
    </div>
    <div
      class="img-wrapper-mobile img-wrapper"
      v-if="windowWdth.valueOf() < 900"
    >
      <div class="projects-swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img-subwrapper" @click="$router.push('/projects')">
              <img src="/Batumis-sinagoga.jpg" alt="ბათუმის სინაგოგა" />
              <div class="text-background">ბათუმის სინაგოგა</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-subwrapper" @click="$router.push('/projects')">
              <img src="/Gamshvebi-punqtebi.jpg" alt="გამშვები პუნქტები" />
              <div class="text-background">გამშვები პუნქტები</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-subwrapper" @click="$router.push('/projects')">
              <img
                src="/Tetraqtis-samushaoebi.jpg"
                alt="ტეტრაქტის სამუშაოები"
              />
              <div class="text-background">ტეტრაქტის სამუშაოები</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-wrapper-mobile"></div>
  </section>
  <section class="logo-section">
    <h1>ჩვენ გვენდობიან</h1>
    <div class="img-wrapper" v-if="windowWdth.valueOf() > 900">
      <img src="/company-partner-logo-1.svg" alt="Partner logo 1" />
      <img src="/company-partner-logo-2.svg" alt="Partner logo 2" />
      <img src="/company-partner-logo-3.svg" alt="Partner logo 3" />
      <img src="/company-partner-logo-4.svg" alt="Partner logo 4" />
      <img src="/company-partner-logo-5.svg" alt="Partner logo 5" />
      <img src="/company-partner-logo-6.svg" alt="Partner logo 6" />
    </div>
    <div class="img-wrapper" v-else>
      <div class="logo-swiper-container">
        <div class="logo-swiper swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/company-partner-logo-1.svg" alt="Partner logo 1" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-2.svg" alt="Partner logo 2" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-3.svg" alt="Partner logo 3" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-4.svg" alt="Partner logo 4" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-5.svg" alt="Partner logo 5" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-6.svg" alt="Partner logo 6" />
            </div>
            <div class="swiper-slide">
              <img src="/company-partner-logo-7.svg" alt="Partner logo 7" />
            </div>
          </div>
        </div>
      </div>
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
  z-index: 0;
}
.section1 {
  margin-top: 50px;
  margin-left: 70px;
  margin-bottom: 50px;
  display: flex;
  font-family: "Helvetica";
  position: relative;
  overflow: hidden;

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
    width: 111px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
  }
  .image-wrapper {
    margin-top: 20px;
    display: flex;
    img {
      margin: 0 20px;
    }
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
  overflow: hidden;
  .section2-mobile-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #111;
    width: max-content; /* Size only fits content, no overflow */

    .subwrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      text-align: center;
      border: 1px solid white;
      .number {
        font-size: 64px;
        font-weight: bold;
        position: relative;
      }
      .text-background {
        background-color: #ffb717;
        margin-left: 8px;
        p {
          font-weight: 400;
          color: #242424;
        }
      }
    }
  }
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
  overflow-x: hidden;
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

  .img-wrapper {
    display: flex;
  }
  .img-subwrapper {
    position: relative;
    cursor: pointer;
    margin: 0 10px;
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
  overflow: hidden;

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
  flex-wrap: nowrap;
  font-family: "Helvetica";
  overflow: hidden;

  h1 {
    color: #242424;
  }
  .img-wrapper {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    img {
      opacity: 0.6;
    }
  }
}
@media (min-width: 200px) and (max-width: 900px) {
  .section1 {
    flex-direction: column-reverse;
    margin: 30px 0;
    background-color: #f3f3f3;
    padding-bottom: 30px;
    padding-top: 20px;
    .image-wrapper {
      display: flex;
      overflow: hidden;
      img {
        width: calc(
          50% - 50px
        ); // or calc(50% - 2px) if you use gap instead of margin
      }
    }
    .company-description-wrapper {
      margin-left: 20px;
      width: 374px;
      position: relative;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
      .page-transfer-no-background {
        width: 90%;
        display: flex;
        justify-content: center;
        margin-left: 12px;
      }
    }
  }
  .section3 {
    flex-direction: column-reverse;
    margin-top: 320px;
    margin-left: 0;
    margin-right: 0;
    .img-subwrapper {
      margin: 0;
    }
    .text-wrapper {
      padding: 20px;
    }
    .page-transfer-no-background {
      width: 90%;
      display: flex;
      justify-content: center;
    }
  }
  .logo-section {
    margin: 100px 0;
    padding: 0 20px; // Add padding to container
    width: 100%;
    overflow: hidden;
    .img-wrapper {
      width: 100%;

      // Add container to better control swiper dimensions
      .logo-swiper-container {
        width: 100%;
        overflow: hidden; // Prevent horizontal overflow
      }

      .swiper.logo-swiper {
        width: 100%;
        overflow: hidden;
        .swiper-wrapper {
          // Explicitly prevent looping behavior via CSS
          flex-wrap: nowrap;

          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto !important; // Allow natural width

            img {
              width: 100%;
              height: auto;
              max-height: 60px;
              object-fit: contain;
            }
          }
        }
      }
    }
  }

  .section4 {
    flex-direction: column;
    .img-wrapper {
      img {
        display: none;
      }
    }
  }
}
</style>
