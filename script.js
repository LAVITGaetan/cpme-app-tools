function addUrl(current) {
    let element = document.getElementById('image-result-img');
    element.src = current;
    if (current == '') {
        element.src = 'https://picsum.photos/500';
    }
}

function changeImageBorderRadius(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.borderRadius = currentValue + "px";
}

function changeImageWidth(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.width = currentValue + "%";
    console.log(currentValue);
}

let finalApparence = 'none';

function changeImageApparence(selectedCard) {
    let result = document.getElementById('image-result-img');
    switch (selectedCard) {
        case 0:
            result.style.border = "10px solid #114d61";
            finalApparence = "10px solid #114d61";
            break;
        case 1:
            result.style.border = "10px solid #e74023"
            finalApparence = "10px solid #e74023";
            break;
        case 2:
            result.style.border = "10px solid #00adb9"
            finalApparence = "10px solid #00adb9";
            break;
        case 3:
            result.style.border = "5px solid #114d61"
            finalApparence = "5px solid #114d61";
            break;
        case 4:
            result.style.border = "5px solid #e74023"
            finalApparence = "5px solid #e74023";
            break;
        case 5:
            result.style.border = "5px solid #00adb9"
            finalApparence = "5px solid #00adb9";
            break;
        case 6:
            result.style.border = "2px solid #114d61"
            finalApparence = "2px solid #114d61";
            break;
        case 7:
            result.style.border = "2px solid #e74023"
            finalApparence = "2px solid #e74023";
            break;
        case 8:
            result.style.border = "2px solid #00adb9"
            finalApparence = "2px solid #00adb9";
            break;
    }
}

function getImage() {
    let copyText = document.querySelector("#copyInput");
    let result = document.getElementById('image-result-img');
    let finalBorderRadius = 'border-radius:' + result.style.borderRadius + ";";
    if(result.style.borderRadius == ''){
        finalBorderRadius = '';
    }
    let finalWidth = 'width:' + result.style.width + ";";
    let finalUrl = document.getElementById('image-result-img').src;
    copyText.value = '<div style="max-height:500px;height: auto;' + finalWidth + 'margin: auto;display: flex;align-items: center;justify-content: center;"><img src="' + finalUrl + '" style="border: ' + finalApparence + '; '+ finalBorderRadius + '"></div>';
    copyText.select();
    document.execCommand("copy");
    alert('Le code a été copié dans le presse-papier')
}






function changeFrameBorderRadius(currentValue) {
    let result = document.getElementById('image-result-video');
    result.style.borderRadius = currentValue + "px";
}

function changeFrameApparence(selectedCard) {
    let result = document.getElementById('image-result-video');
    switch (selectedCard) {
        case 0:
            result.style.border = "10px solid #114d61";
            finalApparence = "10px solid #114d61";
            break;
        case 1:
            result.style.border = "10px solid #e74023"
            finalApparence = "10px solid #e74023";
            break;
        case 2:
            result.style.border = "10px solid #00adb9"
            finalApparence = "10px solid #00adb9";
            break;
        case 3:
            result.style.border = "5px solid #114d61"
            finalApparence = "5px solid #114d61";
            break;
        case 4:
            result.style.border = "5px solid #e74023"
            finalApparence = "5px solid #e74023";
            break;
        case 5:
            result.style.border = "5px solid #00adb9"
            finalApparence = "5px solid #00adb9";
            break;
        case 6:
            result.style.border = "2px solid #114d61"
            finalApparence = "2px solid #114d61";
            break;
        case 7:
            result.style.border = "2px solid #e74023"
            finalApparence = "2px solid #e74023";
            break;
        case 8:
            result.style.border = "2px solid #00adb9"
            finalApparence = "2px solid #00adb9";
            break;
    }
}

function changeFrameUrl(current) {
    let element = document.getElementById('image-result-video');
    element.src = current;
    if (current == '') {
        element.src = 'https://www.youtube.com/embed/T8vRO2IaQGY';
    }
}

function getFrame() {
    let copyText = document.querySelector("#copyFrame");
    let result = document.getElementById('image-result-video');
    let finalBorderRadius = 'border-radius:' + result.style.borderRadius + ";";
    if(result.style.borderRadius == ''){
        finalBorderRadius = '';
    }
    let finalUrl = document.getElementById('image-result-img').src;
    copyText.value = '<iframe frameBorder="0" style="margin:auto;width: 90%;border: ' + finalApparence + '; '+ finalBorderRadius + '" src="' + finalUrl + '"></iframe>';
    copyText.value = '<div style="max-height:500px;height: auto;' + finalWidth + 'margin: auto;display: flex;align-items: center;justify-content: center;"><img src="' + finalUrl + '" ></div>';
    copyText.select();
    document.execCommand("copy");
    alert('Le code a été copié dans le presse-papier')
}
