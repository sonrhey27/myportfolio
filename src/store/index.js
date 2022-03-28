import { createStore } from 'vuex'

export default createStore({
  state: {
    category: "test",
    client: "",
    project_date: "",
    project_url: "",
    project_title: "",
    project_img : ""
  },
  getters: {
    projectDetails: state => {
      return state.projectDetails
    }
  },
  mutations: {
    changeCategory(state, value){
      state.category = value
    },
    changeClient(state, value){
      state.client = value
    },
    changeDate(state, value){
      state.project_date = value
    },
    changeUrl(state, value){
      state.project_url = value
    },
    changeTitle(state, value){
      state.project_title = value
    },
    changeImg(state, value){
      state.project_img = value
    }
  },
  actions: {
    // getProjectDetails(context, item){
    //   context.commit('setProjectDetails', item)
    // }
  },
  modules: {
  }
})
