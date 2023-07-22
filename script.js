const { createApp } = Vue;

const app = createApp({

    data() {
        return{
            toDoList:[
                {   id:1,
                    text: "Creare una struttura html / css dignitosa",
                    done: "true",
                },
                {   id:2,
                    text:"Stampare all’interno di una lista HTML un item per ogni todo.",
                    done: "false", 
                },
                {   id:3,
                    text: "Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.",
                    done: "false",
                },
                {   id:4,
                    text:"Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.",
                    done: "true",
                }
                
            ],            

        }
    },

    methods: {

    }




}).mount("#app")