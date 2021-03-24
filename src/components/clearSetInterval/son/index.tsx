import React, {useEffect} from 'react';
// 学习简单的了解一下组件的卸载与内存泄漏
export default function (props: any) {
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(1);
        }, 500)

        return () => {
            console.log('组件卸载时候将定时器或者订阅撤销');
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            clearSetInterval son
        </div>
    )
}