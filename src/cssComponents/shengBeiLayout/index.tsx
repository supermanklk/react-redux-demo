import React from 'react';
import './index.css';
export default function () {
    return (
        <>
            <div className="header">头部</div>
            <div className="main clearfix">
                <div className="center">中间自适应</div>
                {/*因为相对来说，center中为主要内容，所以写前边，这样也有利于SEO*/}
                <div className="left">左列定宽</div>
                <div className="right">右列定宽</div>
            </div>
            <div className="footer">底部</div>
        </>
    )
}
//https://zhuanlan.zhihu.com/p/58355168 参考