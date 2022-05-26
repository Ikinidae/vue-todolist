const myTodoList = new Vue ({
    el : "#app",
    data : {
        newTodo : "",
        todos : [
            {
                text : "Passare l'aspirapolvere",
                done : true
            },
            {
                text : "Comprare shampoo e balsamo",
                done : false
            },
            {
                text : "Nutrire la cana",
                done : true
            },
            {
                text : "Stampare documenti",
                done : false
            },
            {
                text : "Pagare multa",
                done : false
            },
            {
                text : "Cambiare batteria orologio",
                done : true
            }
        ]
    },

    methods : {
        addItem() {
            if(this.newTodo !== "") {
                // creare un nuovo oggetto in cui newTodo è il text e in cui done:false
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        },
        deleteItem(index) {
            this.todos.splice(index,1);
        }
    }
});

console.log(myTodoList.newTodo);
