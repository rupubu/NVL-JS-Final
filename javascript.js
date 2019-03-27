    window.onload = function() {
        var Contenedor = document.querySelectorAll("#texto, #numerico, #email");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", mostrartexto);
        }
        Contenedor = document.querySelectorAll("#lista, #check, #opcion");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", mostrarlista);
        }
    }

    function mostrartexto(e) {
        var Contenedor1 = document.querySelector(".prop-texto");
        var Contenedor2 = document.querySelector(".prop-lista");
        if (Contenedor1.style.display === "block" || Contenedor2.style.display === "block") {
            if (confirm("Actualmente existe un proceso de creación de campo existente, si continua se cancelará.")) {
                resetctrl();
            }
        }
        Contenedor1.style.display = "block";
        var texto = document.querySelector("#Nombre");
        switch (e.target.id) {
            case "texto":
                texto.placeholder = "Nombre de campo texto";
                break;
            case "numerico":
                texto.placeholder = "Nombre de campo númerico";
                break;
            case "email":
                texto.placeholder = "Nombre de campo email";
                break;
            default:
        }
    }
    function mostrarlista(e) {
        var Contenedor1 = document.querySelector(".prop-texto");
        var Contenedor2 = document.querySelector(".prop-lista");
        if (Contenedor1.style.display === "block" || Contenedor2.style.display === "block") {
            if (confirm("Actualmente existe un proceso de creación de campo existente, si continua se cancelará.")) {
                resetctrl();
            }
        }
        Contenedor2.style.display = "block";
        var texto = document.querySelector("#NombreLista");
        switch (e.target.id) {
            case "lista":
                texto.placeholder = "Nombre de campo lista";
                break;
            case "check":
                texto.placeholder = "Nombre de campo check";
                break;
            case "opcion":
                texto.placeholder = "Nombre de campo opciones";
                break;
            default:
        }
    }
    function ListChange(event) {
        var Borrar = false;

        if (event.target.value > 0) {
            var i = document.querySelectorAll("#LO").length;
            if (i !== 0) {
                if (event.target.value < i) { 
                    var Contenedor = document.querySelector("input[name='LO" + event.target.value + "']");
                    event.target.parentNode.removeChild(Contenedor);
                    Borrar = true;           
                   }
            }
            if (Borrar === false) {
                for (; i < event.target.value; i++) {
                    var Contenedor = document.querySelector(".prop-lista");
                    var oRama = Contenedor.appendChild(document.createElement("label"));
                    oRama.name = "LO" + i;
                    Contenedor.appendChild(oRama);
                    var Contenedor = document.querySelector(".prop-lista");
                    var oRama = Contenedor.appendChild(document.createElement("input"));
                    oRama.name = "LO" + i;
                    oRama.id = "LO";
                    oRama.placeholder = "Escribe el valor de esta opción";
                    Contenedor.appendChild(oRama);
                }
            }
        }
    }


    function resetctrl () {
        var Contenedor = document.querySelectorAll(".prop-texto, .prop-lista");
        for (var i = 0; i < Contenedor.length; i++) {
            var texto = document.querySelector("#Nombre");
            texto.value = "";
            Contenedor[i].style.display = "none";
            var texto = document.querySelector("#NombreLista");
            texto.value = "";
            Contenedor[i].style.display = "none";
            var texto = document.querySelector("#Cantidad");
            texto.value = "";
        }
    }



