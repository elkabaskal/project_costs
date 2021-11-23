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
                // Vue.set(state.paymentsList, 0, payload) изменение данных
                // state.paymentsList[0] = payload
                // state.paymentsList = [...state.paymentsList]
        },
        setPaymentsCategoryList(state, payload) {
            state.categoryList = payload
                // Vue.set(state.paymentsList, 0, payload) изменение данных
                // state.paymentsList[0] = payload
                // state.paymentsList = [...state.paymentsList]
        },
        addDataToPaymentsList(store, data) {
            store.paymentsList.push(data)
        }
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [];
                    for (let i = 1; i < 21; i++) {
                        items.push({
                            counter: i,
                            date: '2021-05-13',
                            category: 'Education',
                            value: 100
                        })
                    }
                    resolve(items)
                }, 1000)
            }).then(res => {
                // dispatch('fetchCategory')
                commit('setPaymentsListData', res)
            })
        },
        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = ['Sport', 'Education', 'Food', 'Internet']
                    resolve(items)
                }, 0)
            }).then(res => commit('setPaymentsCategoryList', res))
        }
    },
    getters: {
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getPaymnetsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList
    }
})