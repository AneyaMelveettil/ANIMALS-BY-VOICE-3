function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/6DJVOPywZ/',modelReady);
}

function modelReady()
{
    classifier=cclassify(gotResults);
}

