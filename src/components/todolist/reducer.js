import * as actions from './action';
const initState = {
    num : 0,
    name: 'bin',
    age: 100
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {
                num : state.num + 1
            })
        default:
            return state;
    }
}




