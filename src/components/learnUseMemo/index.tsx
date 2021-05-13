import React, {useReducer, useState, useMemo, memo} from "react";
import {Button} from "antd";

const Demo = memo((props: any) => {
    console.log('渲染了demo', props);
    return (
        <div>demo1</div>
    )
})

export default (props: any) => {

    const [num, setNum] = useState(0);
    let obj = useMemo(() => {
        return [];
    }, [])
    return (
        <div>
            {num}
            <br/>
            <Button onClick={() => {setNum(num + 1)}}>+1</Button>
            {/*useCallback缓存函数的引用，useMemo缓存计算数据的值。*/}
            {/*我们这边穿了一个引用类型的变量 如果没有使用 useMemo，那么这个obj其实是一直在被重新定义，所以页面一直在渲染*/}
            {/*useMemo就是缓存我们的数据的 我们能够自己控制当某个条件符合时，在渲染子组件*/}
            learn learnUseMemo
            <Demo data = {obj}/>
        </div>
    )
}