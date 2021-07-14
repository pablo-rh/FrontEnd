const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    console.log("Funcion");
    if (this.readyState === 4 && this.status === 200) {
       //console.log(this.response);

       const data = JSON.parse(this.response);
       console.log(data);
       const HTMLResponse = document.querySelector("#app");
       
       const tpl = data.map(user => `<li></li>`);

    }
}

xhr.addEventListener( "load", onRequestHandler);
xhr.open("GET",API_URL)
xhr.send();