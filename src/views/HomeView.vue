<template>
  <div class="home">
    <Header title="Task Tracker" />
    <Tasks :tasks="tasks" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "March 3rd at 1:30;m",
        reminder: false,
      },
    ];
  },
};
</script>
