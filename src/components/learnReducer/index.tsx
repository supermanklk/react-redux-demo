import React, {useReducer} from "react";
import {Button} from "antd";

function reducer(state: { num: number; }, action: { type: any }) {
    switch (action.type) {
        case 'minus':
            return Object.assign({}, state, {
                num: state.num - 1
            });
            break;
        case 'add':
            return Object.assign({}, state, {
                num: state.num + 1
            })
        default:
            return state;
    }
}

export default (props: any) => {
    // reducer 是所有hook的祖宗，并且所有的hook都是通过reducer来实现的
    // 其实reducer与我们之前redux学习的reducer是几乎差不多的
    // reducer = 数据+操作=新数据
    // 与之前redux的唯一区别就是初始化的时候要在useReducer
    // 另外平常我们单独使用reducer比较少，真正使用多的地方就是自定义reducer
    const [state, dispatch] = useReducer(reducer, {num : 0});

    return (
        <div>
            learn reducer
            state: {state.num}
            <Button onClick={() => {dispatch({type : 'minus'})}}>-1</Button>
            <Button onClick={() => {dispatch({type : 'add'})}}>+1</Button>
        </div>
    )
}