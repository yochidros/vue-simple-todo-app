<template>
  <div>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="New Task"> 
      <input type="button" v-on:click="addTask" value="add">
    </form> 
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTaskName: '',
      }
    },
    methods: {
      addTask () {
        if (this.newTaskName === ''){
          return 
        }
        var ids = this.$store.getters.newLabelIds
        this.$store.commit('taskStore/addTask', {
          name: this.newTaskName,
          labelIds: ids
        })
        this.newTaskName = ''
        this.$store.taskStore.newLabelIds = []
      },
    },
  }
</script>

<style scoped>
div {
  margin-top: 20px;
}
input {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
