<script setup>
import HeaderComponent from "./HeaderComponent.vue";
import Carousel from "./Carousel.vue";
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    title: "ახალციხე",
    date: "24 June 2014",
    images: [
      "/Axalcixe-slides/slide1.jpg",
      "/Axalcixe-slides/slide2.jpg",
      "/Axalcixe-slides/slide3.jpg",
      "/Axalcixe-slides/slide4.jpg",
      "/Axalcixe-slides/slide5.jpg",
      "/Axalcixe-slides/slide6.jpg",
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 2,
    title: "ბათუმის სინაგოგა",
    date: "24 June 2014",
    images: [
      "/Batumi-Synagogue/slide1.jpg",
      "/Batumi-Synagogue/slide2.jpg",
      "/Batumi-Synagogue/slide3.jpg",
      "/Batumi-Synagogue/slide4.jpg",
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 3,
    title: "გამშვები პუნქტები",
    date: "24 June 2014",
    images: [
      "/Gamshvebi-Punqtebi/slide1.jpg",
      "/Gamshvebi-Punqtebi/slide2.jpg",
      "/Gamshvebi-Punqtebi/slide3.jpg",
      "/Gamshvebi-Punqtebi/slide4.jpg",
      "/Gamshvebi-Punqtebi/slide5.jpg",
      "/Gamshvebi-Punqtebi/slide6.jpg",
      "/Gamshvebi-Punqtebi/slide7.jpg",
      "/Gamshvebi-Punqtebi/slide8.jpg",
      "/Gamshvebi-Punqtebi/slide9.jpg",

    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 4,
    title: "Supsa Fusion Center Ribbon Cutting Ceremony",
    date: "24 June 2014",
    images: [
      "/Supsa/slide1.jpg",
      "/Supsa/slide2.jpg",
      "/Supsa/slide3.jpg",
      "/Supsa/slide4.jpg",
      "/Supsa/slide5.jpg",
      "/Supsa/slide6.jpg",
      "/Supsa/slide7.jpg",
      "/Supsa/slide8.jpg",
      "/Supsa/slide9.jpg",
      "/Supsa/slide10.jpg",
      "/Supsa/slide11.jpg",
      "/Supsa/slide12.jpg",
      "/Supsa/slide13.jpg",
      "/Supsa/slide14.jpg",
      "/Supsa/slide15.jpg",
      "/Supsa/slide16.jpg",
      "/Supsa/slide17.jpg",
      "/Supsa/slide18.jpg",
      "/Supsa/slide19.jpg",
      "/Supsa/slide20.jpg",
      "/Supsa/slide21.jpg",
      "/Supsa/slide22.jpg",
      "/Supsa/slide23.jpg",
      "/Supsa/slide24.jpg",
      "/Supsa/slide25.jpg",
      "/Supsa/slide26.jpg",
      "/Supsa/slide27.jpg",
      "/Supsa/slide28.jpg",


    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 5,
    title: "ქუთაისის სინაგოგა",
    date: "24 June 2014",
    images: [
      "/Qutaisi/slide1.JPG",
      "/Qutaisi/slide2.JPG",
      "/Qutaisi/slide3.JPG",
      "/Qutaisi/slide4.JPG",
      "/Qutaisi/slide5.jpg",
      "/Qutaisi/slide6.JPG",
      "/Qutaisi/slide7.JPG",
      "/Qutaisi/slide8.JPG",
      "/Qutaisi/slide9.JPG",
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 6,
    title: "სარფი და ვალე",
    date: "24 June 2014",
    images: [
      "/Sarpi/slide1.JPG",
      "/Sarpi/slide2.JPG",
      "/Sarpi/slide3.JPG",
      "/Sarpi/slide4.JPG",
      "/Sarpi/slide5.JPG",
      "/Sarpi/slide6.jpg",
      "/Sarpi/slide7.JPG",
      "/Sarpi/slide8.JPG",
      "/Sarpi/slide9.JPG",
      "/Sarpi/slide10.JPG",
      "/Sarpi/slide11.JPG",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 7,
    title: "პათ-ლაბორატ",
    date: "24 June 2014",
    images: [
      "/Pat-Laborat/slide1.jpg",
      "/Pat-Laborat/slide2.jpg",
      "/Pat-Laborat/slide3.jpg",
      "/Pat-Laborat/slide4.jpg",
      "/Pat-Laborat/slide5.jpg",
      "/Pat-Laborat/slide6.jpg",
      "/Pat-Laborat/slide7.jpg",
      "/Pat-Laborat/slide8.jpg",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 8,
    title: "ტეტრატექის სამუშაოები",
    date: "24 June 2014",
    images: [
      "/Tetraqti/slide1.jpg",
      "/Tetraqti/slide2.jpg",
      "/Tetraqti/slide3.jpg",
      "/Tetraqti/slide4.jpg",
      "/Tetraqti/slide5.jpg",
      "/Tetraqti/slide6.jpg",
      "/Tetraqti/slide7.jpg",
      "/Tetraqti/slide8.jpg",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 9,
    title: "დედოფლისწყარო",
    date: "24 June 2014",
    images: [
      "/DedoflisWyaro/slide1.jpg",
      "/DedoflisWyaro/slide2.jpg",
      "/DedoflisWyaro/slide3.jpg",
      "/DedoflisWyaro/slide4.jpg",
      "/DedoflisWyaro/slide5.jpg",
      "/DedoflisWyaro/slide6.jpg",
      "/DedoflisWyaro/slide7.jpg",
      "/DedoflisWyaro/slide8.jpg",
      "/DedoflisWyaro/slide9.jpg",
      "/DedoflisWyaro/slide10.jpg",
      "/DedoflisWyaro/slide11.jpg",
      "/DedoflisWyaro/slide12.jpg",
      "/DedoflisWyaro/slide13.jpg",
      "/DedoflisWyaro/slide14.jpg",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 10,
    title: "თავშესაფარი",
    date: "24 June 2014",
    images: [
      "/Tavshesapari/slide1.jpg",
      "/Tavshesapari/slide2.jpg",
      "/Tavshesapari/slide3.jpg",
      "/Tavshesapari/slide4.jpg",
      "/Tavshesapari/slide5.jpg",
      "/Tavshesapari/slide6.jpg",
      "/Tavshesapari/slide7.jpg",
      "/Tavshesapari/slide8.jpg",
      "/Tavshesapari/slide9.jpg",
      "/Tavshesapari/slide10.jpg",
      "/Tavshesapari/slide11.jpg",
      "/Tavshesapari/slide12.jpg",
      "/Tavshesapari/slide13.jpg",
      "/Tavshesapari/slide14.jpg",
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 11,
    title: "გლდანი",
    date: "24 June 2014",
    images: [
      "/Gldani/slide1.jpg",
      "/Gldani/slide2.jpg",
      "/Gldani/slide3.jpg",
      "/Gldani/slide4.jpg",
      "/Gldani/slide5.jpg",
      "/Gldani/slide6.jpg",
      "/Gldani/slide7.jpg",
      "/Gldani/slide8.jpg",
      "/Gldani/slide9.jpg",
      "/Gldani/slide10.jpg",
      "/Gldani/slide11.jpg",
      "/Gldani/slide12.jpg",
      "/Gldani/slide13.jpg",
      "/Gldani/slide14.jpg",
      "/Gldani/slide15.jpg",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 12,
    title: "ტონგი",
    date: "24 June 2014",
    images: [
      "/Tongi/slide1.jpg",
      "/Tongi/slide2.jpg",
      "/Tongi/slide3.jpg",
      "/Tongi/slide4.jpg",
      "/Tongi/slide5.jpg",
      "/Tongi/slide6.jpg",
      "/Tongi/slide7.jpg",
      "/Tongi/slide8.jpg",
      "/Tongi/slide9.jpg",
      "/Tongi/slide10.jpg",
      "/Tongi/slide11.jpg",
      "/Tongi/slide12.jpg",
      "/Tongi/slide13.jpg",
      "/Tongi/slide14.jpg",
      "/Tongi/slide15.jpg",

    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 13,
    title: "კარალეთი",
    date: "24 June 2014",
    images: [
      "/Karaleti/slide1.jpg",
      "/Karaleti/slide2.jpg",
      "/Karaleti/slide3.jpg",
      "/Karaleti/slide4.jpg",
      "/Karaleti/slide5.jpg",
      "/Karaleti/slide6.jpg",
      "/Karaleti/slide7.jpg",
      "/Karaleti/slide8.jpg",
      "/Karaleti/slide9.jpg",
      "/Karaleti/slide10.jpg"
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 14,
    title: "ხოხობი",
    date: "24 June 2014",
    images: [
      "/Xoxobi/slide1.jpg",
      "/Xoxobi/slide2.jpg",
      "/Xoxobi/slide3.jpg",
      "/Xoxobi/slide4.jpg",
      "/Xoxobi/slide5.jpg",
      "/Xoxobi/slide6.jpg",
      "/Xoxobi/slide7.jpg",
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
]);

</script>
<template>
  <HeaderComponent />
  <Carousel :Items="items" />
</template>
<style lang="scss" scoped>
</style>
