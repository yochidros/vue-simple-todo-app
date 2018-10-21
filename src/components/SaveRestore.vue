<template>
  <div>
    <h2>Save or Restore</h2> 
    <button id='saveBtn' type="button" v-on:click="save">Save</button>
    <button id='restoreBtn' type="button" v-on:click="restore">Restore</button>
  </div>
</template>

<script>
  export default {
    methods: {
      save () {
        this.$store.dispatch('taskStore/save')
      },

      restore () {
        this.$store.dispatch('taskStore/restore')
      },

    },
  }
</script>

<style scoped>
h2 {
  border: solid 3px #666666;
  margin: 0px;
  width: 20%;
  padding: 10px;
  color: #00AAFF;
  background-color: #E0E0E0;
  text-align: center;
}
#saveBtn {
  width: 10%;
  background-color: blue;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 6px;
}

#restoreBtn {
  width: 10%;
  background-color: pink;
  color: green;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 6px;
  margin-right: 6px;
}
</style>
