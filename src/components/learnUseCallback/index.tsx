import React, {useCallback, useReducer, useRef, useState} from "react";
import {Button} from "antd";

export default (props: any) => {

    // 自定义hook
    const usePreProps = (value: () => void) => {
        const ref = useRef();
        React.useEffect(() => {
            // @ts-ignore
            ref.current = value;
        });
        return ref.current;
    }

    // const [count, setCount] = useState(0);
    // const [total, setTotal] = useState(0);
    // const handleCount = () => setCount(count + 1);
    // const handleTotal = () => setTotal(total + 1);
    // const prevHandleCount = usePreProps(handleCount);
    // console.log('两次处理函数是否相等：', prevHandleCount === handleCount);


    // 我们这里使用了 useCallback 来缓存了函数
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const handleCount = useCallback(() => setCount(count + 1),[]);
    const handleTotal = () => setTotal(total + 1);
    const prevHandleCount = usePreProps(handleCount);
    console.log('两次处理函数是否相等：', prevHandleCount === handleCount);


    {/*useCallback缓存函数的引用，useMemo缓存计算数据的值。*/}
    return (
        <div>
            learn useCallback
            <div>Count is {count}</div>
            <div>Total is {total}</div>
            <br/>
            <div>
                <button onClick={handleCount}>Increment Count</button>
                <button onClick={handleTotal}>Increment Total</button>
            </div>
        </div>
    )
}