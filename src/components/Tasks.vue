<template>
  <div :key="task.id" v-for="task in tasks">
      <Task :task="task" />
  </div>
</template>

<script>
import Task from "@/components/Task.vue"

export default {
    name: 'Tasks_Component',
    props: {
        tasks: Array
    },
    components: {
        Task
    }
}
</script>

<style>

</style>