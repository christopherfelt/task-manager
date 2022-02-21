<template>
  <header>
      <h1>{{title}}</h1>
      <Button :title="showAddTask ? 'Close' : 'Add Task' " :color="showAddTask ? 'red' : 'green'" @btn-click="$emit('toggle-add-task')" />
      <Button title="Update Task" color="blue" />
  </header>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'Header-Component',
    props: {
        title: {
            type: String,
            default: "this is the default"
        },
        showAddTask: {
            type: Boolean
        }
    },
    components:{
        Button
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>