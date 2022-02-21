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
    },
    addNewTask(state, task){
      state.tasks.push(task);
    },
    updateTask(state, task){
      state.tasks = state.tasks.map((t) => {
        return t.id === task.id ? task : t
      })
    },
    deleteTask(state, taskid){
      state.tasks = state.tasks.filter((t) => {
        return t.id !== taskid;
      })
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
    },
    async editTask({commit}, taskDetails){
      try {
        const res = await fetch("http://localhost:5000/tasks/"+taskDetails.id, {
          method: 'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(taskDetails)
        });
        const data = await res.json()
        console.log(data);
        commit('updateTask', data)
      } catch (error) {
        console.error("Error in editTask action");
      }
    },
    async deleteTask({commit}, taskid){
      try {
        const res = await fetch("http://localhost:5000/tasks/"+taskid,{
          method: 'DELETE',
          headers:{
            'Content-Type':'application/json'
          },
        })
        console.log(res);
        commit('deleteTask', taskid);
      } catch (error) {
        console.error('Error in editTask action')
      }
    }
  },
  modules: {
  }
})
