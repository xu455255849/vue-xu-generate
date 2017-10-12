/**
 * Created by xushaoping on 17/10/12.
 */

let state = {
    example: document.documentElement.scrollHeight + 'px',
    total: 0
    
};

let getters = {};

let mutations = {
    example: state => state.example = document.documentElement.scrollHeight + 'px',  //
    Change (state, total) {
        state.total = total
    },
};

let actions = {};

/**
 *  在 *vue 中引入 ，操作变量  模块名为app.js
 */

//   this.$store.state.app.example   //获取变量

//   this.$store.commit('example')  //更新变量 不带参数

//   this.$store.commit('Change', total)  //更新变量 带参数


export default {
    state,
    getters,
    mutations,
    actions
}

