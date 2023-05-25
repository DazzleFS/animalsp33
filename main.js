dog = 0
cat = 0
cow = 0
lion = 0

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eyRQTXYiO/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("hfourid").innerHTML = "Barking - " + dog + "Meowing - " + cat + "Mooing - " + cow + "Roaring" + lion; 
        document.getElementById("hthreeid").innerHTML = 'I Can Hear - ' + results[0].label;

        img = document.getElementById('cat');
        img1 = document.getElementById('cow');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('hi');

        if (results[0].label == "Barking") {
            img2 = 'dog.jpg';
            dog + 1;
        } else if (results[0].label == "meowing") {
             img = 'cat.jpg';
             cat + 1;
        } else if (results[0].label == "mooing") {
            img1 = 'cow.jpg';
            cow + 1;
        } else if (results[0].label == "roar"){
            img3 = 'lion.webp';
            lion + 1;
        } else{
            img4 = 'hi.png';
        }
    }
}