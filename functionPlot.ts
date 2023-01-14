import { plot, Plot } from 'nodeplotlib';
import math, { derivative, parse, evaluate } from 'mathjs';
import { linspace, getArrayOfFx, getArrayOfFxAndDx } from './utils';

const xArray = linspace(-4,4,30,true)
const f = parse('2*x^2')
// console.log(f.compile().evaluate({x:4}))
const x = parse('x')
// console.log(derivative(f, x).evaluate({x:4}))

// const yArray = getArrayOfFx(f, xArray)
const yOfFxandDxArray = getArrayOfFxAndDx(f,x,xArray)

const dataFx: Plot= {
    x: xArray,
    y: yOfFxandDxArray.yfx,
    type: 'scatter',
  }

const dataDx: Plot={
      x: xArray,
      y: yOfFxandDxArray.ydx,
      type: 'scatter',
    }
const layout = {
    grid: {rows: 1, columns: 2, pattern: 'independent' as 'independent' | 'coupled'},
}

const data = [dataFx, dataDx]

plot(data, layout);