<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineAsyncComponent } from "vue";
const HeaderComponent = defineAsyncComponent(() =>
  import("./HeaderComponent.vue")
);
const Footer = defineAsyncComponent(() => import("./Footer.vue"));
</script>
<template>
  <HeaderComponent />
  <div class="wrapper">
    <img src="/about-us-page-img.jpg" alt="" />
    <div class="subwrapper">
      <h1 class="subwrapper-title">ჩვენს შესახებ</h1>
      <p>
        2005 წლიდან, შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს ორიენტირი
        რთული და მრავალი საინჟინრო დისციპლინის მომცველი პროექტების შესრულება
        გახდა. შესაბამისად, ვასრულებთ კომპლექსურ საინჟინრო-სამშენებლო
        სამუშაოებს, ვახორციელებთ პროექტების მართვას და გადავჭრით რთულ სისტემურ
        საინჟინრო და გარემოსდაცვით ამოცანებს.
      </p>
      <p>
        საქმიანობის ძირითადი სფეროს წარმოადგენს სამშენებლო, ელექტრო-სამონტაჟო
        სამუშაოების წარმოება და მაღალი ტექნოლოგიების სისტემების
        დანერგვა-განვითარება. კომპანია უშუალოდ და სხვა კომპანიებთან პარტნიორობით
        ახორციელებს სხვადასხვა სირთულის კომპლექსურ პროექტებს, დაწყებული
        საპროექტო დოკუმენტაციის შედგენიდან, დამთავრებული ელექტრო-მექანიკური
        სისტემების გამართვა-გაშვებითა და ე.წ. ,,გასაღების პრინციპით” შიდა
        სამუშაოების დასრულებით.
      </p>
      <p>
        შპს ,,სამეცნიერო-საწარმოო კომპანია ელ-ეს-ჯი”-ს მიერ განხორციელებადი
        სამუშაოები ძირითადად მოიცავს შემდეგს:
      </p>
      <p>
        1. ზოგადი და სპეციფიკური ხასიათის ელექტრო-ტექნიკური სამუშაოების
        პროექტირება, მართვა და განხორციელება:
      </p>
      <ul>
        <li>შიდა/გარე ძალოვანი და განათების ქსელები;</li>
        <li>საშუალო და დაბალი ძაბვის გამანაწილებელი კვანძები</li>
        <li>სამეთვალყურეო და სპეციალიზირებული მონიტორინგის სისტემები;</li>
        <li>ოპტიკურ-ბოჭკოვანი ქსელები</li>
        <li>
          გათბობა-კონდიცირებისა და ვენტილაციის, ხანძარქრობის სისტემების
          პროექტირება და განხირციელება;
        </li>
        <li>
          წყლის მოწოდების და გამწმენდი/სატუმბი მინი-სადგურების პროექტირება,
          მონტაჟი და გაშევბა;
        </li>
      </ul>
    </div>
  </div>
  <Footer />
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  margin-left: 70px;
  margin-top: 150px;

  .subwrapper {
    margin-left: 20px;
    .subwrapper-title {
      font-size: 48px;
      color: #242424;
      margin-left: 21px;
      font-family: "Helvetica";
    }

    p {
      margin-top: 20px;
      margin-left: 20px;
      padding-right: 70px;
      text-align: justify;
      font-family: "Helvetica-light";
    }
    ul {
      margin-left: 35px;
      font-family: "Helvetica-light";

      li {
        margin: 10px 0;
      }
    }
  }
}
@media (min-width: 200px) and (max-width: 900px) {
  .wrapper {
    flex-direction: column;
    margin: 0;
    overflow-x: hidden;
    flex-wrap: wrap;
    .subwrapper {
      margin: initial;
      p {
        font-size: 14px;
      }
      .subwrapper-title {
        font-size: 20px;
        margin-top: 20px;
      }
      ul {
        margin-left: 25px;
        font-size: 14px;
      }
    }
  }
}
</style>
