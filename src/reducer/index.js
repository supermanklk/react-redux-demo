import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import todolist from "../components/todolist/reducer";

import comRight from "../components/comRight/reducer";

const rootReducer = combineReducers({
    //在这里导入每个模块的reducer
    todolist,
    comRight,
    routing: routerReducer
})

export default rootReducer
