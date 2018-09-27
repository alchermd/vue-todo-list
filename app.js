const app = new Vue({
  el: "#app",

  data: {
    newTask: "",
    tasks: []
  },

  methods: {
    addTask(event) {
      event.preventDefault();

      if (this.newTask) {
        this.tasks.push({
          description: this.newTask,
          status: 0
        });

        this.newTask = '';
      }
    }
  },

  computed: {
    todos() {
      return this.tasks.filter(task => task.status === 0);
    },

    doings() {
      return this.tasks.filter(task => task.status === 1);
    }
  }
});
