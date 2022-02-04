<template>
  <li
    class="task-card list-group-item list-group-item-action"
    :class="{ 'active' : isCompleted }"
  >
    <article>
      <h2 class="h6">Task №{{ id }}</h2>
      <p>{{ text }}</p>
      <footer class="d-flex flex-column flex-sm-row justify-content-between">
        <input
            :id="'task-' + id"
            class="btn-check task-card__toggle-completed"
            type="checkbox"
            v-model="isCompleted"
        >
        <label
            :for="'task-' + id"
            class="task-card__label-toggle-completed"
        >
          Mark as {{ isCompleted ? 'un' : '' }}completed?
        </label>
        <time>{{ time }}</time>
      </footer>
    </article>
  </li>
</template>

<script>
export default {
  name: "TasksListTaskCard",
  components: {},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: this.task.id,
      text: this.task.text,
      time: this.task.time,
    }
  },
  computed: {
    isCompleted: {
      get() {
        return this.task.isCompleted
      },
      set(value) {
        this.$store.commit('setStatus', {id: this.id, value})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.task-card__label-toggle-completed {
  opacity: 0;
  transition: $transition-fade;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    z-index: 1;
  }
}
.task-card__toggle-completed:focus + .task-card__label-toggle-completed {
  opacity: 1;
  &::after {
    box-shadow: $btn-focus-box-shadow;
  }
}
</style>