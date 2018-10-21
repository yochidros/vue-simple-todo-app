<template>
  <div id="app">
    <p>
      <h1>
        🐩
        <img alt="Vue logo" src="./assets/logo.png">
        🐶
      </h1>
    </p>
    <TaskList/>
    <AddTask/>
    <LabelList/>
    <FilterList/>
    <SaveRestore/>
  </div>
</template>

<script>
  import TaskList from './components/TaskList.vue'
  import AddTask from './components/AddTask.vue'
  import LabelList from './components/LabelList.vue'
  import FilterList from './components/FilterList.vue'
  import SaveRestore from './components/SaveRestore.vue'

export default {
  name: 'app',
  components: {
    TaskList,
    AddTask,
    LabelList,
    FilterList,
    SaveRestore
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
  margin-bottom: 60px;
}
h1 {
  font-size: 210px;
  margin: 0px;
  padding:0px;
}
</style>
