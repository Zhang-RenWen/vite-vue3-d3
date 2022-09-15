<template>
  <div class="home">
    https://stackoverflow.com/questions/20913869/wrap-text-within-circle
    <div>
      pie
    </div>
    <button @click="insert">insert</button>
    <button @click="refresh">refresh</button>
    <pie
      v-if="showThis"
      ref="pie1"
      :data="data"
      center-info-display
      :center-info-option="centerInfoOption"
    >
      <template slot="legend">
        <legends :data="data" />
      </template>
    </pie>
  </div>
</template>

<script>
import pie from '@/components/charts/Pie/pie.vue'
import legends from '@/components/charts/legends/legendsPercentage.vue'

export default {
  components: {
    pie,
    legends
  },

  data() {
    return {
      showThis: false,
      data: [],
      data2: [],
      centerInfoOption: {
        circleScale: 0.8,
        circleBackground: '#0b001c',
        fontSize: 12,
        color: '#ffffff',
        text: 'text here !'
      }
    }
  },

  mounted() {
    const vm = this
    setTimeout(() => {
      vm.showThis = true
      vm.data = [
        { color: '#16a951', name: 'Equity', value: '7.02' },
        { color: '#21a675', name: 'Mixed Assets', value: '69.08' },
        { color: '#0c8918', name: 'Cash', value: '23.9' }
      ]
    }, 100)
    setTimeout(() => {
      vm.showThis = true
      vm.data2 = [
        {
          name: 'a',
          value: '10.00',
          color: '#E63231'
        },
        {
          name: 'b',
          value: '10.00',
          color: '#8F2127'
        },
        {
          name: 'c',
          value: '10.00',
          color: '#AE0057'
        },
        {
          name: 'd',
          value: '10.00',
          color: '#922E8E'
        }
      ]
    }, 100)
  },

  methods: {
    insert() {
      const vm = this
      vm.data.push({
        name: 'f',
        value: 1,
        color: '#E4D353'
      })
    },

    refresh() {
      const vm = this
      vm.data = vm.data2
      this.$nextTick(() => {
        this.$refs.pie1.init()
      })
    }
  }
}
</script>
