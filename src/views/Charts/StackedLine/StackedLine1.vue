<template>
  <div class="home">
    1.補全各項圖表的使用方式 2-1.層級抓到後安排顏色級距
    <div>
      StackValuationHistory
    </div>
    <stackedLine v-if="showThis" :data="data" class="d-flex justify-center flex-wrap" />
  </div>
</template>

<script>
import stackedLine from '@/components/charts/StackedLine/stackedLine.vue'
import data from './data'

export default {
  components: {
    stackedLine
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
