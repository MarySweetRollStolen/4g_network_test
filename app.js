document.getElementById('buttonPopUpOpen').addEventListener('click', () => {
    document.querySelector('.popup-back').style.display = "flex";
})

document.getElementById('buttonPopUpClose').addEventListener('click', () => {
    document.querySelector('.popup-back').style.display = "none";
})

function generateImg(source) {
    const img = document.createElement('img');
    img.src = source;
    img.style.width = '60px';
    img.style.height = '60px';
    img.style.margin = '5px';
    return img;
}

function generateImgArray() {
    const imgSources = [
        'BSC.jpg',
        'bts.jpg',
        'EIR.png',
        'enodeb.jpg',
        'mme.jpg',
        'pcrf.jpg',
        'hss.png',
        'pdngate.png',
        'servgate.png'
    ]
    let imgArray = [];
    for (let i = 0; i < imgSources.length; i++) {
        imgArray.push(generateImg('images/components/' + imgSources[i]));
    }
    return imgArray;
}

imgArray = generateImgArray();
imgArray.forEach(img => {
document.getElementById('component').appendChild(img);
});

