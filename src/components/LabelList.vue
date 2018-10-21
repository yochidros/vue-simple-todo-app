<template>
  <div>
    <h2>Label List</h2> 
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="checkbox" v-bind:value="label.id" v-model="newTaskLabelIds" @change="updateLabelIds(label.id)">
        {{ label.text }}
      </li> 
    </ul>
    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="New Label">
      <input type="button" v-on:click="addLabel" value="add">
    </form>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        newTaskLabelIds: [],
        newLabelText: '',
      }
    },
    computed: {
      labels() {
        return this.$store.state.taskStore.labels
      },
    },

    methods: {
      addLabel() {
        if (this.newLabelText === ''){
          return 
        }
        this.$store.commit('taskStore/addLabel', {
          text: this.newLabelText
        })
        this.newLabelText = ''
      },
      updateLabelIds(id) {
        console.log(id)
        this.$store.commit('taskStore/updateLabelIds', {id})
      },
    }
  }
</script>

<style scoped>
input {
  margin-left:10px;
  margin-right: 10px;
}
</style>
