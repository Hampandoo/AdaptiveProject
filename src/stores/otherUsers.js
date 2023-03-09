import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

// In this page global store (Pinia, Vuex) doesn't make sense, cause it maybe any user page
// This way will be better write other users logic inside components.

export const useOtherUser = defineStore("otherUser", () => {
  const API_URL_OTHER_USER = "Main link for calling API";
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
    const URL = `${API_URL_OTHER_USER}/loadOtherUser`;
    return await axios
      .get(URL)
      .then((resp) => {
        otherUser.value = resp.data;
      })
      .catch((e) => {
        //Error handler
      });
  }

  // It gives sum of all values from user services
  const totalValue = computed(() => {
    let value = 0;
    otherUser.value.services.map((item) => {
      value += item.value;
    });
    return value;
  });

  function sortServicesWithValue() {
    const services = [...otherUser.value.services.value];
    services.value.sort((a, b) => b.value - a.value);
    return services;
  }
  function makeProgressBar() {
    const services = sortServicesWithValue();
  }

  const lastReviewsCommentaries = ref([]);
  async function loadLastReviewsCommentaries() {
    const URL = `${API_URL_OTHER_USER}/loadLastReviewsCommentaries`;
    return await axios
      .get(URL)
      .then((resp) => {
        lastReviewsCommentaries.value = resp.data;
      })
      .catch((e) => {
        //Error handler
      });
  }

  const allReviewsCommentaries = ref([]);
  async function loadAllReviewsCommentaries() {
    const URL = `${API_URL_OTHER_USER}/loadAllReviewsCommentaries`;
    return await axios
      .get(URL)
      .then((resp) => {
        allReviewsCommentaries.value = resp.data;
      })
      .catch((e) => {
        //Error handler
      });
  }

  return {
    API_URL_OTHER_USER,
    otherUser,
    loadOtherUser,
    totalValue,
    makeProgressBar,
    loadLastReviewsCommentaries,
    lastReviewsCommentaries,
    loadAllReviewsCommentaries,
    allReviewsCommentaries,
  };
});
