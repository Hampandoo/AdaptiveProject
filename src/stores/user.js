import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: "Joe Doel",
    profession: "Somebody",
    description: "Doing test task...",
    img: "@/assets/Avatar.svg"
  })

  return { user }
})
