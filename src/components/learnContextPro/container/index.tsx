import React, {useEffect, useState, createContext, useContext} from 'react';
import Theme from '../libs/theme';
export default function (props: any) {
const {theme = 'light'} = props;
    return (
        <Theme.Provider value = {theme}>
            {props.children}
        </Theme.Provider>

    )
}