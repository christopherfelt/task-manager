import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
  },
  mutations: {
    setAllTasks(state, tasks){
      state.tasks = tasks
    }
  },
  actions: {
    async getAllTasks({commit}){
      try {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        console.log(data)
        commit("setAllTasks", data);
      } catch (error) {
        console.error("Error in Action: ", error);
      }
    },
    async createTask({commit}, taskDetail){
      try {
        const res = await fetch("http://localhost:5000/tasks",{
          method:'POST',
          mode:"cors",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskDetail)
        });
        const data = await res.json();
        commit('addNewTask', data);
      } catch (error) {
        console.error("Error in createTask action: ", error);
      }
    }
  },
  modules: {
  }
})
