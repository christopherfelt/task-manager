<template>
  <div class="home">
    <Header title="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <div v-show="showAddTask" >
      <AddTask @toggle-add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: "HomeView",
  mounted(){
    this.$store.dispatch('getAllTasks');
  },
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    tasks(){
      return this.$store.state.tasks;
    }
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure?"))
        this.$store.dispatch("deleteTask", id);
    },
    toggleReminder(id) {
      let taskDetails = this.tasks.find(task => task.id === id);
      taskDetails.reminder = !taskDetails.reminder;

      this.$store.dispatch("editTask", taskDetails);
    },
    AddTask(task) {
      this.tasks = [...this.tasks, task];
    },
    toggleAddTask(){
      this.showAddTask = !this.showAddTask;
    },
  },
  
};
</script>
