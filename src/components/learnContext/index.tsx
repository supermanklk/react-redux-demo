import React, {useEffect, useState, createContext} from 'react';
import {Button} from "antd";
import Header from './header/index';
import Footer from './footer/index';
import Body from './body/index';
import Theme from './libs/theme';
export default function (props: any) {
    // 这个content上下文其实平常用的不多，用的比较多的是ui组件库。
    // 比如自己写一个ui组件库的时候就会经常用到。
    const [color, setColor] = useState('dark');

    useEffect(() => {
        let timer = setTimeout(() => {
            setColor('green');
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        // 这样写太麻烦了
        // <div theme = "dark">
        //     <Header theme = "dark"/>
        //     <Body theme = "dark"/>
        //     <Footer theme = "dark"/>
        // </div>
        // 我们希望的是，只在外面加一个。其他地方都能继承。
        // <div theme = "dark">
        //     <Header />
        //     <Body />
        //     <Footer />
        // </div>
        // 以上的问题我们就可以通过上下文来解决这个问题
        // 1、父级：定义上下文 - createContext
        // 2、子级：读取上下文 - useContext

        // <div>
        //     <Theme.Provider value = "light">
        //         <Header />
        //         <Body />
        //         <Footer />
        //     </Theme.Provider>
        // </div>

        // 这样没有写Theme.Provider的时候就是使用的默认值 dark
        // <div>
        //     <Header />
        //     <Body />
        //     <Footer />
        // </div>

        // 也可以是变量
    <div>
        <Theme.Provider value = {color}>
            <Header />
            <Body />
            <Footer />
        </Theme.Provider>
    </div>



    )
}