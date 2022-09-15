<template>
  <div class="home">
    1.補全各項圖表的使用方式 2-1.層級抓到後安排顏色級距
    <div>BarPerformance</div>
    <verticalBar
      v-if="showThis"
      :data="data"
      :axis="{ xAxisTimeFormat: '%y / %m' }"
      class="d-flex justify-center flex-wrap"
    />
    <verticalBar
      v-if="showThis"
      :data="data"
      :axis="{ axisType: 'every' }"
      class="d-flex justify-center flex-wrap"
    />
  </div>
</template>

<script>
import verticalBar from "@/components/charts/Bar/verticalBar.vue";
import data from "./data";

export default {
  components: {
    verticalBar,
  },

  data() {
    return {
      data,
      showThis: false,
    };
  },

  mounted() {
    const vm = this;
    setTimeout(() => {
      vm.showThis = true;
    });
  },

  methods: {},
};
</script>
