const btnStart = document.getElementById('voice');
const text_area = document.getElementById('text');

const rec = new webkitSpeechRecognition();

rec.continuous = true;
rec.lang = 'es-ES';
rec.interimResult = false;

btnStart.addEventListener('click', ()=>{
    rec.start();
});

rec.onresult = (event) =>{
    const txt = event.results[event.results.length - 1][0].transcript;
    console.log(txt);
    text_area.value = txt;
    console.log(txt.event);
}

