const app = Vue.createApp({
    data() {
        return{
            url: "https://www.stathopoulosandreas.com",
            showBooks: true,
            books: [
                { title: "to be or not to be", author: "yolo", img: 'assets/1.jpg'},
                { title: "tobetobetobe", author: "lolo", img: 'assets/1.jpg'},
                { title: "doobe doobe doooo", author: "lol", img: 'assets/1.jpg'},
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