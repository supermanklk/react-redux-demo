// export const ADD = "ADD";

export function add(state) {
    return (dispatch) => {
        dispatch({
            type : 'ADD',
        })
    }
}