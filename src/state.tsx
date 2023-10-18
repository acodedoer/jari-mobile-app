import {proxy} from "valtio";

export const state = proxy({
    screen:0,
    tagView:false,
    sayingsIndex:0,
    selectedTag: "",
    tagSayings:[],
    sayings:[],
    tags:[]
})

export const setScreen = (val:number) => {
    state.screen = val;
}

export const setSayingsIndex = (val:number) => {
    state.sayingsIndex = val;
}

export const setSelectedTag= (tag:string) => {
    state.selectedTag = tag;
}

export const setSayings = (data:any) => {
    state.sayings = data;
}

export const setTagSayings = (tag:any) => {
    let temp = JSON.parse(JSON.stringify(state.sayings));
    temp = temp.filter((el:any) => el.tags.includes(tag));
    state.tagSayings = temp;
}

export const setTags = (data:any) => {
    state.tags = data;
}

export const setTagView = (val:boolean) => {
    state.tagView = val;
}

