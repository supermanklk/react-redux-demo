import React, {useState, memo} from 'react';
import {Button} from "antd";
// rsc


// 如果是常规写法没有被包裹 memo，那么每次都会被重新渲染
// const DemoA = (props: any) => {
//     console.log('渲染a');
//     return (
//         <div>demoA</div>
//     )
// }

// pure  = [piu er]

// 用memo把hooks包裹即可
const DemoA = memo((props: any) => {
    console.log('渲染a');
    return (
        <div>demoA</div>
    )
})

const DemoB = memo((props: any) => {
    console.log('渲染b');
    return (
        <div>demoB</div>
    )
})


const PerformanceOptimizationHooks = (props: any) => {
    const [a, setA] = useState(0);
    return (
        <div>
            PerformanceOptimizationHooks {a}
            <Button onClick={() => {setA(pre => pre + 1)}}>点击button</Button>
            <DemoA/>
            <DemoB/>
        </div>
    );
};
export default PerformanceOptimizationHooks;