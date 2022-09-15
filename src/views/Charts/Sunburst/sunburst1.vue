<template>
  <div class="sunburst1">
    {{ data }}
  </div>
</template>

<script>
// import * as d3 from 'd3'
import data from './data'
export default {
  components: {},
  props: {},
  data() {
    return {
      data
    }
  },

  // mounted() {
  //   const colors = ['#a03271', '#3e588f', '#dbbf0d', '#38c4c3', '#814906', '#08829c']

  //   // function filter_min_arc_value_text(d, i) {return (d.dx*d.depth*radius/3)>5};

  //   const diameter = 600, // 總長
  //     radius = diameter / 2, // 半徑
  //     margin = 0 // 邊界

  //   const x = d3.scale.linear().range([0, 2 * Math.PI])

  //   const y = d3.scale
  //     .linear()
  //     .range([0, radius])

  //     // const u = d3.scale
  //     .pow()
  //     .exponent(1.3)
  //     .domain([0, 1])
  //     .range([0, radius])

  //   // const padding = 5,
  //   //   duration = 1000

  //   // const color = d3.scale.category20c()

  //   const svg = d3
  //     .select('body')
  //     .append('svg')
  //     .attr('width', diameter - margin)
  //     .attr('height', diameter - margin)
  //     .append('g')
  //     .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')')

  //   const partition = d3.layout.partition().value(function(d) {
  //     return d.value
  //   })

  //   const arc = d3.svg
  //     .arc()
  //     .startAngle(function(d) {
  //       return Math.max(0, Math.min(2 * Math.PI, x(d.x)))
  //     })
  //     .endAngle(function(d) {
  //       return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)))
  //     })
  //     .innerRadius(function(d) {
  //       return Math.max(0, y(d.y))
  //     })
  //     .outerRadius(function(d) {
  //       return Math.max(0, y(d.y + d.dy))
  //     })

  //   const nodes = partition.nodes(this.data)
  //   const g = svg
  //     .selectAll('g')
  //     .data(nodes)
  //     .enter()
  //     .append('g')
  //   const path = g
  //     .append('path')
  //     .attr('id', function(d, i) {
  //       return 'path-' + i
  //     })
  //     .attr('d', arc)
  //     .style('fill', function(d) {
  //       return d.parent ? colors[d.id - 1] : '#FFF'
  //     })
  //     .on('click', click)
  //     .on('mouseover', mouseOverArc)
  //     .on('mousemove', mouseMoveArc)
  //     .on('mouseout', mouseOutArc)

  //   const text = g
  //     .append('text')
  //     // .filter(filter_min_arc_value_text)
  //     .attr('text-anchor', function(d) {
  //       return d.x + d.dx / 2 > Math.PI ? 'end' : 'start'
  //     })
  //     .attr('transform', function(d) {
  //       return 'rotate(' + computeTextRotation(d) + ')'
  //       /* const multiline = (d.name || "").split(" ").length > 1,
  //                   angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90,
  //                   rotate = angle + (multiline ? -.5 : 0);
  //               return "rotate(" + rotate + ")translate(" + (y(d.y) + 10) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
  //               */
  //     })
  //     .attr('x', function(d) {
  //       return y(d.y)
  //     })
  //     .attr('dx', '6') // margin
  //     .attr('dy', '.35em') // vertical-align
  //     .text(function(d) {
  //       return d.parent ? d.name : null
  //     })
  //     .on('click', click)
  //     .on('mouseover', mouseOverArc)
  //     .on('mousemove', mouseMoveArc)
  //     .on('mouseout', mouseOutArc)

  //   // Tooltip description
  //   const tooltip = d3
  //     .select('body')
  //     .append('div')
  //     .attr('id', 'tooltip')
  //     .attr('class', 'd3-chart-tooltip')

  //   function format_number(x) {
  //     return '$ ' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  //   }

  //   function format_description(d) {
  //     // const description = d.description
  //     return '<b>' + d.name + '</b></br>' + format_number(d.value)
  //   }

  //   function mouseOverArc(d) {
  //     // d3.select(this).attr("stroke","black")

  //     tooltip.html(format_description(d))
  //     return tooltip
  //       .transition()
  //       .duration(50)
  //       .style('opacity', 0.9)
  //   }

  //   function mouseOutArc() {
  //     d3.select(this).attr('stroke', '')
  //     return tooltip.style('opacity', 0)
  //   }

  //   function mouseMoveArc() {
  //     return tooltip
  //       .style('top', d3.event.pageY - 10 + 'px')
  //       .style('left', d3.event.pageX + 10 + 'px')
  //   }
  //   function click(d) {
  //     // fade out all text elements
  //     text.transition().attr('opacity', 0)

  //     path
  //       .transition()
  //       .duration(750)
  //       .attrTween('d', arcTween(d))
  //       .each('end', function(e) {
  //         // check if the animated element's data e lies within the visible angle span given in d
  //         if (e.x >= d.x && e.x < d.x + d.dx) {
  //           // get a selection of the associated text element
  //           const arcText = d3.select(this.parentNode).select('text')
  //           // .filter(filter_min_arc_value_text)  ;
  //           // fade in the text element and recalculate positions
  //           arcText
  //             .transition()
  //             .duration(750)
  //             .attr('opacity', 1)
  //             .attr('transform', function(d) {
  //               return 'rotate(' + computeTextRotation(d) + ')'
  //             })
  //             .attr('x', function(d) {
  //               return y(d.y)
  //             })
  //         }
  //       })
  //   }

  //   d3.select(self.frameElement).style('height', diameter + 'px')

  //   // Interpolate the scales!
  //   function arcTween(d) {
  //     const xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
  //       yd = d3.interpolate(y.domain(), [d.y, 1]),
  //       yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius])
  //     return function(d, i) {
  //       return i
  //         ? function() {
  //             return arc(d)
  //           }
  //         : function(t) {
  //             x.domain(xd(t))
  //             y.domain(yd(t)).range(yr(t))
  //             return arc(d)
  //           }
  //     }
  //   }

  //   function computeTextRotation(d) {
  //     const rotation = ((x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI) * 180
  //     return rotation // > 90 ? rotation - 180 : rotation;
  //   }
  // },

  methods: {}
}
</script>

<style lang="scss">
.sunburst1 {
  path {
    stroke: #fff;
    fill-rule: evenodd;
  }

  text {
    font-family: Helvetica, sans-serif;
    fill: #fff;
  }

  text:hover,
  path:hover {
    cursor: pointer;
  }

  .d3-chart-tooltip {
    position: absolute;
    padding: 20px 20px;
    background: #f7f7f7;
    border: 5px solid #999;
    border-radius: 10px;
    color: #000;
    min-width: 100px;
    z-index: 1;
    text-align: center;
    font-family: Helvetica, sans-serif;
  }
}
</style>
