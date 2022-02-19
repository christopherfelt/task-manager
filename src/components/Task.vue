<template>
  <h3>{{ task.text }}</h3>
  <p> {{ task.day }} </p>
  <p>  </p>
</template>

<script>
export default {
  name: "Task_Component",
  props: {
    task: Object,
  },
};
</script>

<style>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}



</style>