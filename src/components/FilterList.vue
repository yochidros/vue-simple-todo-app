<template>
  <div>
    <h2>Filter in Label</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="radio" v-bind:checked="label.id === filter"
               v-on:change="changeFilter(label.id)">
        {{ label.text }}
      </li> 
      <li>
        <input type="radio" v-bind:checked="filter === null"
               v-on:change="changeFilter(null)">
        No Filter
      </li> 
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      labels () {
        return this.$store.state.taskStore.labels
      },
      filter () {
        return this.$store.state.taskStore.filter
      }
    },
    methods: {
      changeFilter (labelId) {
        this.$store.commit("taskStore/changeFilter", {
          filter: labelId
        })
      },
    }
  }
</script>
