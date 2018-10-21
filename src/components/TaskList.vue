<template>
  <div>
    <h2>Task List</h2> 
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
        -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li> 
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      tasks() {
        return this.$store.getters['taskStore/filteredTasks']
      },
      labels() {
        return this.$store.state.taskStore.labels
      },
    },
    methods: {
      toggleTaskStatus (task) {
        this.$store.commit('taskStore/toggleTaskStatus', {
          id: task.id
        })
      },

      getLabelText(id) {
        const label = this.labels.filter(label => label.id === id)[0]
        return label ? label.text : ''
      },
    },
  }
</script>

<style scoped>
div {
  margin-top: 40px;
  width: 40%;
  border: solid 1px #C6C6C6;
}
h2 {
  text-align: left;
  margin-left: 10px;
  font-size: 25px;
  font-family: sans-serif;
  font-style: italic;
}
ul {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  display: block;
  list-style: none;
}
</style>
