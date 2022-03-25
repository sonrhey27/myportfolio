import { createStore } from 'vuex'

export default createStore({
  state: {
    projectDetails: 
      {
      "ProjectCategory" : "Project 1",
      "ProjectClient" : "Client 1",
      "ProjectDate" : "12/12/2020",
      "ProjectURL" : "url.com",
      "ProjectIMG" : "assets/img/wims.png",
      "ProjectTitle" : "Project Title",
      "ProjectDescription" : "ProjectDescription"
      }
    
  },
  getters: {
    projectDetails: state => {
      return state.projectDetails
    }
  },
  mutations: {
    setProjectDetails(state, value){
      state.projectDetails = {
        "ProjectCategory" : value,
        "ProjectClient" : value,
        "ProjectClient" : value,
        "ProjectURL" : value,
        "ProjectIMG" : value,
        "ProjectTitle" : value,
        "ProjectDescription" : value
      }
    }
  },
  actions: {
    getProjectDetails(context, item){
      context.commit('setProjectDetails', item)
    }
  },
  modules: {
  }
})
