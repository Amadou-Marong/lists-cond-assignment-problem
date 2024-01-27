const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            showList: true
        };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
        },
        toggleList() {
            this.showList = !this.showList;
        },
        // updateButtonCaption() {
        //     return this.showList ? 'Hide List' : 'Show List';
        // }
    },
})
app.mount('#assignment')