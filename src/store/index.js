import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        data:10
    },
    mutations: {
        Increment(state,plyload){
           state.data = plyload
        }
    }
})
