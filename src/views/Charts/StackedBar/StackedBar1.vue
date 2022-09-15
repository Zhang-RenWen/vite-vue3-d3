<template>
  <div class="home">
    <div>
      RectFeeHistory
    </div>
    <stackedBarWithPercentage v-if="showThis" :data="data" class="d-flex justify-center flex-wrap">
      <template slot="legend">
        <legends :data="data" :colors="['#01fc85', '#fed203']" />
      </template>
    </stackedBarWithPercentage>
    <div>
      RectNetContribution
    </div>
    <stackedBarWithNegativeValue
      v-if="showThis"
      :data="data2"
      :keys="['Single contribution', 'Recurring contribution', 'Withdrawal']"
      class="d-flex justify-center flex-wrap"
    >
      <template slot="legend">
        <legends
          :data="data2"
          :colors="['#01fc85', '#583b6c', '#1a1a1a']"
          :keys="['Single contribution', 'Recurring contribution', 'Withdrawal']"
        />
      </template>
    </stackedBarWithNegativeValue>
    <horizontalStackedBar v-if="showThis" :data="data3" />
  </div>
</template>

<script>
import legends from '@/components/charts/legends/legendsName.vue'
import stackedBarWithPercentage from '@/components/charts/StackedBar/stackedBarWithPercentage.vue'
import stackedBarWithNegativeValue from '@/components/charts/StackedBar/stackedBarWithNegativeValue.vue'
import horizontalStackedBar from '@/components/charts/StackedBar/horizontalStackedBar.vue'
import data from './data'
import data2 from './data2'
import data3 from './data3'

export default {
  components: {
    legends,
    stackedBarWithPercentage,
    stackedBarWithNegativeValue,
    horizontalStackedBar
  },

  data() {
    return {
      data,
      data2,
      data3,
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
