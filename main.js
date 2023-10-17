var lion = 0;
var cat = 0;
var dog = 0;
var cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true, video:false});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BwvJ6WuTd/model.json',{probabilityThreshold :0.7}, modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error){
     console.log(error);
    } else{
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255)+ 1;
     random_number_g = Math.floor(Math.random() * 255)+ 1;
     random_number_b = Math.floor(Math.random() * 255)+ 1;

     document.getElementById('number_of_animals').innerHTML = "Number of Animals detected - "+results.length;
     document.getElementById('animal_detected').innerHTML = "Sound detected - "+results[0].label;

     document.getElementById("number_of_animals").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("animal_detected").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     img=document.getElementById("animal_img")
     if(results[0].label=='bark'){
        img.src='dog.jpeg';
        dog=dog+1;

     }
     else if(results[0].label=='meow'){
        img.src='cat.jpeg';
        cat=cat+1;
     }
     else{
        img.src='ear.jpeg';

     }
    }
}