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
        editDataToPaymentsList(state, editData) {
            var edit = state.paymentsList.findIndex(idx => idx.id == editData.id);
            state.paymentsList.splice(edit, 1, editData)
        },
        deletePayment(state, item) {
            var index = state.paymentsList.findIndex(idx => idx.id == item.id);
            state.paymentsList.splice(index, 1);
        }


    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                const items = [
                    { id: 1, date: '2021-03-11', category: 'Food', value: 180 },
                    { id: 2, date: '2021-03-12', category: 'Auto', value: 50 },
                    { id: 3, date: '2021-04-10', category: 'Sport', value: 450 },
                    { id: 4, date: '2021-04-10', category: 'Internet', value: 970 },
                    { id: 5, date: '2021-04-10', category: 'Education', value: 1500 },
                    { id: 6, date: '2021-04-11', category: 'Food', value: 200 },
                    { id: 7, date: '2021-04-18', category: 'Internet', value: 890 },
                    { id: 8, date: '2021-05-10', category: 'Education', value: 1400 },
                    { id: 9, date: '2021-06-10', category: 'Auto', value: 700 },
                    { id: 10, date: '2021-07-01', category: 'Adventure', value: 1700 },
                    { id: 11, date: '2021-08-10', category: 'Education', value: 1500 },
                    { id: 12, date: '2021-09-10', category: 'Food', value: 200 },
                ];
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
            return state.paymentsList.reduce((res, cur) => res + Number(cur.value), 0)
        },
        getPaymnetsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList,
    }
})