function setup() {
  canvas = createCanvas(400, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function draw() {
  image(video, 0, 0, 400, 300);
  classifier.classify(video, gotResults);
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    document.getElementById("result-object-name").innerHTML = results[0].label;
    document.getElementById("result-object-accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}



