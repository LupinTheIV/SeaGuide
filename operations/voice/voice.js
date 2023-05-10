var artyom = new Artyom();

document.querySelector("#voz").addEventListener('click', function(){
    artyom.say("sonido activado");
});

artyom.addCommands({
    indexes: [
        "ABRIR PUERTA PRINCIPAL",
        "CERRAR PUERTA PRINCIPAL", 
        "ABRIR VENTANA DE SALA",
        "CERRAR VENTANA DE SALA"
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

