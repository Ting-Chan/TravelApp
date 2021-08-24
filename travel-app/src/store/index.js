import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = "上海"

try {
  if (localStorage.city) {
    console.log("try catch");
    defaultCity = localStorage.city
  }
} catch (error) {
  console.log(error);
}

export default new Vuex.Store({
  // 存放全局公用数据
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {
        console.log(error);
      }
    }
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit("changeCity", city)
    }
  },
  getters: {
    doubleCity (state) {
      return state.city + " " + state.city;
    }
  },
  modules: {
  }
})
