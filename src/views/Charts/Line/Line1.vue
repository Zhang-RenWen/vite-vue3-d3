<template>
  <div class="home">
    1.補全各項圖表的使用方式 2-1.層級抓到後安排顏色級距
    <div>
      linePerformance
    </div>
    <positiveNegativeLine v-if="showThis" :data="data" class="d-flex justify-center flex-wrap" />
  </div>
</template>

<script>
import positiveNegativeLine from '@/components/charts/Line/positiveNegativeLine.vue'
import data from './data'

export default {
  components: {
    positiveNegativeLine
  },

  data() {
    return {
      data,
      showThis: false
    }
  },

  mounted() {
    const vm = this
    setTimeout(() => {
      vm.showThis = true
    })
  },

  methods: {}
}
</script>
