import Vue from 'vue'
import Vuex from 'vuex'

import {update} from '../api/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        status: 0
    },
    mutations: {
        updateStatus(state, status)     {
            state.status++;
        },
        loadData(){
            update({
                xxx: 1
            }, function () {
                console.log(arguments)
            }, function () {
                console.log(arguments)
            })
        }

    }
//异步操作并不是必须放在actions中，最终触发的都是mutations
//actions: {
//    uploadInfo({commit}, data){
//        commit('uploadInfo', data)
//    }
//}
})
export default store
