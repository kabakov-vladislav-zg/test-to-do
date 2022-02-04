<template>
  <div class="tasks-list card">
    <ul class="list-group list-group-flush">
      <TasksListTaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </ul>
  </div>
</template>

<script>
import TasksListTaskCard from "./TasksListTaskCard";
export default {
name: "TasksList",
  components: {
    TasksListTaskCard
  },
  computed: {
    filter() {
      return this.$store.state.filter
    },
    tasks() {
      return this.$store.getters.tasks[this.filter]
    }
  }
}
</script>