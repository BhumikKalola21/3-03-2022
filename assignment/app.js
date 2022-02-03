const app = Vue.createApp({
  data() {
    return {
      enterValue: '',
      tasks: [],
      taskinList: true
    };
  },
  computed: {
    caption() {
      return this.taskinList ? 'hide list' : 'show list';
    }
  },
  methods: {
    pressing() {
      this.tasks.push(this.enterValue)
    },
    toggleaction() {
      this.taskinList = !this.taskinList;
    },
  },
});
app.mount('#assignment');