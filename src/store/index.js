import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    tasks: [],
    filter: 'total',
    counter: 1
  },
  mutations: {
    setTask(state, text) {
      state.tasks.push({
        id: state.counter++,
        text,
        isCompleted: false,
        time: new Date().toLocaleString('en-US')
      })
    },
    setFilter(state, value) {
      state.filter = value
    },
    setStatus(state, {id, value}) {
      state.tasks.find(task => task.id === id).isCompleted = value
    },
    clearCompleted(state) {
      state.tasks = state.tasks.filter(task => !task.isCompleted)
    }
  },
  getters: {
    tasks(state) {
      const total = state.tasks.slice().reverse()
      const completed = []
      const uncompleted = []
      for (const task of total) {
        task.isCompleted
          ? completed.push(task)
          : uncompleted.push(task)
      }
      return {
        total,
        completed,
        uncompleted
      }
    }
  },
  plugins: [
    createPersistedState({
      paths: [
        'tasks',
        'counter'
      ]
    })
  ]
})
