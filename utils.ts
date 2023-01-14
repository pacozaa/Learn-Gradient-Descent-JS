import math, { derivative, evaluate } from "mathjs";

type YFxDx = {
    yfx: number[];
    ydx: number[];
}
export const linspace=(start: number, stop: number, num: number, endpoint = true)=> {
    const div = endpoint ? (num - 1) : num;
    const step = (stop - start) / div;
    return Array.from({length: num}, (_, i) => start + step * i);
}
// Note: getArrayOfFx and getArrayOfDx can combine to one function and return { fx, dx}
export const getArrayOfFx=(fx: math.MathNode, xArray: number[]): number[]=>{
    return xArray.map((value)=>{
        return fx.compile().evaluate({x: value})
    })
}

export const getArrayOfFxAndDx=(f: math.MathNode, x: math.MathNode, xArray: number[]) =>{
    const yfx: number[] = xArray.map((value: number)=>{
        return f.compile().evaluate({x: value})
    })
        

    const ydx: number[] = xArray.map((value: number)=>{
        return derivative(f, x).evaluate({x: value})
    })

    return {
        yfx,
        ydx
    } as YFxDx
}