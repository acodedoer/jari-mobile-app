import {proxy} from "valtio";

export const state = proxy({
    screen:0
})

export const setScreen = (val:number) => {
    state.screen = val;
}