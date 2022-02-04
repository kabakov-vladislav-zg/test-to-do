<template>
  <div class="menu-settings card">
    <div class="card-body d-flex align-items-center justify-content-between flex-column flex-md-row">
      <div
        class="btn-group"
        :class="{ 'mb-2 mb-md-0' : tasks.completed.length }"
        role="group"
        aria-label="tasks filter"
      >
        <input
          v-model="status"
          :value="'total'"
          type="radio"
          class="btn-check"
          name="filter"
          id="filter-total"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary btn-sm" for="filter-total">total ({{tasks.total.length}})</label>

        <input
          v-model="status"
          :value="'completed'"
          type="radio"
          class="btn-check"
          name="filter"
          id="filter-completed"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary btn-sm" for="filter-completed">completed ({{tasks.completed.length}})</label>

        <input
          v-model="status"
          :value="'uncompleted'"
          type="radio"
          class="btn-check"
          name="filter"
          id="filter-uncompleted"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary btn-sm" for="filter-uncompleted">uncompleted ({{tasks.uncompleted.length}})</label>
      </div>
      <button
        v-if="tasks.completed.length"
        class="btn btn-outline-primary btn-sm align-self-end align-self-md-auto"
        @click="clearCompleted"
      >
        clear completed
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSettings",
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    status: {
      get() {
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('setFilter', value)
      }
    }
  },
  methods: {
    clearCompleted() {
      this.$store.commit('clearCompleted')
    }
  }
}
</script>