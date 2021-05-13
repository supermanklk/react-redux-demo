import React, {useState} from 'react';

const SetStateAndUseStateReceiveFc = (props: any) => {

    const [count, setCount] = useState(0);
    function handleClick() {
        setTimeout(() => {
            setCount(count + 1)
        }, 3000);
    }


    function handleClickFn() {
        setTimeout(() => {
            setCount((prevCount) => {
                return prevCount + 1
            })
        }, 3000);
    }

    return (
        <>
            SetStateAndUseStateReceiveFc
            Count: {count}
            <button onClick={handleClick}>+</button>
            <button onClick={handleClickFn}>+</button>
        </>
    );

};

export default SetStateAndUseStateReceiveFc;
