import React, {useEffect, useState} from 'react';
import {Button} from "antd";
// 学习简单的了解一下组件的卸载与内存泄漏
import ClearSetIntervalSon from './son/index';
export default function (props: any) {


    const [isShow, setIsShow] = useState(true);
    return (
        <div>
            <p>爸爸 ：clearSetInterval</p>
            <Button onClick={() =>
            {setIsShow(false)}}>让子组件的渲染消失</Button>
            {isShow
                ? <ClearSetIntervalSon/>
                : <p>消失了，但是ClearSetIntervalSon的定时器还是在跑</p>}

        </div>
    )
}