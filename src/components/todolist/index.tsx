import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './action';
import  './index.css';

class TodoList extends React.Component<any, any> {

    render() {
        console.log(this.props);
        const { num } = this.props.bin;
        return (
            <div className="com-a">
                <p>A组件</p>
                <button onClick={this.props.todoList.add} >+1</button>
                <p>store拿的值: <span style={{fontSize : '20px'}}>{num}</span> </p>
            </div>

        );
    }
}

export default connect((state:any) => {
    return ({
        bin: state.todolist
    })
}, (dispatch) => {
    return ({
        todoList: bindActionCreators(actions, dispatch)
    })

})
(TodoList);
