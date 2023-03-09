<script setup>
import axios from "axios";
import { ref, defineEmits } from "vue";
import { useOtherUser } from "@/stores/otherUsers";

const otherUsersStore = useOtherUser();

const emit = defineEmits(["submit"]);

const message = ref("");
// async function sendForm() {
//   // Send new commentary to server
//   const URL = `${otherUsersStore.API_URL_OTHER_USER}/userID/loadLastReviewsCommentaries`;
//   return await axios
//     .post(URL, {message: message.value})
//   .then(resp => {
//   message.value = "";
//   emit('submit')
//   })
//     .catch((e) => {
//       //Error handler
//     });
// }

// mock function
function sendForm() {
  if (message.value != "") {
    emit("submit", message.value);
    message.value = "";
  }
}
</script>

<template>
  <form class="page-commentary-main__form-form" @submit.prevent="sendForm">
    <textarea
      @keyup.ctrl.enter="sendForm"
      v-model="message"
      class="page-commentary-main__form-textarea"
      name="message"
      cols="30"
      rows="10"
    ></textarea>
    <button class="page-commentary-main__form-button" type="submit">
      Send a message
    </button>
  </form>
</template>

<style>
.page-commentary-main__form-block {
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  padding: 28px 18px 34px;
  background-color: #f2f2f2;
  margin-right: -18px;
  margin-left: -18px;
}
.page-commentary-main__form-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-commentary-main__form-textarea {
  height: 63px;
  border: 1px solid black;
  border-radius: 1px;
  width: 100%;
  resize: none;
  overflow: visible;
  padding: 3px;

  font-size: 16px;
  color: black;
}
.page-commentary-main__form-button {
  display: inline-block;
  margin-top: 23px;
  border-radius: 23px;
  background-color: #fdd639 !important;
  padding: 13px 90px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.31;
  color: #333333;
  box-sizing: content-box;
}
.page-commentary-main__form-button:active {
  box-shadow: 2px 2px 2px 2px #e2bf35;
}

@media (max-width: 479.98px) {
  .page-commentary-main__form-button {
    padding: 13px 70px;
    font-size: 14px;
  }
}
</style>
