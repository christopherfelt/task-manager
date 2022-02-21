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
      // tasks: [],
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
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    AddTask(task) {
      this.tasks = [...this.tasks, task];
    },
    toggleAddTask(){
      this.showAddTask = !this.showAddTask;
    },
    // async fetchTasks(){
    //   const res = await fetch("http://localhost:5000/tasks");
    //   const data = await res.json()
    //   return data
    // }
  },
  
  // async created() {
  //   this.tasks = await this.fetchTasks();
  // },
};
</script>
