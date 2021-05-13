import React, {useState, useEffect} from 'react';
//
// export default function() {
//
//     const [count, setCount] = useState(0);
//     // 该问题是一个闭包陷阱
//     // https://blog.csdn.net/yanzi_0216/article/details/115346156
//     useEffect(() => {
//         let timer = setInterval(() => {
//             setCount(count + 1);
//         }, 1000);
//         return () => {
//             clearInterval(timer);
//         }
//     }, [count]);
//
//     return (
//         <div>
//             定时器的问题
//             {count}
//         </div>
//     )
// }


export default  function () {
    const [count, setCount] = useState(0);

    function handleClickAsync() {

        setTimeout(function delay() {
            console.log('hei');
            setCount(count + 1);
        }, 1000);
    }

    function handleClickSync() {

        setCount(count + 1);
    }

    return (

        <div>
            {count}
            <button onClick={handleClickAsync}>Increase async</button>
            <button onClick={handleClickSync}>Increase sync</button>
        </div>
    );
}