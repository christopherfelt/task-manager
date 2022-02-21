<template>
<div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']" >
  <span><h3>{{ task.text }}</h3></span> 
  <span @click="onDelete(task.id)" ><h3><strong>X</strong></h3></span>
  <p> {{ task.day }} </p>
</div>
</template>

<script>
export default {
  name: "Task_Component",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id){
      this.$emit('delete-task', id);
    },
  }
};
</script>

<style scope>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: left;
  justify-content: space-between;
}

</style>
