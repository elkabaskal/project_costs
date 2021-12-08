import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        setPaymentsCategoryList(state, payload) {
            state.categoryList = payload
        },
        addDataToPaymentsList(store, data) {
            store.paymentsList.push(data)
        },
        addDataToCategoryList(state, data) {
            state.categoryList.push(data)
        },
        editDataToPaymentsList(state, item) {
            var edit = state.paymentsList.findIndex(idx => idx.id == item.id);
            state.paymentsList.splice(edit, 1, item)
        },
        deletePayment(state, item) {
            var index = state.paymentsList.findIndex(idx => idx.id == item.id);
            state.paymentsList.splice(index, 1);
        }


    },
    actions: {
        /*    fetchData({ commit }) {
               return new Promise((resolve) => {
                   const items = [];
                   resolve(items)
               }).then(res => {
                   commit('setPaymentsListData', res)
               })
           }, */

        fetchData({ commit }) {
            return new Promise((resolve) => {

                const items = []
                for (let i = 1; i < 10; i++) {
                    items.push({
                        id: i,
                        date: '2021-11-10',
                        category: 'Education',
                        value: i * 10
                    })
                }
                resolve(items)

            }).then(res => {
                commit('setPaymentsListData', res)
            })
        },

        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                const items = ['Sport', 'Education', 'Food', 'Internet', 'Auto', 'Adventure']
                resolve(items)
            }).then(res => commit('setPaymentsCategoryList', res))
        }
    },
    getters: {
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getPaymnetsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList,
    }
})