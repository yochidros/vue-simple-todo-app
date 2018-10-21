
export default {
  taskStore: {
    namespaced: true,

    state: {
      tasks: [
        {
          id: 1,
          name: 'buy milk',
          labelIds: [1, 2],
          done: false
        },
        {
          id: 2,
          name: 'drink milk',
          labelIds: [2, 3],
          done: false
        },
        {
          id: 3,
          name: 'throw milk',
          labelIds: [2, 3],
          done: true
        }
      ],

      labels: [
        {
          id: 1,
          text: 'shopping'
        },
        { 
          id: 2,
          text: 'food'
        },
        {
          id: 3,
          text: 'action'
        }
      ],
      nextTaskId: 4,
      nextLabelId: 4,
      filter: null,
      newLabelIds: []
    },

    getters: {
      filteredTasks (state) {
        if (!state.filter) {
          return state.tasks
        }
        return state.tasks.filter(task => {
          return task.labelIds.indexOf(state.filter) >= 0
        })
      },
      newLabelIds (state) {
        return state.newLabelIds
      },
    },

    mutations: {
      addTask ( state, { name, labelIds }) {
        state.tasks.push({
          id: state.nextTaskId,
          name,
          labelIds,
          done: false
        })

        state.nextTaskId += 1
      },

      toggleTaskStatus (state, { id }) {
        const filtered = state.tasks.filter(task => {
          return task.id === id
        })

        filtered.forEach(task => {
          task.done = !task.done
        })
      },

      addLabel (state, { text }) {
        state.labels.push({
          id: state.nextTaskId,
          text
        })
        state.nextLabelId += 1
      },

      changeFilter (state, { filter }) {
        state.filter = filter
      },

      updateLabelIds (state, { id }) {
        var found = state.newLabelIds.find( function(element) {
          return element === id
        })
        if (found === undefined) {
          state.newLabelIds.push(id)
        } else {
          state.newLabelIds = state.newLabelIds
            .filter(function(element, index, array) {
              return id !== element
            })
        }
      },

      restore (state, { tasks, labels, nextTaskId, nextLabelId }) {
        state.tasks = tasks
        state.labels = labels
        state.nextTaskId = nextTaskId
        state.nextLabelId = nextLabelId
      }
    },

    actions: {
      save ({ state }) {
        const data = {
          tasks: state.tasks,
          labels: state.labels,
          nextTaskId: state.nextTaskId,
          nextLabelId: state.nextLabelId
        }
        localStorage.setItem('task-app-data', JSON.stringify(data))
      },

      restore ({ commit }) {
        const data = localStorage.getItem('task-app-data')
        if (data) {
          commit('restore', JSON.parse(data))
        }
      },
    }
  }
}
