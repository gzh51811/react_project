/**
 * Action creator
 */

//  编写常量，用于规范type
export const SHOW_MENU = 'SHOW_MENU'
export const HIDE_MENU = 'HIDE_MENU'

export function show() {
    return {
        type: SHOW_MENU,
        payload: "block"
    }
}
export function hide() {
    return {
        type: HIDE_MENU,
        payload: "block"
    }
}



export default {
    show,
    hide
}