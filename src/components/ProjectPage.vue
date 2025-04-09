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
    id: 3,
    title: "გამშვები პუნქტები",
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
    id: 4,
    title: "Supsa Fusion Center Ribbon Cutting Ceremony",
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
    id: 5,
    title: "ქუთაისის სინაგოგა",
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
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 6,
    title: "სარფი და ვალე",
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
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 7,
    title: "პათ-ლაბორატ",
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
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 8,
    title: "ტეტრატექის სამუშაოები",
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
