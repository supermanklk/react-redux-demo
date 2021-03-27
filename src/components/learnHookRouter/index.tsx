import React from 'react';
import {useHistory, Switch, Link, Route} from 'react-router-dom';
import {Button} from "antd";

import Favorite from './favorite/index';
import Music from './music/index';
import News from './news/index';
// router:
// 1、useHistory history事例-操作集合go goBack goForward listen push replace
// 2、useLocation 各种信息-path、query、params
// 3、useParams params的事例-路由参数
// 4、useRouteMatch 提取路由信息（不跳转）

export default function () {
    const history = useHistory();

    console.log(history);
    return (
        <div>
            <Link to = "/news/1232">新闻</Link>
            <Link to = "/music">音乐</Link>
            <Link to = "/favorite">爱好</Link>
            {/*learn hook router*/}
            {/*<Button onClick={() => {history.push('/news')}}>跳转</Button>*/}
            {/*   点击按钮跳转url就会变化  http://localhost:3000/news*/}
            <Switch>
                <Route path = "/news/:id" component = {News} />
                <Route path = "/music" component = {Music} />
                <Route path = "/favorite" component = {Favorite} />
            </Switch>

        </div>
    )
}
