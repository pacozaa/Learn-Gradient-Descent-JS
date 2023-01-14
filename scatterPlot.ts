import { plot, Plot } from 'nodeplotlib';
import { floating } from 'chance';

floating();
const data: Plot[] = [
  {
    x: [1, 3, 4, 5],
    y: [3, 12, 1, 4],
    type: 'scatter',
  },
];

plot(data);