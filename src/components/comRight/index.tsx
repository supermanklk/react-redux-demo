import React, {Component} from 'react';
import {Button} from 'antd';
import {connect} from "react-redux";
import * as todolistActions from '../todolist/action';
import * as actions from './action';
import {bindActionCreators} from "redux";

import './index.css';
import todolist from "../todolist/reducer";
import comRight from "./reducer";

class ComRight extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        const { num } = this.props.todolistRight;
        const { add} = this.props.todoListAction;
        const { reduce} = this.props.comRightAction;
        const { num: num2 } = this.props.comRight;
        return (
            <div className="com-right">
                com-right
                {num}
                <Button onClick={add}>+2</Button>

                <Button onClick={reduce}>-1</Button>
                {num2}
            </div>
        );
    }
}


export default connect((state: any) => {
    console.log(state.todolist);
    return ({
        todolistRight: state.todolist,
        comRight: state.comRight
    })
}, (dispatch) => {
    return {
        todoListAction: bindActionCreators(todolistActions, dispatch),
        comRightAction: bindActionCreators(actions, dispatch)
    }
})(ComRight);

