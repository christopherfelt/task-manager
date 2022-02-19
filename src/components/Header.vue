<template>
  <header>
      <h1>{{title}}</h1>
      <Button title="Add Task" color="green" />
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