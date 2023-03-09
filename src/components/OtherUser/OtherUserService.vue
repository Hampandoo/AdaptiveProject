<script setup>
import axios from "axios";
import {defineProps, onMounted} from "vue"

const props = defineProps({
  totalValue: {
    type: Number,
    default: 0
  },
  services: {
    type: Array,
    default: []
  },
  progressBarSize: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <section class="page-services__container">
    <div class="page-services__text">
      <span>Services</span>
    </div>
    <hr />
    <ul class="page-services__rank">
      <li v-for="(item, idx) in props.services" class="page-services__rank-block">
        <div class="page-services__rank-text_position">
          <p class="page-services__rank-text rank-text-1">
            {{item.name}}
            <!-- Progressive bar with width from progressBarSize prop. It can be incapsulated to separate component, if bar will be used in other pages/components -->
            <span class="page-services__rank-bar" :style="{width: `${props.progressBarSize[idx]}%`, backgroundColor: `${idx == 0 ? '#B1E19B' : '#ACE2F8'}`}"></span>
          </p>
        </div>
        <div class="page-services__rank-text_bold_position">
          <p class="page-services__rank-text_bold">{{item.value}}</p>
        </div>
      </li>
    </ul>
    <hr />
    <div class="page-services__total">
      <span class="page-services__rank-text total">Total</span>
      <span class="page-services__rank-text_bold total">{{props.totalValue}}</span>
    </div>
  </section>
</template>

<style scoped>
.page-services__container {
  display: flex;
  flex-direction: column;
  margin-left: 128px;
}
.page-services__text {
  display: flex;
  justify-content: end;
  margin-right: 26px;
  margin-bottom: 8px;
}
.page-services__text span {
  font-size: 13px;
  line-height: 1.15;
}
.page-services__rank {
  padding-top: 16px;
  padding-bottom: 16px;
}
.page-services__rank-block {
  display: flex;
  align-items: center;
}
.page-services__rank-text {
  position: relative;
  font-size: 13px;
  line-height: 2;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 0px 3px 3px 0px;
  padding-left: 6px;
  padding-right: 6px;
}
.page-services__rank-text_position {
  flex: 1 1 auto;
}
.page-services__rank-text_bold {
  font-size: 13px;
  line-height: 1.15;
  font-weight: 700;
  margin-right: 28px;
  padding-right: 3px;
  padding-left: 3px;
}
.page-services__rank-text_bold_position {
  display: flex;
  justify-content: end;
  flex: 0 0 100px;
}
.page-services__rank-bar {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0px;
  z-index: -1;
  border-radius: 0px 3px 3px 0px;
  background-color: #ACE2F8;
  /* background-color: #B1E19B; */
}

.page-services__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.total {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  padding-left: 0px;
}

@media (max-width: 479.98px) {
  .page-services__text {
    margin-top: 8px;
  }
  .page-services__container {
    margin-left: 0px;
  }
  .page-services__rank-text_bold_position {
    flex: 0 0 70px
  }
}
</style>
