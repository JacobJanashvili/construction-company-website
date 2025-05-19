<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineAsyncComponent, reactive, computed, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import Button from "primevue/button";
import emailjs from "@emailjs/browser";
import { useToast } from "primevue/usetoast";
import { helpers, required, email } from "@vuelidate/validators";
const resultNotification = useToast();
const form = reactive({
  name: null,
  email: null,
  message: null,
});
const formRef = ref(null);
const loading = ref(false);
const rules = computed(() => ({
  name: {
    required: helpers.withMessage("name is required.", required),
    $lazy: true,
  },
  email: {
    required: helpers.withMessage("email is required", required),
    email: helpers.withMessage("email isn't in correct format", email),
  },
  message: {
    required: helpers.withMessage("message for email is required", required),
  },
}));
const v$ = useVuelidate(rules, form);
const sendEmail = () => {
  loading.value = true;
  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SENDERID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      formRef.value,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
        loading.value = false;
        resultNotification.add({
          severity: "success",
          summary: "Email sent successfully",
          detail: "",
          life: 3000,
        });
      },
      (error) => {
        console.log("FAILED...", error);
        loading.value = false;
        resultNotification.add({
          severity: "error",
          summary: "There was some error sending email",
          detail: error,
          life: 3000,
        });
      }
    );
};
const submitForm = async () => {
  console.log("submitted", import.meta.env.VITE_EMAILJS_SENDERID);
  const FormStatus = await v$.value.$validate();
  if (!FormStatus) return;
  sendEmail(form);
};
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.message = "";
  v$.value.$reset();
};
const Header = defineAsyncComponent(() => import("./HeaderComponent.vue"));
const Footer = defineAsyncComponent(() => import("./Footer.vue"));
</script>
<template>
  <Header />
  <div class="wrapper">
    <div class="subwrapper1">
      <h1 class="title">კონტაქტი</h1>
      <form @submit.prevent="submitForm" ref="formRef">
        <div class="form-input">
          <input
            type="text"
            :class="{ 'error-border': v$.name.$errors.length }"
            v-model="form.name"
            name="name"
            placeholder="სახელი*"
          />
          <div
            class="input-error"
            v-for="error in v$.name.$errors"
            :key="error.$uid"
          >
            <p class="error">*{{ error.$message }}</p>
          </div>
        </div>
        <div class="form-input">
          <input
            type="text"
            :class="{ 'error-border': v$.email.$errors.length }"
            v-model="form.email"
            name="reply_to"
            placeholder="E-mail*"
          />
          <div
            class="input-error"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
          >
            <p class="error">*{{ error.$message }}</p>
          </div>
        </div>
        <div class="form-input">
          <textarea
            v-model="form.message"
            rows="5"
            :class="{ 'error-border': v$.message.$errors.length }"
            cols="60"
            name="message"
            id="notification"
            placeholder="შეტყობინება*"
          ></textarea>
          <div
            class="input-error"
            v-for="error in v$.message.$errors"
            :key="error.$uid"
          >
            <p class="error">*{{ error.$message }}</p>
          </div>
        </div>
        <div class="button-wrapper">
          <Button
            label="წაშლა"
            class="button btn-outline"
            variant="outlined"
            type="reset"
            @click="resetForm"
          />
          <Button class="button btn-filled" type="submit" :loading="loading">
            <p>გაგზავნა</p>
          </Button>
        </div>
      </form>
    </div>
    <div class="subwrapper2">
      <div class="subwrapper2-txt-wrapper">
        <p><span class="title-highlight">ელ-ფოსტა: </span>info@mail.com</p>
        <p><span class="title-highlight">ტელეფონი: </span>+999 999 999 9999</p>
        <p><span class="title-highlight">მისამართი: </span>ქუჩა # 1</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2979.220880427931!2d44.79106407649513!3d41.694167176909644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m5!1s0x40440ce9426e72b1%3A0x4384a7faec25aa9a!2s10%20Shio%20Chitadze%20Street%2C%20Tiflis!3m2!1d41.6941632!2d44.793639!4m0!5e0!3m2!1sen!2sge!4v1745856526939!5m2!1sen!2sge"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <Footer />
</template>
<style lang="scss" scoped>

.wrapper {
  margin-top: 165px;
  width: 85%;
  font-family: "Helvetica-light";
  display: flex;
  justify-content: space-between;
  .subwrapper1 {
    margin-left: 65px;
    margin-top: -22px;
    .title {
      font-family: "Helvetica";
    }
    form {
      margin-top: 30px;
      user-select: none;
      .form-input {
        margin-bottom: 20px;
      }
      .error-border {
        border: 1px solid red;
      }
      .error {
        font-size: 10px;
        color: red;
      }
    }
    .button-wrapper {
      display: flex;
      align-items: center;
      font-size: 18px;

      .button {
        border: 1px solid #ffb717;
        width: 121px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 10px;
        user-select: none;
        color: #242424;
        font-family: "Helvetica";
        font-size: 16px;
      }
      .button:active {
        filter: brightness(1.2);
      }
      .btn-outline {
        background-color: white;
      }
      .btn-filled {
        width: 141px;
        background-color: #ffb717;
      }
    }
  }
  .subwrapper2 {
    .subwrapper2-txt-wrapper {
      margin-left: 108px;
      margin-bottom: 30px;
      display: flex;
      p {
        margin: 0 51px;
      }
      .title-highlight {
        font-family: "Helvetica";
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
  ::placeholder {
    font-family: "Helvetica-light";
    color: #221e1f66;
  }
  input {
    width: 475px;
    height: 40px;
    padding: 10px 0 13px 16px;
    border: 1px solid #0000001a;
    font-family: "Helvetica-light";
  }
  textarea {
    padding: 10px 0 13px 16px;
    border: 1px solid #0000001a;
    resize: none;
    font-family: "Helvetica-light";
  }
  iframe {
    margin-left: 20px;
    width: 67vw;
  }
}
@media (min-width: 200px) and (max-width: 900px) {
  .wrapper {
    flex-direction: column;
    margin-top: 97px;
    .subwrapper1 {
      margin: 0;
      padding-left: 20px;
      padding-right: 20px;
      textarea {
        width: 100%;
        height: 90px;
        left: 20px;
        top: 255px;

        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      input {
        width: 100%;
        height: 40px;
        left: 20px;
        top: 195px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    .subwrapper2 {
      .subwrapper2-txt-wrapper {
        flex-direction: column;
        margin: 0;
        margin-bottom: 47px;
        margin-top: 37px;
        p{
          margin: 0 23px;
        }
      }
      iframe{
        width: 374px;

      }
    }
  }
}
</style>
