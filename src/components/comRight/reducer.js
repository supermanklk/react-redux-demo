import * as actions from './action';
const initState = {
    num : 999,
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'REDUCE':
            return Object.assign({}, state, {
                num : state.num - 1
            })
        default:
            return state;
    }
}




