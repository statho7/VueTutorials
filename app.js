const app = Vue.createApp({
    data() {
        return{
            url: "https://www.stathopoulosandreas.com",
            showBooks: true,
            books: [
                { title: "to be or not to be", author: "yolo", img: 'assets/1.jpg', isFav: true},
                { title: "tobetobetobe", author: "lolo", img: 'assets/1.jpg', isFav: true},
                { title: "doobe doobe doooo", author: "lol", img: 'assets/1.jpg', isFav: false},
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
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});



app.mount('#app');