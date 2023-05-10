var artyom = new Artyom();

document.querySelector("#voz").addEventListener('click', function(){
    artyom.say("bienvenido, activando el servicio de reconocimiento de voz");
});

artyom.addCommands({
    indexes: [
        "ABRIR PUERTA PRINCIPAL",
        "CERRAR PUERTA PRINCIPAL", 
        "ABRIR VENTANA DE SALA",
        "CERRAR VENTANA DE SALA",
        "ABRIR BAÑO DE VISITANTES",
        "CERRAR BAÑO DE VISITANTES",
        "ABRIR CUARTO 3",
        "CERRAR CUARTO 3",
        "ABRIR VENTANA DEL CUARTO 3",
        "CERRAR VENTANA DEL CUARTO 3",
        "ABRIR CUARTO DOS",
        "CERRAR CUARTO DOS",
        "ABRIR VENTANA DEL CUARTO DOS",
        "CERRAR VENTANA DEL CUARTO DOS",
        "ABRIR CUARTO PRINCIPAL",
        "CERRAR CUARTO PRINCIPAL",
        "ABRIR VENTANA DEL CUARTO PRINCIPAL",
        "CERRAR VENTANA DEL CUARTO PRINCIPAL",
        "PRENDER LUZ DE LA SALA",
        "APAGAR LUZ DE LA SALA",
        "PRENDER LA LUZ DE LA COCINA",
        "APAGAR LA LUZ DE LA COCINA",
        "PRENDER LA LUZ DEL CUARTO 3",
        "APAGAR LA LUZ DEL CUARTO 3",
        "PRENDER LA LUZ DEL CUARTO DOS",
        "APAGAR LA LUZ DEL CUARTO DOS",
        "PRENDER LA LUZ DEL CUARTO PRINCIPAL",
        "APAGAR LA LUZ DEL CUARTO PRINCIPAL",
        "PRENDER LA LUZ DEL BAÑO DE VISITANTES",
        "APAGAR LA LUZ DEL BAÑO DE VISITANTES",
        "PRENDER LA LUZ DEL BAÑO PRINCIPAL",
        "APAGAR LA LUZ DEL BAÑO PRINCIPAL"
    ],
    action: function(i){
        if(i == 0){      
            document.querySelector("#mainDoor").style.transform = "rotate(20deg)";
            artyom.say("ABRIENDO PUERTA PRINCIPAL");
            console.log("Puerta Principal abierta");
        }else if(i == 1){
            artyom.say("CERRANDO PUERTA PRINCIPAL");
            document.querySelector("#mainDoor").style.transform = "rotate(0deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 2) {
            artyom.say("ABRIENDO VENTANA DE SALA");
            document.querySelector("#windowLivingRoom").style.backgroundColor = "white";
            console.log("Ventana de sala abierta");
        }else if(i == 3) {
            artyom.say("CERRANDO VENTANA DE SALA");
            document.querySelector("#windowLivingRoom").style.backgroundColor = "rgb(143, 225, 255)";
            console.log("Ventana de sala cerrada");
        }else if(i == 4){
            artyom.say("ABRIENDO PUERTA DEL BAÑO DE VISITANTES");
            document.querySelector("#bathroom2Door").style.transform = "rotate(20deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 5){
            artyom.say("CERRANDO PUERTA DEL BAÑO DE VISITANTES");
            document.querySelector("#bathroom2Door").style.transform = "rotate(0deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 6){
            artyom.say("ABRIENDO PUERTA DEL CUARTO 3");
            document.querySelector("#room3Door").style.transform = "rotate(20deg)"//REVISAR
            console.log("Puerta Principal abierta");
        }else if(i == 7){
            artyom.say("CERRANDO PUERTA DEL CUARTO 3");
            document.querySelector("#room3Door").style.transform = "rotate(0deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 8) {
            artyom.say("ABRIENDO VENTANA DEL CUARTO 3");
            document.querySelector("#windowRoom3").style.backgroundColor = "white";
            console.log("Ventana de sala abierta");
        }else if(i == 9) {
            artyom.say("CERRANDO VENTANA DEL CUARTO 3");
            document.querySelector("#windowRoom3").style.backgroundColor = "rgb(143, 225, 255)";
            console.log("Ventana de sala abierta");
        }else if(i == 10){
            artyom.say("ABRIENDO PUERTA DEL CUARTO 2");
            document.querySelector("#room2Door").style.transform = "rotate(20deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 11){
            artyom.say("CERRANDO PUERTA DEL CUARTO 2");
            document.querySelector("#room2Door").style.transform = "rotate(0deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 12) {
            artyom.say("ABRIENDO VENTANA DEL CUARTO 2");
            document.querySelector("#windowRoom2").style.backgroundColor = "white";
            console.log("Ventana de sala abierta");
        }else if(i == 13) {
            artyom.say("CERRANDO VENTANA DEL CUARTO 2");
            document.querySelector("#windowRoom2").style.backgroundColor = "rgb(143, 225, 255)";
            console.log("Ventana de sala abierta");
        }else if(i == 14){
            artyom.say("ABRIENDO PUERTA DEL CUARTO PRINCIPAL");
            document.querySelector("#mainRoomDoor").style.transform = "rotate(80deg)"//REVISAR
            console.log("Puerta Principal abierta");
        }else if(i == 15){
            artyom.say("CERRANDO PUERTA DEL CUARTO PRINCIPAL");
            document.querySelector("#mainRoomDoor").style.transform = "rotate(0deg)"
            console.log("Puerta Principal abierta");
        }else if(i == 16) {
            artyom.say("ABRIENDO VENTANA DEL CUARTO PRINCIPAL");
            document.querySelector("#windowMainRoom").style.backgroundColor = "white";
            console.log("Ventana de sala abierta");
        }else if(i == 17) {
            artyom.say("CERRANDO VENTANA DEL CUARTO PRINCIPAL");
            document.querySelector("#windowMainRoom").style.backgroundColor = "rgb(143, 225, 255)";
            console.log("Ventana de sala abierta");
        }else if(i == 18) {
            artyom.say("LUZ DE SALA ENCENDIDA");
            document.querySelector("#lightLivingRoom").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 19) {
            artyom.say("LUZ DE SALA APAGADA");
            document.querySelector("#lightLivingRoom").style.color = "black";
            console.log("Ventana de sala abierta");
        }else if(i == 20) {
            artyom.say("LUZ DE LA COCINA ENCENDIDA");
            document.querySelector("#lightkitchen").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 21) {
            artyom.say("LUZ DE LA COCINA APAGADA");
            document.querySelector("#lightkitchen").style.color = "black";
            console.log("Ventana de sala abierta");
        }
        else if(i == 22) {
            artyom.say("LUZ DEL CUARTO 3 ENCENDIDA");
            document.querySelector("#lightRoom3").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 23) {
            artyom.say("LUZ DEL CUARTO 3 APAGADA");
            document.querySelector("#lightRoom3").style.color = "black";
            console.log("Ventana de sala abierta");
        }else if(i == 24) {
            artyom.say("LUZ DEL CUARTO 2 ENCENDIDA");
            document.querySelector("#lightRoom2").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 25) {
            artyom.say("LUZ DEL CUARTO 2 APAGADA");
            document.querySelector("#lightRoom2").style.color = "black";
            console.log("Ventana de sala abierta");
        }else if(i == 26) {
            artyom.say("LUZ DEL CUARTO PRINCIPAL ENCENDIDA");
            document.querySelector("#lightMainRoom").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 27) {
            artyom.say("LUZ DEL CUARTO PRINCIPAL APAGADA");
            document.querySelector("#lightMainRoom").style.color = "black";
            console.log("Ventana de sala abierta");
        }else if(i == 28) {
            artyom.say("LUZ DEL BAÑO ENCENDIDA");
            document.querySelector("#lightBathRoom2").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 29) {
            artyom.say("LUZ DEL BAÑO APAGADA");
            document.querySelector("#lightBathRoom2").style.color = "black";
            console.log("Ventana de sala abierta");
        }else if(i == 30) {
            artyom.say("LUZ DEL BAÑO ENCENDIDA");
            document.querySelector("#lightBathRoom1").style.color = "rgb(173, 173, 27)";
            console.log("Luz de sala encendida");
        }else if(i == 31) {
            artyom.say("LUZ DEL BAÑO APAGADA");
            document.querySelector("#lightBathRoom1").style.color = "black";
            console.log("Ventana de sala abierta");
        }
    }
});

artyom.initialize({
    lang:"es-ES",
    debug:true,
    listen:true,
    continuous: true,
    speed:0.9,
    mode:"normal"
});

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }else{
        console.log(recognized);
    }
});

