<template>
  <div class="home container">
    <FormAddTask class="my-3" />
    <MenuSettings class="my-3" />
    <TasksList class="my-3" />
  </div>
</template>

<script>
import FormAddTask from "../components/FormAddTask";
import MenuSettings from "../components/MenuSettings";
import TasksList from "../components/TasksList";
export default {
  name: 'Home',
  components: {
    TasksList,
    MenuSettings,
    FormAddTask,
  }
}
</script>


