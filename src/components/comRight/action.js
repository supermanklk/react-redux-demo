// export const ADD = "ADD";


export function reduce(state) {
    return (dispatch) => {
        dispatch({
            type : 'REDUCE',
        })
    }
}