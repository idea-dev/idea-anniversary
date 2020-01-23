import * as d3 from 'd3';
import { random } from 'lodash';

/**
 * Injects bubble chart to given ref.
 */
const injectBubbleChart = (ref, data) => {
  const dataset = {
    children: data,
  };

  const diameter = 700;
  const colors = [
    '#1B9AD1',
    '#E97A24',
    '#E0A379',
    '#E87825',
    '#2579A6',
    '#9CC6E6',
  ];

  const getColor = (i) => {
    const index = i % (colors.length - 1);
    return colors[index];
  };

  const bubble = d3
    .pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

  const svg = d3
    .select(ref)
    .append('svg')
    .attr('width', diameter)
    .attr('height', diameter);

  const nodes = d3.hierarchy(dataset).sum(function(d) {
    return d.percentage;
  });

  const node = svg
    .selectAll('.node')
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function(d) {
      return !d.children;
    })
    .append('g')
    .attr('class', 'node')
    .attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });

  node
    .append('circle')
    .attr('r', function(d) {
      return d.r - 10;
    })
    .style('fill', function(d, i) {
      return getColor(i);
    });

  node
    .append('text')
    .attr('dy', '30px')
    .style('text-anchor', 'middle')
    .text(function(d) {
      return d.data.name;
    })
    .attr('fill', 'white');

  node
    .append('text')
    .style('text-anchor', 'middle')
    .style('font-size', function(d) {
      return Math.max(d.r / 3, 18);
    })
    .text(function(d) {
      return `${d.data.percentage}%`;
    })
    .attr('fill', 'white');

  return svg.node();
};

export default injectBubbleChart;
