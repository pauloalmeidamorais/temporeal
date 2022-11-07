function showTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    if(hour<10) hour = "0"+hour;
    if(minute<10) minute = "0"+minute;
    if(second<10) second = "0"+second;
    var tempo = hour+":"+minute+":"+second;

    var somaVolume = -0.1;
    
    const audioSecond = document.querySelector("#audioSecond");
    audioSecond.volume = 0.2 + somaVolume;
    audioSecond.play();
    if(second=="00"){ // Emitir um som extra quando passar um minuto
        const audioMinute = document.querySelector("#audioMinute");
        audioMinute.volume = 0.8 + somaVolume;
        audioMinute.play();
    }
    
    
    document.getElementById("timer").innerHTML=tempo;
}
function initTime(){
    setInterval(showTime,1000);
}