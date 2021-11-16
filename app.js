const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            books: [
                { title: "to be or not to be", author: "yolo"},
                { title: "tobetobetobe", author: "lolo"},
                { title: "doobe doobe doooo", author: "lol"},
            ]
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});



app.mount('#app');