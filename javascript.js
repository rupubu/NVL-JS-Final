    /*
        TODAVIA SE PUEDE AFINAR MUCHISIMO EL CODIGO, HAY MUCHOS ASPECTOS EN LOS QUE NO HE QUERIDO ENTRAR
        PORQUE SINO NO ACABO Y ME QUEDA MUCHO PRE-WORK AUN.

    */
    
    window.onload = function() {
        // Asignar Eventos
        var Contenedor = document.querySelectorAll("#texto, #numerico, #email");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", mostrartexto);
        }
        
        Contenedor = document.querySelectorAll("#lista, #check, #opcion");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", mostrartexto);
        }
        
        Contenedor = document.querySelector("#Cantidad");
        Contenedor.addEventListener("input", listchange);
        
        Contenedor = document.querySelectorAll("a[id|=btn-aceptar]");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", aceptar);
        }

        Contenedor = document.querySelectorAll("a[id|=btn-cancelar]");
        for (var i = 0; i < Contenedor.length; i++) {
            Contenedor[i].addEventListener("click", resetctrl);
        }
    }
    
    function mostrartexto(e) {
        var Contenedor1 = document.querySelector(".prop-texto");
        var Contenedor2 = document.querySelector(".prop-lista");
        var Entrar = true;
        var texto, altoDiv;
        if (Contenedor1.style.display === "block" || Contenedor2.style.display === "block") {
            if (confirm("Actualmente existe un proceso de creación de campo existente, si continua se cancelará.")) {
                resetctrl();
            }
            else {
                Entrar = false;
            }
        }
        if (Entrar === true) {
            switch (e.target.id) {
                case "texto":
                case "numerico":
                case "email":
                    Contenedor1.style.display = "block";
                    altoDiv = Contenedor1.clientHeight;
                    texto = document.querySelector("#Nombre-Etiqueta");
                    texto.placeholder = "Texto de etiqueta";
                    texto = document.querySelector("#Nombre");
                    texto.placeholder = "Nombre de campo " + e.target.id;
                    texto = document.querySelector("#Nombre-Placeholder");
                    texto.placeholder = "Texto del placeholder";
                    texto = document.querySelector("#btn-aceptar-texto");
                    texto.setAttribute("origen", e.target.id);
                    Contenedor1 = document.querySelector(".centrarform");
                    if (Contenedor1.style.display === "block") {
                        Contenedor1.style.marginTop = altoDiv + 60 + "px";
                    }
                    break;
                case "lista":
                case "check":
                case "opcion":
                    Contenedor2.style.display = "block";
                    altoDiv = Contenedor2.clientHeight;
                    texto = document.querySelector("#Nombre-Etiqueta-Cantidad");
                    texto.placeholder = "Texto de etiqueta";
                    texto = document.querySelector("#Indice-Defecto");
                    texto.value = "0";
                    texto = document.querySelector("#Cantidad");
                    texto.value = "1";
                    listchange(e);
                    texto = document.querySelector("#Nombre-Lista");
                    texto.placeholder = "Nombre de campo " + e.target.id;
                    texto = document.querySelector("#btn-aceptar-lista");
                    texto.setAttribute("origen", e.target.id);
                    break;
                default:
            }
        }
    }

    function listchange(e) {
        var Accion; // Si contiene 1 crea, si contiene 0 borra.
        var Contenedor, oRama, i, altoDiv;
            
        i = document.querySelectorAll("#LO").length;
        if (i === 0) {
            Accion = 1 
        }
        else {
            if (e.target.value < i) {
                Accion = 0;
            }    
            else {
                Accion = 1;
            }
        }

        if (Accion === 0) {
            var a = i - 1;
            for (; i > e.target.value; i--) {
                Contenedor = document.querySelector("label[for='LO" + a + "']");
                Contenedor.parentNode.removeChild(Contenedor);
                Contenedor = document.querySelector("input[name='LO" + a + "']");
                Contenedor.parentNode.removeChild(Contenedor);
                Contenedor = document.querySelector("label[for='LV" + a + "']");
                Contenedor.parentNode.removeChild(Contenedor);
                Contenedor = document.querySelector("input[name='LV" + a + "']");
                Contenedor.parentNode.removeChild(Contenedor);
                a--;
            }
        }
        else {
            do {
                Contenedor = document.querySelector(".opciones");
                oRama = Contenedor.appendChild(document.createElement("label"));
                oRama.textContent = "Valor oculto:";
                oRama.setAttribute("class","lbl lista");
                oRama.style.margin = "5px";
                oRama.htmlFor = "LO" + i;
                Contenedor.appendChild(oRama);

                oRama = Contenedor.appendChild(document.createElement("input"));
                oRama.name = "LO" + i;
                oRama.id = "LO";
                oRama.style.margin = "5px";
                oRama.placeholder = "Valor oculto";
                Contenedor.appendChild(oRama);

                oRama = Contenedor.appendChild(document.createElement("label"));
                oRama.textContent = "Valor visible:";
                oRama.setAttribute("class","lbl lista");
                oRama.style.margin = "5px";
                oRama.htmlFor = "LV" + i;
                Contenedor.appendChild(oRama);

                oRama = Contenedor.appendChild(document.createElement("input"));
                oRama.name = "LV" + i;
                oRama.style.margin = "5px";
                oRama.id = "LV";
                oRama.placeholder = "Valor visible";
                Contenedor.appendChild(oRama);
                i++;
            }
            while (i < e.target.value);
        }
        Contenedor = document.querySelector(".prop-lista");
        altoDiv = Contenedor.clientHeight;
        Contenedor1 = document.querySelector(".centrarform");
        if (Contenedor1.style.display === "block") {
            Contenedor1.style.marginTop = altoDiv + 60 + "px";
        }
    }
    
    function resetctrl (e) {
        var Contenedor1 = document.querySelector(".prop-texto");
        var Contenedor2 = document.querySelector(".prop-lista"); 
        if (Contenedor1.style.display === "block") { 
            var Contenedor = Contenedor1;
        }
        if (Contenedor2.style.display === "block") { 
            var Contenedor = Contenedor2;
        }

        Contenedor.style.display = "none";
        switch (Contenedor.className) {
            case "prop-texto":
                Contenedor = document.querySelector("#Nombre-Etiqueta");
                Contenedor.value = "";
                Contenedor = document.querySelector("#Nombre-Placeholder");
                Contenedor.value = "";
                Contenedor = document.querySelector("#Nombre");
                Contenedor.value = "";
                Contenedor = document.querySelector("#Nombre-Obligatorio");
                Contenedor.checked = false;
                break;
            case "prop-lista":
                Contenedor = document.querySelector("#Nombre-Etiqueta-Cantidad");
                Contenedor.value = "";
                Contenedor = document.querySelector("#Nombre-Lista");
                Contenedor.value = "";
                Contenedor = document.querySelector("#Cantidad");
                Contenedor.value = "";

                Contenedor = document.querySelectorAll(".opciones input, .opciones label");
                var i = 0;
                if (Contenedor.length > 0) {
                    do  {
                        texto = Contenedor[i], //retutilizo la variable texto para asinarle el nodo a borrar.
                        texto.parentNode.removeChild(texto);
                        i++;
                    }
                    while (i < Contenedor.length);
                }
                break;
        }
        Contenedor1 = document.querySelector(".centrarform");
        Contenedor1.style.marginTop = "25px";
    }

    function aceptar (e) {
        var Datos = []; 
        var Intermedio = [];
        var Hijo, Rama, Campo, Contenedor, PrimeraVez;

        Primeravez = false;
        if (document.querySelectorAll("#formulario > label").length === 0) {PrimeraVez = true};
        
        Contenedor = document.querySelector(".centrarform");
        Contenedor.style.display = "block";
        
        Contenedor = document.querySelector("#" + e.target.id);
        Campo = Contenedor.getAttribute("origen");

        switch (Campo) {
            case "texto":
            case "numerico":
            case "email":
                // DATOS - [TEXTO DE ETIQUETA], [NOMBRE DEL CAMPO], [VALOR PARA PLACEHOLDER], [¿REQUERIDO?]
                Contenedor = document.querySelector("#Nombre-Etiqueta");
                Datos.push(Contenedor.value);
                Contenedor = document.querySelector("#Nombre");
                Datos.push(Contenedor.value);
                Contenedor = document.querySelector("#Nombre-Placeholder");
                Datos.push(Contenedor.value);
                Contenedor = document.querySelector("#Nombre-Obligatorio");
                Datos.push(Contenedor.checked);

                Contenedor = document.querySelector("#formulario");
                //Creamos el campo
                Hijo = Contenedor.appendChild(document.createElement("label"));
                Hijo.htmlFor = Datos[1];
                Hijo.textContent = Datos[0];
                Hijo.setAttribute("class","lbl");
                Contenedor.appendChild(Hijo);

                Hijo = Contenedor.appendChild(document.createElement("input"));
                Hijo.name = Datos[1];
                if (Campo === "texto") { Hijo.setAttribute("type","text");}
                if (Campo === "numerico") { Hijo.setAttribute("type","number");}
                if (Campo === "email") { Hijo.setAttribute("type","email");}                
                Hijo.placeholder = Datos[2];
                Hijo.required = Datos[3];
                Contenedor.appendChild(Hijo);
                break;
            case "lista":
            case "check":
            case "opcion":
            // DATOS - [TEXTO DE ETIQUETA], [NOMBRE DEL CAMPO], [INDICE POR DEFECTO], [VALORES-OCULTOS], [VALORES-VISIBLES]
                Contenedor = document.querySelector("#Nombre-Etiqueta-Cantidad");
                Datos.push(Contenedor.value);
                Contenedor = document.querySelector("#Nombre-Lista");
                Datos.push(Contenedor.value);
                Contenedor = document.querySelector("#Indice-Defecto");
                Datos.push(Contenedor.value);

                Contenedor = document.querySelectorAll("#LO");
                for (var i = 0; i < Contenedor.length; i++) {
                    Intermedio.push(Contenedor[i].value);
                }
                Datos.push(Intermedio);

                Intermedio = [];
                Contenedor = document.querySelectorAll("#LV");
                for (var i = 0; i < Contenedor.length; i++) {
                    Intermedio.push(Contenedor[i].value);
                }
                Datos.push(Intermedio);

                if (Campo === "lista") {
                    Contenedor = document.querySelector("#formulario");
                    //Creamos el campo
                    Hijo = Contenedor.appendChild(document.createElement("label"));
                    Hijo.htmlFor = Datos[1];
                    Hijo.textContent = Datos[0];
                    Hijo.setAttribute("class","lbl");
                    Contenedor.appendChild(Hijo);

                    Hijo = Contenedor.appendChild(document.createElement("SELECT"));
                    Hijo.name = Datos[1];
                    Hijo = Contenedor.appendChild(Hijo);

                    for (var i = 0; i < Datos[3].length; i++) {
                        Rama = Hijo.appendChild(document.createElement("option"));
                        Rama.setAttribute("value", Datos[3][i]);
                        Rama.textContent = Datos[4][i];
                        if (i == Datos[2]) { Rama.selected = true; }
                        Hijo.appendChild(Rama);
                    }
                }
                else if (Campo === "check") {
                    Contenedor = document.querySelector("#formulario");
                    //Creamos el campo
                    Hijo = Contenedor.appendChild(document.createElement("label"));
                    Hijo.htmlFor = Datos[1];
                    Hijo.textContent = Datos[0];
                    Hijo.setAttribute("class","lbl center");
                    Contenedor.appendChild(Hijo);

                    for (var i = 0; i < Datos[3].length; i++) {
                        Hijo = Contenedor.appendChild(document.createElement("input"));
                        Hijo.name = Datos[1];
                        Hijo.setAttribute("type", "checkbox");
                        Hijo.setAttribute("value", Datos[3][i]);
                        if (i == Datos[2]) { Hijo.checked = true; }
                        Contenedor.appendChild(Hijo);
                        
                        Hijo = Contenedor.appendChild(document.createElement("label"));
                        Hijo.htmlFor = Datos[1];
                        Hijo.textContent = Datos[4][i];
                        Hijo.setAttribute("class","lbl anchas");
                        Contenedor.appendChild(Hijo);
                    }

                }
                else if (Campo === "opcion") {
                    Contenedor = document.querySelector("#formulario");
                    //Creamos el campo
                    Hijo = Contenedor.appendChild(document.createElement("label"));
                    Hijo.htmlFor = Datos[1];
                    Hijo.textContent = Datos[0];
                    Hijo.setAttribute("class","lbl center");
                    Contenedor.appendChild(Hijo);

                    for (var i = 0; i < Datos[3].length; i++) {
                        Hijo = Contenedor.appendChild(document.createElement("input"));
                        Hijo.name = Datos[1];
                        Hijo.setAttribute("type", "radio");
                        Hijo.setAttribute("value", Datos[3][i]);
                        if (i == Datos[2]) { Hijo.checked = true; }
                        Contenedor.appendChild(Hijo);

                        Hijo = Contenedor.appendChild(document.createElement("label"));
                        Hijo.htmlFor = Datos[1];
                        Hijo.textContent = Datos[4][i];
                        Hijo.setAttribute("class","lbl anchas");
                        Contenedor.appendChild(Hijo);
                    }
                }
                break;
            default:
        }
        if (PrimeraVez) {
            Rama = Contenedor.parentNode.appendChild(document.createElement("a"));
            Rama.setAttribute("class","btn small")
            Rama.textContent = "Aceptar"
            Contenedor.parentNode.appendChild(Rama);
        }
        resetctrl();
    }
