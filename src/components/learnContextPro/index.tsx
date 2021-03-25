import React, {useEffect, useState, createContext} from 'react';
import {Button} from "antd";
import Header from './header/index';
import Footer from './footer/index';
import Body from './body/index';
import Container from './container/index';
export default function (props: any) {

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
        <div>
           <Container theme = 'dark' >
               <Header/>
               {/*Footer这块有一些精妙之处*/}
               <Footer />
               {/*<Footer theme = 'yellow'/>*/}
               <Body/>
           </Container>
        </div>

    )
}