import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
    page1: [
        { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
        { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
        { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
    ],
    page2: [
        { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
        { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
        { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
    ],
    page3: [
        { id: 7, date: '23.03.2020', category: 'Internet', value: 890 },
        { id: 8, date: '24.03.2020', category: 'Education', value: 1400 },
        { id: 9, date: '25.03.2020', category: 'Auto', value: 700 }
    ],
    page4: [
        { id: 10, date: '23.03.2020', category: 'Adventure', value: 1700 },
        { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
        { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
    ]
}

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
        paymentsListIDS: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            const newUniwIdsObj = payload.filter((item) => {
                return state.paymentsListIDS.indexOf(item.id) < 0
            })
            const uniqIds = newUniwIdsObj.map(obj => obj.id)
            state.paymentsList.push(...newUniwIdsObj)
            state.paymentsListIDS.push(...uniqIds)
        },
        setPaymentsCategoryList(state, payload) {
            state.categoryList = payload
        },
        addDataToPaymentsList(store, data) {
            store.paymentsList.push(data)
        }
    },
    actions: {
        fetchData({ commit }, page) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = localDB[`page${page}`]
                    resolve(items)
                }, 0)
            }).then(res => {

                commit('setPaymentsListData', res)
            })
        },
        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = ['Sport', 'Education', 'Food', 'Internet', 'Auto', 'Adventure']
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