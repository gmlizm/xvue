import { setStore, getStore, removeStore } from '@/util/store'
const tagObj = {
    label: '',
    value: '',
    query: '',
    num: '',
    close: true,
}

function setFistTag(list) {
    list.forEach((e, num) => {
        e.close = num>0;
    });
    return list;
}
const navs = {
    state: {
        tagList: getStore({ name: 'tagList' }) || [],
        tag: getStore({ name: 'tag' }) || tagObj,
        tagWel: {
            label: "首页",
            value: "/wel/index",
            close: false
        },
        tagCurrent: getStore({ name: 'tagCurrent' }) || [],
    },
    actions: {

    },
    mutations: {
        ADD_TAG: (state, action) => {
            state.tag = action;
            setStore({ name: 'tag', content: state.tag, type: 'session' })
            if (state.tagList.some(a => a.value === action.value)) return
            state.tagList.push({
                label: action.label,
                value: action.value,
                query: action.query,
            })
            state.tagList = setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
            state.tagWel.close = false
        },
        SET_TAG_CURRENT: (state, tagCurrent) => {
            state.tagCurrent = tagCurrent;
            setStore({ name: 'tagCurrent', content: state.tagCurrent, type: 'session' })
            state.tagWel.close = false
        },
        SET_TAG: (state, value) => {
            state.tagList.forEach((ele, num) => {
                if (ele.value === value) {
                    state.tag = state.tagList[num];
                    setStore({ name: 'tag', content: state.tag, type: 'session' })
                }
            });
            state.tagWel.close = false
        },
        DEL_ALL_TAG: (state, action) => {
            state.tag = state.tagWel;
            state.tagList = [];
            state.tagList.push(state.tagWel);
            state.tagList[0].close = false;
            removeStore({ name: 'tag' });
            removeStore({ name: 'tagList' });
            state.tagWel.close = false;
        },
        DEL_TAG_OTHER: (state, action) => {
            state.tagList.forEach((ele, num) => {
                if (ele.value === state.tag.value) {
                    state.tagList = state.tagList.slice(num, num + 1)
                    state.tag = state.tagList[0];
                    if(ele.value != state.tagWel.value){
                        state.tagList.unshift(state.tagWel)
                    }
                    setStore({ name: 'tag', content: state.tag, type: 'session' })
                    setStore({ name: 'tagList', content: state.tagList, type: 'session' })
                }
            })
            state.tagWel.close = false
        },
        DEL_TAG: (state, action) => {
            state.tagList.forEach((ele, num) => {
                if (ele.value === action.value) {
                    state.tagList.splice(num, 1)
                    state.tagList = setFistTag(state.tagList);
                    setStore({ name: 'tag', content: state.tag, type: 'session' })
                    setStore({ name: 'tagList', content: state.tagList, type: 'session' })
                }
            })
            state.tagWel.close = false
        },
    }
}
export default navs