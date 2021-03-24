import React, {useEffect, useState} from 'react';
import {Button} from "antd";
// useEffect的基本用法
export default function (props: any) {

    // 状态，在渲染的过程中一定要保持稳定。因此setstate为什么是异步的，
    // 是统一在下一次的渲染时候生效。
    // hook根据顺序有关。
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        console.log('模拟didMount')
    }, [222]);

    useEffect(() => {
        console.log('模拟didMount')
    }, []);


    useEffect(() => {
        console.log('模拟didMount a 或者 b变了')
    }, [a, b]);




    return (
        <div>
            a:{a} &nbsp;&nbsp;&nbsp; b:{b}
            <Button onClick={() => {setA(a + 1)}}>a按钮</Button>
            <Button onClick={() => {setB(b + 1)}}>b按钮</Button>
        </div>
    )
}