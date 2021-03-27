import React from 'react';
import {useParams} from 'react-router-dom';
export default function () {
    // 拿传递的参数
    const params = useParams();
    console.log(params);
    return (
        <div>
            news
        </div>
    )

}