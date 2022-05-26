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
            const task = {
                text : this.newTodo,
                done : false
            }
            if(this.newTodo !== "") {
                this.todos.push(task);
                this.newTodo = "";
            }
        },
        deleteItem(index) {
            this.todos.splice(index,1);
        }
    }
});

