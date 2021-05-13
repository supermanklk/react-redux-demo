import React from 'react';
import './index.css';
// 双飞翼布局与圣杯布局得到的效果是一样的只不过他们实现的逻辑不一样
// 双飞翼布局是圣杯布局的优化版本 其实在content内增加了一个inner div 让inner div的margin-left margin-right设置了得到效果
// 而圣杯布局是通过content的margin-left margin-right 然后left div 的left -200px  right div的right -300px
export default function () {
    return (
        <>
            <div className="header">头部</div>
            <div className="main clearfix">
                <div className="center">
                    <div className="inner">
                        中间自适应
                    </div>
                </div>
                {/*因为相对来说，center中为主要内容，所以写前边，这样也有利于SEO*/}
                <div className="left">左列定宽</div>
                <div className="right">右列定宽</div>
            </div>
            <div className="footer">底部</div>
        </>
    )
}
//https://zhuanlan.zhihu.com/p/58355168 参考