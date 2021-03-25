import React, {useEffect, useState} from "react";


// step1
// 验证了所有的hook只能在第一级调用或者在自定义的就hook内调用
// React Hook "useState" is called in function "show" that is neither a React function component
// function show() {
//     const [a, setA] = useState(0);
//     return a;
// }

// function useShow() {
//     const [a, setA] = useState(0);
//     return a;
// }

function useNetworkStatus() {
    const [online, setOnline] = useState(navigator.onLine);

    const onlineFalse = () => {
        setOnline(false);
    }

    const onlineTrue = () => {
        setOnline(true);
    }

    useEffect(() => {
        window.addEventListener('online', onlineTrue);

        window.addEventListener('offline', onlineFalse);

        return () => {
            window.removeEventListener('online', onlineTrue);
            window.removeEventListener('offline', onlineFalse);
        }
    },[]);

    return online;
}

export default function (props: any) {
    // 1、自定义hook肯定是以use开头
    // 2、所有的hook只能在fc或者在自定义的就hook内调用

    // step1
    // React Hook "useState" is called in function "show" that is neither a React function component
    // nor a custom React Hook function. React component names must start with an uppercase
    // const a = show();
    // 因此换成 useShow 是ok的
    // const a = useShow();
    // 其实就是一个普通的函数，只不过带了use 并且能够内部使用hook

    // 知识点：事件 online offline 是否有网络； navigator.onLine 当前网络状态；


    // 现在写一个监听网络状态的自定义hook
    const online = useNetworkStatus();
    return (
        <div>
            自定义hook
            {online ?
                    (<div style={{color : 'green'}}>有网络</div>)
                    :
                    (<div style={{color : 'red'}}>断网</div>) }
        </div>
    )
}