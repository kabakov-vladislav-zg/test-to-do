<template>
  <form
    class="form-add-task card"
    @submit.prevent="submit"
  >
    <div class="card-body d-flex flex-column">
      <input
        class="form-control mb-2"
        name="task"
        type="text"
        placeholder="task text"
        aria-label="task text"
      >
      <button type="submit" class="btn btn-primary align-self-end">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormAddTask",
  methods: {
    submit(e) {
      let task = e.target.task
      if(task.value) {
        this.$store.commit('setTask', task.value)
        task.value = ''
      }
    }
  }
}
</script>