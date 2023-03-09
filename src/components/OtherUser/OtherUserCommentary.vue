<script setup>
import OtherUserSimpleForm from "@/components/OtherUser/OtherUserSimpleForm.vue";

import axios from "axios";
import { useOtherUser } from "@/stores/otherUsers";
import {useUserStore} from "@/stores/user"
import { ref, watchEffect, defineProps } from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const otherUsersStore = useOtherUser();
const userStore = useUserStore()

const pageCommentaries = ref([
  {
    name: "Samuel Jackson",
    date: "13 Apr 2022",
    commentary: "Hey Eva! You're cool. Nice pic!",
  },
  {
    name: "Angela Deimon",
    date: "10 Apr 2022",
    commentary:
      "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
  },
  {
    name: "Ronald Harris",
    date: "8 Apr 2022",
    commentary:
      "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
  },
]);
async function loadLatestReviewsCommentaries() {
  const URL = `${otherUsersStore.API_URL_OTHER_USER}/${props.id}/loadLastReviewsCommentaries`;
  return await axios
    .get(URL)
    .then((resp) => {
      pageCommentaries.value = resp.data;
    })
    .catch((e) => {
      //Error handler
    });
}
async function loadAllReviewsCommentaries() {
  const URL = `${otherUsersStore.API_URL_OTHER_USER}/${props.id}/loadAllReviewsCommentaries`;
  return await axios
    .get(URL)
    .then((resp) => {
      pageCommentaries.value = resp.data;
    })
    .catch((e) => {
      //Error handler
    });
}
async function loadCommentariesSwitch() {
  // if (commentariesSwitch.value == 0) {
  //   await loadLatestReviewsCommentaries();
  // } else if (commentariesSwitch.value == 1) {
  //   await loadAllReviewsCommentaries();
  // }
}
async function reloadCommentaries(message) {
  // await loadCommentariesSwitch()

  // mock reload commentaries
  let date = new Date().toDateString().split(" ")
  date = (date[2][0] == 0 ? date[2][1] : date[2]) + " " + date[1] + " " + date[3]

  pageCommentaries.value.unshift({
    commentary: message,
    date: date,
    name: userStore.user.name
  })
}

const commentariesSwitch = ref(0);

watchEffect(async () => {
  // Load different commentaries depends on choosen link (button with commentariesSwitch variable in @click function)
  // await loadCommentariesSwitch()
});
</script>

<template>
  <section class="page-commentary__container">
    <div class="page-commentary__block">
      <div class="page-commentary__control">
        <button
          @click="commentariesSwitch = 0"
          class="page-commentary__control-link"
          :class="{
            'page-commentary__control-link_active': commentariesSwitch == 0,
          }"
        >
          Latest reviews
        </button>
        <button
          @click="commentariesSwitch = 1"
          class="page-commentary__control-link"
          :class="{
            'page-commentary__control-link_active': commentariesSwitch == 1,
          }"
        >
          All reviews
        </button>
      </div>
      <div class="page-commentary__likes">
        <p class="">
          <img src="@/assets/like.svg" alt="Like icon" /><span>131</span>
        </p>
        <p class="">
          <img src="@/assets/comment.svg" alt="Comment icon" /><span>14</span>
        </p>
      </div>
    </div>
    <div class="page-commentary-main__block">
      <div
        v-for="item in pageCommentaries"
        class="page-commentary-main__block-item"
      >
        <div class="page-commentary-main__user">
          <span class="page-commentary-main__user-name">{{ item.name }}</span>
          <span class="page-commentary-main__user-data">{{ item.date }}</span>
        </div>
        <div class="page-commentary-main__commentary-block">
          <div class="page-commentary-main__commentary-block-triangle"></div>
          <p>{{ item.commentary }}</p>
        </div>
      </div>
    </div>
    <div class="page-commentary-main__form-block">
      <OtherUserSimpleForm @submit="reloadCommentaries" />
    </div>
  </section>
</template>

<style scoped>
.page-commentary__container {
  display: flex;
  flex-direction: column;
  margin-top: 18px;
}
.page-commentary__block {
  display: flex;
  justify-content: space-between;
}
.page-commentary__control {
}
.page-commentary__control-link {
  font-size: 14px;
  line-height: 1.14;
  color: #005da1;
  text-decoration: underline;
  padding-right: 8px;
}
.page-commentary__control-link_active {
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #333333;
  text-decoration: none;
}
.page-commentary__likes {
  font-size: 12px;
  line-height: 1.15;
  display: flex;
}
.page-commentary__likes p {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 16px;
}
.page-commentary__likes span {
  margin-left: 2px;
}
.page-commentary__likes img {
  width: 12px;
  height: 12px;
}

@media (max-width: 479.98px) {
  .page-commentary__container {
    margin-top: 10px;
  }
}

/* ==================================== */

.page-commentary-main__block {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.page-commentary-main__block-item:first-child {
  margin-top: 0;
}
.page-commentary-main__block-item {
  margin-top: 18px;
}
.page-commentary-main__user {
  display: flex;
  align-items: center;
}
.page-commentary-main__user-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.35;
  margin-right: 8px;
}
.page-commentary-main__user-data {
  font-size: 11px;
  line-height: 1.72;
}
.page-commentary-main__commentary-block {
  position: relative;
  font-size: 14px;
  line-height: 1.35;

  background-color: #f2fbff;
  padding: 12px 20px 12px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #c4cbcf;
}
.page-commentary-main__commentary-block:after {
  content: "";
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  background-color: #c4cbcf;
  clip-path: polygon(100% 100%, 0% 100%, 0 0);
  top: -10px;
  z-index: 2;
}
.page-commentary-main__commentary-block:before {
  content: "";
  position: absolute;
  display: block;
  width: 8px;
  height: 9px;
  background-color: #f2fbff;
  clip-path: polygon(100% 100%, 0% 100%, 0 0);
  top: -8px;
  left: 21px;
  z-index: 3;
}
</style>
