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
function changeImageBorderColor(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.borderColor = currentValue;
    console.log(currentValue);
}
function changeImageBorderWidth(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.borderWidth = currentValue + "px";
    console.log(currentValue);
}

function changeImageHeight(currentValue) {
    let result = document.getElementById('image-result-container');
    result.style.height = currentValue + "px";
    console.log(currentValue);
}

function changeImageWidth(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.width = currentValue + "%";
    console.log(currentValue);
}




function itemMouseOver(current) {
    let element = document.getElementById('jsIcon-' + current);
    element.src = 'images/icon-components-white.png';
}

function itemMouseLeave(current) {
    let element = document.getElementById('jsIcon-' + current);
    element.src = 'images/icon-components-yellow.png';
}

function itemClick(current) {
    let element = document.getElementById('jsContent-' + current);
    element.style.display = 'block';
    document.getElementById('components-container').style.display = 'flex';
    document.getElementById('components-image-container').style.display = 'none';
    document.getElementById('components-video-container').style.display = 'none';
    document.getElementById('components-btn-container').style.display = 'none';
    document.getElementById('components-more-container').style.display = 'none';
    document.getElementById('content-title').innerHTML = 'Choisissez un composant à créer';
}

function getImage() {
    let copyText = document.querySelector("#copyInput");
    let url = "https://picsum.photos/200/300";
    let result = document.getElementById('image-result-img');
    let container = document.getElementById('image-result-container');
    let finalBorderWidth = 'border-width:' + result.style.borderWidth + ";";
    let finalBorderRadius = 'border-radius:' + result.style.borderRadius + ";";
    let finalBorderColor = 'border-color:' + result.style.borderColor + ';';
    let finalHeight = 'height:' + container.style.height + ";";
    let finalWidth = 'width:' + result.style.width + ";";
    let finalBorderStyle = "border-style: solid";
    let finalUrl = document.getElementById('image-result-img').src;
    copyText.value = '<div style="max-height:500px;height: auto;' + finalWidth + 'margin: auto;display: flex;align-items: center;justify-content: center;"><img src="' + finalUrl + '" style="' + finalBorderWidth + finalBorderColor + finalBorderRadius + finalHeight + finalBorderStyle + '"></div>';
    copyText.select();
    document.execCommand("copy");
    alert('Le code a été copié dans votre presse-papier')
}

function selectedCard(current) {
    switch (current) {

        case 0:
            console.log('card 0 selected');
            document.getElementById('content-title').innerHTML = 'Créer un composant <span class="title-hero">image</span>';
            document.getElementById('components-container').style.display = 'none';
            document.getElementById('components-image-container').style.display = 'block';
            break;

        case 1:
            console.log('card 1 selected');
            document.getElementById('content-title').innerHTML = 'Créer un composant <span class="title-hero">vidéo</span>';
            document.getElementById('components-container').style.display = 'none';
            document.getElementById('components-video-container').style.display = 'block';
            break;

        case 2:
            console.log('card 2 selected');
            document.getElementById('content-title').innerHTML = 'Créer un composant <span class="title-hero">Bouton</span>';
            document.getElementById('components-container').style.display = 'none';
            document.getElementById('components-btn-container').style.display = 'block';
            break;

        case 3:
            console.log('card 3 selected');
            document.getElementById('content-title').innerHTML = 'Créer un composant <span class="title-hero">autre</span>';
            document.getElementById('components-container').style.display = 'none';
            document.getElementById('components-more-container').style.display = 'block';
            break;
    }

}

/*FRAME*/
function changeVideoBorderRadius(currentValue) {
    let result = document.getElementById('image-result-video');
    result.style.borderRadius = currentValue + "px";
}
function changeVideoBorderColor(currentValue) {
    let result = document.getElementById('image-result-video');
    result.style.borderTopColor = currentValue;
    console.log(currentValue);
}
function changeVideoBorderWidth(currentValue) {
    let result = document.getElementById('image-result-video');
    result.style.borderTopWidth = currentValue + "px";
    console.log(currentValue);
}

function changeFrameUrl() {
    let element = document.getElementById('image-result-frame');
    element.src = current;
    if (current == '') {
        element.src = 'https://www.youtube.com/embed/T8vRO2IaQGY';
    }
}

function getFrame() {
    console.log(true);
    let copyText = document.querySelector("#copyVideo");
    let result = document.getElementById('image-result-video');
    let finalBorderTopWidth = 'border-top-width:' + result.style.borderTopWidth + ";";
    let finalBorderRadius = 'border-radius:' + result.style.borderRadius + ";";
    let finalBorderTopColor = 'border-top-color:' + result.style.borderTopColor + ';';
    let finalBorderStyle = "border-style: solid";
    let finalUrl = result.src;
    copyText.value = '<iframe frameBorder="0" style="margin:auto;width: 90%;' + finalBorderTopWidth + finalBorderRadius + finalBorderTopColor + finalBorderStyle + '" src="' + finalUrl + '"></iframe>';
    copyText.select();
    document.execCommand("copy");
    alert('Le code a été copié dans votre presse-papier')
}

/* Bouton */
let btn0 = document.getElementById('btn-type-0');
let btn1 = document.getElementById('btn-type-1');
let btn2 = document.getElementById('btn-type-2');
let btn3 = document.getElementById('btn-type-3');
let btn4 = document.getElementById('btn-type-4');
let btn5 = document.getElementById('btn-type-5');
let btn6 = document.getElementById('btn-type-6');
let btn7 = document.getElementById('btn-type-7');
let btn8 = document.getElementById('btn-type-8');

function changeButtonText(current) {
    let btn = document.querySelectorAll('.btn');
    if (current == '') {
        for (let i = 0; i < 10; i++) {
            btn[i].innerText = 'Bouton ' + i;
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            btn[i].innerText = current;
        }

    }
}
function changeButtonBorderRadius(currentValue) {
    let btn = document.querySelectorAll('.btn');
    for (let i = 0; i < 10; i++) {
        btn[i].style.borderRadius = currentValue + "px";
    }
}

function changeButtonBorderColor(currentValue) {
    btn1.style.borderColor = currentValue;
    btn3.style.borderColor = currentValue;
}

function changeButtonBackgroundColor(currentValue) {
    btn2.style.backgroundColor = currentValue;
    btn3.style.backgroundColor = currentValue;
}

function getButton(type, color) {
    let copyText = document.querySelector("#copyButton");
    let finalUrl = document.getElementById('url-input');
    let finalText = document.getElementById('text-input');

    if(finalText.value == ''){
        finalText.value = 'Télécharger'
    }
    switch (type) {
        case 'underline':
            copyText.value = '<a href="' + finalUrl.value + '" download style="margin:20px auto;padding:12px;font-size:17px;text-align:center;display:block;text-decoration:underline;color:'+color+'">' + finalText.value + '</a>';
            break;

        case 'outline':
            copyText.value = '<a href="' + finalUrl.value + '" download style="margin:20px auto;padding:12px;font-size:17px;text-align:center;display:block;border:2px solid '+color+'; color:'+color+'">' + finalText.value + '</a>';
            break;
        case 'filled':
            copyText.value = '<a href="' + finalUrl.value + '" download style="margin:20px auto;padding:12px;font-size:17px;text-align:center;display:block;background: '+color+'; color: #fff">' + finalText.value + '</a>';
            break;
    }
    copyText.select();
    document.execCommand("copy");
    alert('Le bouton a été copié dans votre presse-papier')
}