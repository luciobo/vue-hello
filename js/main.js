const { createApp } = Vue;

// invochiamo la funzione passando come argomento un oggetto

// crea l'istanza di Vue. Sull'istanza invochiamo la funzione
// mount. Questa si aspetta come un argomento un selettore html valido
createApp({
    // data: function () {}
    data() {
        // la funzione data deve SEMPRE ritornare un oggetto
        return {
            nome: "",
            cognome: "",
            immagine: "imgs/immagine-profilo.jpeg",
            classi: "text-danger",
            mioPlaceHolder : 'ciaoaicao'
        };
        
    },
}).mount("#app")