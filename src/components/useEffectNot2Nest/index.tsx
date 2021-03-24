import React, {useEffect, useState} from 'react';
import {Button} from "antd";
// Uncaught Error: Rendered more hooks than during
// the previous render.
export default function (props: any) {

    const [ok, setOK] = useState(true);

    if(ok) {
        useEffect(() => {
            console.log(11)
        })
    } else {
        useEffect(() => {
            console.log(11)
        })
        useEffect(() => {
            console.log(11)
        },[])
    }

    return (
        <div>

            <p>useEffectNot2Nest useEffect 不能嵌套也只能写在第一层</p>
            <Button onClick={() => {setOK(false)}}>测试</Button>
        </div>
    )
}