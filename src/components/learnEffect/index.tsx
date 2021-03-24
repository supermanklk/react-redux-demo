import React, {useEffect, useState} from 'react';
import {Button} from "antd";
// 学习简单的了解一下hook的生命周期
// bailing out ： 当你设置了一样的state的时候，
// react只会执行一下这个函数组件，但不会真正的渲染 ，也不会触发effect。
export default function (props: any) {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        console.log('aaa');
        setA(99);
    }, [a]);

    useEffect(() => {
        console.log(b);
    }, [b]);

    useEffect(() => {
        console.log('hei');
    },[])

    useEffect(() => {
        console.log('you')
    })

    console.log('这猜这是什么？');

    return (
        <div>
            a: <Button onClick = {() => {setA(a + 1)}}>{a}</Button>
            b: <Button onClick = {() => {setB(b + 1)}}>{b}</Button>
        </div>
    )
}