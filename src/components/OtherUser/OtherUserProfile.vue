<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="page-user__container">
    <div></div>
    <div class="page__logo">
      <img src="@/assets/Avatar.svg" alt="Website Logo" />
    </div>
    <div class="page-user__block">
      <h3 class="page-user__title">{{ user.name }}</h3>
      <span class="page-user__subtitle">{{ user.profession }}</span>
      <div class="page-user__description-block">
        <p class="page-user__description">
          {{ user.description }}
        </p>
        <span></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-user__container {
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
}
.page__logo {
  flex: 0 0 auto;
  border-radius: 50%;
  width: 124px;
  height: 124px;
  overflow: hidden;
  z-index: 2;
}
.page-user__block {
  flex: 1 1 auto;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.page-user__title {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 2px;
}
.page-user__subtitle {
  font-size: 12px;
  line-height: 1.65;
  color: #808080;
  margin-bottom: 5px;
}
.page-user__description-block {
  display: flex;
  background-color: #fffbc8;
  border: 1px solid #dadada;
  border-radius: 5px;
  margin-left: -40px;
  padding-left: 40px;
  max-width: 364px;
}
.page-user__description {
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.42;
  width: 100%;
}

@media (max-width: 479.98px) {
  .page-user__subtitle {
    line-height: 1.25;
  }
  .page-user__description {
    line-height: 1.25;
  }
  .page-user__container {
    gap: 5px;
  }
  .page__logo {
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
  }
  .page-user__description-block {
    padding-right: 10px;
  }
}
@media (max-width: 360px) {
  .main-container {
    padding: 8px 12px 0;
  }
  .page-user__description {
    padding-right: 5px;
  }
  .page-user__description-block {
    padding-right: 0px;
  }
}
</style>
