function changeImageBorderRadius(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.borderRadius = currentValue + "px";
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
    result.style.Width = currentValue + "%";
    console.log(currentValue);
}

function changeImageBorderColor(currentValue) {
    let result = document.getElementById('image-result-img');
    result.style.borderColor = currentValue;
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
    let finalBorderWidth = 'border-width:' +  result.style.borderWidth + ";";
    let finalBorderRadius = 'border-radius:' +  result.style.borderRadius + ";";
    let finalBorderColor = 'border-color:' +  result.style.borderColor + ';';
    let finalHeight = 'height:' + container.style.height + ";";
    let finalWidth = 'width:' + result.style.Width + ";";
    let finalBorderStyle = "border-style: solid";
    copyText.value = '<div style="height: auto;width: 90%;margin: auto;display: flex;align-items: center;justify-content: center;"><img src="' + url + '" style="' + finalBorderWidth + finalBorderColor + finalBorderRadius + finalHeight + finalWidth + finalBorderStyle + '"></img></div>';
    copyText.select();
    document.execCommand("copy");
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