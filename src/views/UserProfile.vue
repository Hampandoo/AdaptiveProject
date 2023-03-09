<script setup>
import OtherUserProfile from "@/components/OtherUser/OtherUserProfile.vue";
import OtherUserService from "@/components/OtherUser/OtherUserService.vue";
import OtherUserCommentary from "@/components/OtherUser/OtherUserCommentary.vue";

import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useOtherUser } from "@/stores/otherUsers";

const otherUsersStore = useOtherUser();

const otherUser = ref({
  id: 1,
  name: "Eva Jonson",
  profession: "Sales Manager",
  description:
    "I will find the best offers for you. My services are absolutely free.",
  img: "@/assets/Avatar.svg",
  services: [
    { name: "Manual tour booking", value: 11 },
    { name: "Package tours", value: 3 },
    { name: "Hotels", value: 1 },
  ],
  likes: 131,
  numberOfComments: 14,
});
async function loadOtherUser() {
  const URL = `${otherUsersStore.API_URL_OTHER_USER}/loadOtherUser`;
  return await axios
    .get(URL)
    .then((resp) => {
      otherUser.value = resp.data;
    })
    .catch((e) => {
      //Error handler
    });
}

const totalValue = computed(() => {
  let value = 0;
  otherUser.value.services.map((item) => {
    value += item.value;
  });
  return value;
});

function sortServicesWithValue() {
  const services = [...otherUser.value.services];
  services.sort((a, b) => b.value - a.value);
  return services;
}
function makeProgressBar() {
  // Function changes value to percents. Highest value is 100%, it is width of progress bar
  const services = sortServicesWithValue();

  let mainValue = services.shift();
  const percentServices = services.map((item) =>
    parseInt((item.value / mainValue.value) * 100)
  );
  percentServices.push(100);

  percentServices.sort((a, b) => b - a);

  // return sorted array with percents relatively to array of otherUser.service -> obj.value (inside array)
  return percentServices;
}
const progressBar = ref([]);

// It is possible using 2 arrays for latest and all commentaries with <keep-alive> component.
// This way comments will be reloaded every time when we change link.
// Cause we can refresh and upload new commentaries without page full reload

onMounted(async () => {
  // Load choosen user page, and add values to progressBar
  // await loadOtherUser().then(resp => {
  progressBar.value = makeProgressBar();
  // })
  // .catch(e => {
  //   // Error handler
  // })
  //   await loadLatestReviewsCommentaries().then(resp => {
  //     pageCommentaries.value = resp.data
  // })
});
</script>

<template>
  <div>
    <OtherUserProfile :user="otherUser" />
    <OtherUserService
      :totalValue="totalValue"
      :services="otherUser.services"
      :progressBarSize="progressBar"
    />
    <OtherUserCommentary :id="otherUser.id" />
  </div>
</template>

<style></style>
