const ITEM_TYPES = {
    image: createImage,
    audio: createAudio,
    video: createVideo,
};

function createImage(item) {
    const imgEl = document.createElement('img');
    imgEl.src = item.src;
    imgEl.classList = 'imgCard';

    return imgEl
}

function createAudio(item) {
    const audioEl = document.createElement('audio');
    audioEl.classList = 'audioCard';
    audioEl.src = item.src;
    audioEl.controls = true;

    return audioEl
}

function createVideo(item) {
    const videoEl = document.createElement('video');
    videoEl.classList = 'videoCard';
    videoEl.src = item.src;
    videoEl.controls = true;

    return videoEl
}

export function renderItems(item) {
    const divEl = document.createElement('div');
    divEl.classList = 'card';

    const type = ITEM_TYPES[item.type];
    divEl.appendChild(type(item));

    const h2El = document.createElement('h2');
    h2El.classList = 'titleCard';
    h2El.textContent = item.title;
    divEl.appendChild(h2El);

    return divEl
}