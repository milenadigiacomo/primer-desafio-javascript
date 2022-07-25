let primerPregunta;
for(let i=1; i<=3; i++){
    juego=parseInt(prompt("Ingrese la respuesta correcta. Tienes tres intentos. Cuántos hijos tiene Chiara Ferragni? OPCIONES: 2, 3, 1"));
    if(juego=="2"){
        alert("Felicitaciones, ingresaste la respuesta correcta. Pulsa aceptar para ver la proxima pregunta.");
    }else{
        console.log("Respuesta erronea, restan "+(3-i) +" intentos");
    }
}

let segundaPregunta;
for(let i=1; i<=3; i++){
    juego=prompt("Donde vive Chiara Ferragni? OPCIONES: ROMA, MILAN, PISA");
    if(juego=="Milan"){
        alert("Felicitaciones, ingresaste la respuesta correcta. Pulsa aceptar para ver la ultima pregunta.");
    }else{
        console.log("Respuesta erronea, restan "+(3-i) +" intentos");
    }
}

let tercerPregunta;
for(let i=1; i<=3; i++){
    juego=prompt("Ultima pregunta: Quién es el marido Chiara Ferragni? OPCIONES: EDOARDO, FEDEZ, GIUSEPPE");
    if(juego=="Fedez"){
        alert("Felicitaciones, ingresaste la respuesta correcta. Pasaste al nivel 2.");
        break;
    }else{
        console.log("Respuesta erronea, restan "+(3-i) +" intentos");
    }
}