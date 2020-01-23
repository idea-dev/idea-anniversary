import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import * as d3 from 'd3';

import injectBubbleChart from './chart';
import styles from './styles.css';

const BubbleChart = ({ className, data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      injectBubbleChart(d3Container.current, data);
    }
  }, []);

  return (
    <div className={cn(styles.bubbleChart, className)} ref={d3Container} />
  );
};

export default BubbleChart;
