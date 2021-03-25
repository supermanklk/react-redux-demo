import React, {useEffect, useState, createContext, useContext} from 'react';
import Theme from '../libs/theme';
export default function (props: any) {
    const theme = useContext(Theme);
    return (
        <div>
            footer的主题:{theme}
        </div>
    )
}