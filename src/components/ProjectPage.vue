<script setup>
import { ref, defineAsyncComponent } from "vue";
const HeaderComponent = defineAsyncComponent(() =>
  import("./HeaderComponent.vue")
);
const Carousel = defineAsyncComponent({
  loader: () => import("./Carousel.vue"),

});
import ProgressSpinner from "primevue/progressspinner";

const Footer = defineAsyncComponent(() => import("./Footer.vue"));
const items = ref([
  {
    id: 1,
    title: "ახალციხე",
    date: "24 June 2014",
    images: [
      {
        full: "Axalcixe-slides/slide1.jpg",
        thumb: "thumb/axalcixe-thumb (1).jpg",
      },
      {
        full: "Axalcixe-slides/slide2.jpg",
        thumb: "thumb/axalcixe-thumb (2).jpg",
      },
      {
        full: "Axalcixe-slides/slide3.jpg",
        thumb: "thumb/axalcixe-thumb (3).jpg",
      },
      {
        full: "Axalcixe-slides/slide4.jpg",
        thumb: "thumb/axalcixe-thumb (4).jpg",
      },
      {
        full: "Axalcixe-slides/slide5.jpg",
        thumb: "thumb/axalcixe-thumb (5).jpg",
      },
      {
        full: "Axalcixe-slides/slide6.jpg",
        thumb: "thumb/axalcixe-thumb (6).jpg",
      },
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 2,
    title: "ბათუმის სინაგოგა",
    date: "24 June 2014",
    images: [
      {
        full: "Batumi-Synagogue/slide1.jpg",
        thumb: "thumb/batumi-thumb.jpg",
      },
      {
        full: "Batumi-Synagogue/slide2.jpg",
        thumb: "thumb/batumi-thumb2.jpg",
      },
      {
        full: "Batumi-Synagogue/slide3.jpg",
        thumb: "thumb/batumi-thumb3.jpg",
      },
      {
        full: "Batumi-Synagogue/slide4.jpg",
        thumb: "thumb/batumi-thumb4.jpg",
      },
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 3,
    title: "გამშვები პუნქტები",
    date: "24 June 2014",
    images: [
      {
        full: "Gamshvebi-Punqtebi/slide1.jpg",
        thumb: "thumb/gamshvebi-thumb.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide2.jpg",
        thumb: "thumb/gamshvebi-thumb2.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide3.jpg",
        thumb: "thumb/gamshvebi-thumb3.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide4.jpg",
        thumb: "thumb/gamshvebi-thumb4.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide5.jpg",
        thumb: "thumb/gamshvebi-thumb5.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide6.jpg",
        thumb: "thumb/gamshvebi-thumb6.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide7.jpg",
        thumb: "thumb/gamshvebi-thumb7.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide8.jpg",
        thumb: "thumb/gamshvebi-thumb8.jpg",
      },
      {
        full: "Gamshvebi-Punqtebi/slide9.jpg",
        thumb: "thumb/gamshvebi-thumb9.jpg",
      },
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 4,
    title: "Supsa Fusion Center Ribbon Cutting Ceremony",
    date: "24 June 2014",
    images: [
      {
        full: "Supsa/slide1.jpg",
        thumb: "thumb/supsa-thumb (1).jpg",
      },
      {
        full: "Supsa/slide2.jpg",
        thumb: "thumb/supsa-thumb (2).jpg",
      },
      {
        full: "Supsa/slide3.jpg",
        thumb: "thumb/supsa-thumb (3).jpg",
      },
      {
        full: "Supsa/slide4.jpg",
        thumb: "thumb/supsa-thumb (4).jpg",
      },
      {
        full: "Supsa/slide5.jpg",
        thumb: "thumb/supsa-thumb (5).jpg",
      },
      {
        full: "Supsa/slide6.jpg",
        thumb: "thumb/supsa-thumb (6).jpg",
      },
      {
        full: "Supsa/slide7.jpg",
        thumb: "thumb/supsa-thumb (7).jpg",
      },
      {
        full: "Supsa/slide8.jpg",
        thumb: "thumb/supsa-thumb (8).jpg",
      },
      {
        full: "Supsa/slide9.jpg",
        thumb: "thumb/supsa-thumb (9).jpg",
      },
      {
        full: "Supsa/slide10.jpg",
        thumb: "thumb/supsa-thumb (10).jpg",
      },
      {
        full: "Supsa/slide11.jpg",
        thumb: "thumb/supsa-thumb (11).jpg",
      },
      {
        full: "Supsa/slide12.jpg",
        thumb: "thumb/supsa-thumb (12).jpg",
      },
      {
        full: "Supsa/slide13.jpg",
        thumb: "thumb/supsa-thumb (13).jpg",
      },
      {
        full: "Supsa/slide14.jpg",
        thumb: "thumb/supsa-thumb (14).jpg",
      },
      {
        full: "Supsa/slide15.jpg",
        thumb: "thumb/supsa-thumb (15).jpg",
      },
      {
        full: "Supsa/slide16.jpg",
        thumb: "thumb/supsa-thumb (16).jpg",
      },
      {
        full: "Supsa/slide17.jpg",
        thumb: "thumb/supsa-thumb (17).jpg",
      },
      {
        full: "Supsa/slide18.jpg",
        thumb: "thumb/supsa-thumb (18).jpg",
      },
      {
        full: "Supsa/slide19.jpg",
        thumb: "thumb/supsa-thumb (19).jpg",
      },
      {
        full: "Supsa/slide20.jpg",
        thumb: "thumb/supsa-thumb (20).jpg",
      },
      {
        full: "Supsa/slide21.jpg",
        thumb: "thumb/supsa-thumb (21).jpg",
      },
      {
        full: "Supsa/slide22.jpg",
        thumb: "thumb/supsa-thumb (22).jpg",
      },
      {
        full: "Supsa/slide23.jpg",
        thumb: "thumb/supsa-thumb (23).jpg",
      },
      {
        full: "Supsa/slide24.jpg",
        thumb: "thumb/supsa-thumb (24).jpg",
      },
      {
        full: "Supsa/slide25.jpg",
        thumb: "thumb/supsa-thumb (25).jpg",
      },
      {
        full: "Supsa/slide26.jpg",
        thumb: "thumb/supsa-thumb (26).jpg",
      },
      {
        full: "Supsa/slide27.jpg",
        thumb: "thumb/supsa-thumb (27).jpg",
      },
      {
        full: "Supsa/slide28.jpg",
        thumb: "thumb/supsa-thumb (28).jpg",
      },
    ],
    description:
      "Ribbon Cutting was attended by: Minister of Internal Affairs (MIA) – Mr. Chikaidze; Head of the MIA Border Police of Georgia General-Major Gamezardashvili; Minister of Finance; US Ambassador Richard Norland; EXBS/ Ms. Julia Claus and Mr. John Curren; DITRA; USACE / Ms. Gwendolyn Nelson; Local Government members; Media.",
  },
  {
    id: 5,
    title: "ქუთაისის სინაგოგა",
    date: "24 June 2014",
    images: [
      {
        full: "Qutaisi/slide1.JPG",
        thumb: "thumb/qutaisi-thumb (1).JPG",
      },
      {
        full: "Qutaisi/slide2.JPG",
        thumb: "thumb/qutaisi-thumb (2).JPG",
      },
      {
        full: "Qutaisi/slide3.JPG",
        thumb: "thumb/qutaisi-thumb (3).JPG",
      },
      {
        full: "Qutaisi/slide4.JPG",
        thumb: "thumb/qutaisi-thumb (4).JPG",
      },
      {
        full: "Qutaisi/slide5.jpg",
        thumb: "thumb/qutaisi-thumb (5).JPG",
      },
      {
        full: "Qutaisi/slide6.JPG",
        thumb: "thumb/qutaisi-thumb (6).JPG",
      },
      {
        full: "Qutaisi/slide7.JPG",
        thumb: "thumb/qutaisi-thumb (7).JPG",
      },
      {
        full: "Qutaisi/slide8.JPG",
        thumb: "thumb/qutaisi-thumb (8).JPG",
      },
      {
        full: "Qutaisi/slide9.JPG",
        thumb: "thumb/qutaisi-thumb (9).JPG",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 6,
    title: "სარფი და ვალე",
    date: "24 June 2014",
    images: [
      {
        full: "Sarpi/slide1.JPG",
        thumb: "thumb/sarpi-thumb (1).JPG",
      },
      {
        full: "Sarpi/slide2.JPG",
        thumb: "thumb/sarpi-thumb (2).JPG",
      },
      {
        full: "Sarpi/slide3.JPG",
        thumb: "thumb/sarpi-thumb (3).JPG",
      },
      {
        full: "Sarpi/slide4.JPG",
        thumb: "thumb/sarpi-thumb (4).JPG",
      },
      {
        full: "Sarpi/slide5.JPG",
        thumb: "thumb/sarpi-thumb (5).JPG",
      },
      {
        full: "Sarpi/slide6.jpg",
        thumb: "thumb/sarpi-thumb (6).JPG",
      },
      {
        full: "Sarpi/slide7.JPG",
        thumb: "thumb/sarpi-thumb (7).JPG",
      },
      {
        full: "Sarpi/slide8.JPG",
        thumb: "thumb/sarpi-thumb (8).JPG",
      },
      {
        full: "Sarpi/slide9.JPG",
        thumb: "thumb/sarpi-thumb (9).JPG",
      },
      {
        full: "Sarpi/slide10.JPG",
        thumb: "thumb/sarpi-thumb (10).JPG",
      },
      {
        full: "Sarpi/slide11.JPG",
        thumb: "thumb/sarpi-thumb (11).JPG",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 7,
    title: "პათ-ლაბორატ",
    date: "24 June 2014",
    images: [
      {
        full: "Pat-Laborat/slide1.jpg",
        thumb: "thumb/pat-thumb (1).jpg",
      },
      {
        full: "Pat-Laborat/slide2.jpg",
        thumb: "thumb/pat-thumb (2).jpg",
      },
      {
        full: "Pat-Laborat/slide3.jpg",
        thumb: "thumb/pat-thumb (3).jpg",
      },
      {
        full: "Pat-Laborat/slide4.jpg",
        thumb: "thumb/pat-thumb (4).jpg",
      },
      {
        full: "Pat-Laborat/slide5.jpg",
        thumb: "thumb/pat-thumb (5).jpg",
      },
      {
        full: "Pat-Laborat/slide6.jpg",
        thumb: "thumb/pat-thumb (6).jpg",
      },
      {
        full: "Pat-Laborat/slide7.jpg",
        thumb: "thumb/pat-thumb (7).jpg",
      },
      {
        full: "Pat-Laborat/slide8.jpg",
        thumb: "thumb/pat-thumb (8).JPG",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 8,
    title: "ტეტრატექის სამუშაოები",
    date: "24 June 2014",
    images: [
      {
        full: "Tetraqti/slide1.jpg",
        thumb: "thumb/tetraqti-thumb (1).jpg",
      },
      {
        full: "Tetraqti/slide2.jpg",
        thumb: "thumb/tetraqti-thumb (2).jpg",
      },
      {
        full: "Tetraqti/slide3.jpg",
        thumb: "thumb/tetraqti-thumb (3).jpg",
      },
      {
        full: "Tetraqti/slide4.jpg",
        thumb: "thumb/tetraqti-thumb (4).jpg",
      },
      {
        full: "Tetraqti/slide5.jpg",
        thumb: "thumb/tetraqti-thumb (5).jpg",
      },
      {
        full: "Tetraqti/slide6.jpg",
        thumb: "thumb/tetraqti-thumb (6).jpg",
      },
      {
        full: "Tetraqti/slide7.jpg",
        thumb: "thumb/tetraqti-thumb (7).jpg",
      },
      {
        full: "Tetraqti/slide8.jpg",
        thumb: "thumb/tetraqti-thumb (8).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 9,
    title: "დედოფლისწყარო",
    date: "24 June 2014",
    images: [
      {
        full: "DedoflisWyaro/slide1.jpg",
        thumb: "thumb/dedoflis-thumb (1).jpg",
      },
      {
        full: "DedoflisWyaro/slide2.jpg",
        thumb: "thumb/dedoflis-thumb (2).jpg",
      },
      {
        full: "DedoflisWyaro/slide3.jpg",
        thumb: "thumb/dedoflis-thumb (3).jpg",
      },
      {
        full: "DedoflisWyaro/slide4.jpg",
        thumb: "thumb/dedoflis-thumb (4).jpg",
      },
      {
        full: "DedoflisWyaro/slide5.jpg",
        thumb: "thumb/dedoflis-thumb (5).jpg",
      },
      {
        full: "DedoflisWyaro/slide6.jpg",
        thumb: "thumb/dedoflis-thumb (6).jpg",
      },
      {
        full: "DedoflisWyaro/slide7.jpg",
        thumb: "thumb/dedoflis-thumb (7).jpg",
      },
      {
        full: "DedoflisWyaro/slide8.jpg",
        thumb: "thumb/dedoflis-thumb (8).jpg",
      },
      {
        full: "DedoflisWyaro/slide9.jpg",
        thumb: "thumb/dedoflis-thumb (9).jpg",
      },
      {
        full: "DedoflisWyaro/slide10.jpg",
        thumb: "thumb/dedoflis-thumb (10).jpg",
      },
      {
        full: "DedoflisWyaro/slide11.jpg",
        thumb: "thumb/dedoflis-thumb (11).jpg",
      },
      {
        full: "DedoflisWyaro/slide12.jpg",
        thumb: "thumb/dedoflis-thumb (12).jpg",
      },
      {
        full: "DedoflisWyaro/slide13.jpg",
        thumb: "thumb/dedoflis-thumb (13).jpg",
      },
      {
        full: "DedoflisWyaro/slide14.jpg",
        thumb: "thumb/dedoflis-thumb (14).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 10,
    title: "თავშესაფარი",
    date: "24 June 2014",
    images: [
      {
        full: "Tavshesapari/slide1.jpg",
        thumb: "thumb/tavshesafari-thumb (1).jpg",
      },
      {
        full: "Tavshesapari/slide2.jpg",
        thumb: "thumb/tavshesafari-thumb (2).jpg",
      },
      {
        full: "Tavshesapari/slide3.jpg",
        thumb: "thumb/tavshesafari-thumb (3).jpg",
      },
      {
        full: "Tavshesapari/slide4.jpg",
        thumb: "thumb/tavshesafari-thumb (4).jpg",
      },
      {
        full: "Tavshesapari/slide5.jpg",
        thumb: "thumb/tavshesafari-thumb (5).jpg",
      },
      {
        full: "Tavshesapari/slide6.jpg",
        thumb: "thumb/tavshesafari-thumb (6).jpg",
      },
      {
        full: "Tavshesapari/slide7.jpg",
        thumb: "thumb/tavshesafari-thumb (7).jpg",
      },
      {
        full: "Tavshesapari/slide8.jpg",
        thumb: "thumb/tavshesafari-thumb (8).jpg",
      },
      {
        full: "Tavshesapari/slide9.jpg",
        thumb: "thumb/tavshesafari-thumb (9).jpg",
      },
      {
        full: "Tavshesapari/slide10.jpg",
        thumb: "thumb/tavshesafari-thumb (10).jpg",
      },
      {
        full: "Tavshesapari/slide11.jpg",
        thumb: "thumb/tavshesafari-thumb (11).jpg",
      },
      {
        full: "Tavshesapari/slide12.jpg",
        thumb: "thumb/tavshesafari-thumb (12).jpg",
      },
      {
        full: "Tavshesapari/slide13.jpg",
        thumb: "thumb/tavshesafari-thumb (13).jpg",
      },
      {
        full: "Tavshesapari/slide14.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 11,
    title: "გლდანი",
    date: "24 June 2014",
    images: [
      {
        full: "Gldani/slide1.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide2.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide3.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide4.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide5.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide6.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide7.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide8.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide9.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide10.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide11.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide12.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide13.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
      {
        full: "Gldani/slide14.jpg",
        thumb: "thumb/tavshesafari-thumb (14).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 12,
    title: "ტონგი",
    date: "24 June 2014",
    images: [
      {
        full: "Tongi/slide1.jpg",
        thumb: "thumb/tong-thumb (1).jpg",
      },
      {
        full: "Tongi/slide2.jpg",
        thumb: "thumb/tong-thumb (2).jpg",
      },
      {
        full: "Tongi/slide3.jpg",
        thumb: "thumb/tong-thumb (3).jpg",
      },
      {
        full: "Tongi/slide4.jpg",
        thumb: "thumb/tong-thumb (4).jpg",
      },
      {
        full: "Tongi/slide5.jpg",
        thumb: "thumb/tong-thumb (5).jpg",
      },
      {
        full: "Tongi/slide6.jpg",
        thumb: "thumb/tong-thumb (6).jpg",
      },
      {
        full: "Tongi/slide7.jpg",
        thumb: "thumb/tong-thumb (7).jpg",
      },
      {
        full: "Tongi/slide8.jpg",
        thumb: "thumb/tong-thumb (8).jpg",
      },
      {
        full: "Tongi/slide9.jpg",
        thumb: "thumb/tong-thumb (9).jpg",
      },
      {
        full: "Tongi/slide10.jpg",
        thumb: "thumb/tong-thumb (10).jpg",
      },
      {
        full: "Tongi/slide11.jpg",
        thumb: "thumb/tong-thumb (11).jpg",
      },
      {
        full: "Tongi/slide12.jpg",
        thumb: "thumb/tong-thumb (12).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 13,
    title: "კარალეთი",
    date: "24 June 2014",
    images: [
      {
        full: "Karaleti/slide1.jpg",
        thumb: "thumb/karaleti-thumb (1).jpg",
      },
      {
        full: "Karaleti/slide2.jpg",
        thumb: "thumb/karaleti-thumb (2).jpg",
      },
      {
        full: "Karaleti/slide3.jpg",
        thumb: "thumb/karaleti-thumb (3).jpg",
      },
      {
        full: "Karaleti/slide4.jpg",
        thumb: "thumb/karaleti-thumb (4).jpg",
      },
      {
        full: "Karaleti/slide5.jpg",
        thumb: "thumb/karaleti-thumb (5).jpg",
      },
      {
        full: "Karaleti/slide6.jpg",
        thumb: "thumb/karaleti-thumb (6).jpg",
      },
      {
        full: "Karaleti/slide7.jpg",
        thumb: "thumb/karaleti-thumb (7).jpg",
      },
      {
        full: "Karaleti/slide8.jpg",
        thumb: "thumb/karaleti-thumb (8).jpg",
      },
      {
        full: "Karaleti/slide9.jpg",
        thumb: "thumb/karaleti-thumb (9).jpg",
      },
      {
        full: "Karaleti/slide10.jpg",
        thumb: "thumb/karaleti-thumb (10).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
  {
    id: 14,
    title: "ხოხობი",
    date: "24 June 2014",
    images: [
      {
        full: "Xoxobi/slide1.jpg",
        thumb: "thumb/xoxobi-thumb (1).jpg",
      },
      {
        full: "Xoxobi/slide2.jpg",
        thumb: "thumb/xoxobi-thumb (2).jpg",
      },
      {
        full: "Xoxobi/slide3.jpg",
        thumb: "thumb/xoxobi-thumb (3).jpg",
      },
      {
        full: "Xoxobi/slide4.jpg",
        thumb: "thumb/xoxobi-thumb (4).jpg",
      },
      {
        full: "Xoxobi/slide5.jpg",
        thumb: "thumb/xoxobi-thumb (5).jpg",
      },
      {
        full: "Xoxobi/slide6.jpg",
        thumb: "thumb/xoxobi-thumb (6).jpg",
      },
      {
        full: "Xoxobi/slide7.jpg",
        thumb: "thumb/xoxobi-thumb (7).jpg",
      },
    ],
    description:
      "ეს სინაგოგა წარმოადგენს ერთგვარ კომპლექსს.რადგან აქ გარდა სინაგოგისა ვხვდებით სხვა დამხმარე ნაგებობებს, რომლებიც იუდეური რიტუალების ჩასატარებლადაა განკუთვნილი.ამ შენობებში ხდებოდა ძველი ებრაული (ივრითი) ენის შესწავლა. აგრეთვე მათთვის, ვინც ლოცვის დროს მთავარ სინაგოგაში ვერ ეტეოდა, ტარდებოდა ლოცვა. მრევლის სიმრავლე განაპირობებდა დამატებითი ოთახების გამოყენებას ლოცვისა და სხვა რიტუალების ჩასატარებლად.",
  },
]);
</script>
<template>
  <HeaderComponent />
  <Suspense>
    <template #default>
      <Carousel :Items="items" />
    </template>
    <template #fallback>
      <ProgressSpinner />
    </template>
  </Suspense>
  <Footer />
</template>
<style lang="scss" scoped></style>
