/**
 * Common Reducer
 * 关于全局的修改规则
 */

let initState = {
    showMenu: true
}
let reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case 'SHOW_MENU':
            return {
                ...state,
                showMenu: true
            }
        case 'HIDE_MENU':
            return {
                ...state,
                showMenu: false
            }

        default:
            return state;
    }
}

export default reducer;