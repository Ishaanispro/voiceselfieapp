var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}


recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie"){
        console.log("taking your selfie in next 5 seconds.");
        speak();
    }
    
}

function speak(){
    var synth = window.SpeechSynthesis;
    var speak_data = "taking your selfie in nest 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
    take_selfie();
    save();
    },5000);
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 180,
    height: 180,
    image_format: 'jpeg',
    jpeg_quality: 90
});



