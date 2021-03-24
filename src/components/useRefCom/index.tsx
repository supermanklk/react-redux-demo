import React, {useEffect, useState, useRef, forwardRef} from 'react';
import {Input, Button} from "antd";
// 学习useRef
export default function (props: any) {



    const Child = forwardRef((props, ref) => {
        useEffect(() => {
            console.log('儿子的effect');
        })
        // @ts-ignore
        return (<div ref = {ref}>
            son
        </div>)
    })

    // Function components cannot be given refs.
    // Attempts to access this ref will fail. Did you mean to use React.forwardRef()
    // const Child = (() => {
    //     useEffect(() => {
    //         console.log('儿子的effect');
    //     })
    //     // @ts-ignore
    //     return (<div ref = {ref}>
    //         son
    //     </div>)
    // })

    const ref = useRef(null);
    const refSon = useRef(null);
    return (
        <div>
            {/*自身的ref*/}
            useRef
            <Input type="text" ref={ref} />
            <Button onClick={() => {
                // @ts-ignore
                // console.log(ref.current.state.value);
                console.log(refSon);
            }}>按钮</Button>


            {/*class <Com1>  new Com 事例化 但是目前函数组件不能够被事例化*/}
            {/*传递引用*/}
            {/*控制其他的组件*/}
            {/*forwardRef*/}
            {/*函数组件不具备实例的概念的。 因此函数组件默认情况下不能被引用的
            。但是forWordRef能够帮助我们做到这一点，它能够让你指定一个ref。*/}
            {/*用途：*/}
            {/*1、希望自己的函数组件能被人ref*/}
            {/*useRef是16.8 出的，那么在16.8之前不推荐使用字符串的ref的时候就用
             createRef来代替。*/}
            {/*其实createRef = (element) => {this.a = element}
            与 useRef 是一摸一样的。 并且都有一个current这个属性。*/}
            {/*forwardRef，它是react16新增的方法，返回react组件。*/}
            <Child  ref = {refSon}/>
        </div>
    )
}