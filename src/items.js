import image1 from '../src/media/images/1.jpeg';
import image2 from '../src/media/images/3.jpeg';
import image3 from '../src/media/images/2.jpeg';
import image4 from '../src/media/images/4.gif';
import audio1 from '!file-loader!../src/media/audio/1.mp3';
import audio2 from '!file-loader!../src/media/audio/2.mp3';
import audio3 from '!file-loader!../src/media/audio/3.mp3';
import video1 from '!file-loader!../src/media/video/1.mp4';
import video2 from '!file-loader!../src/media/video/2.mp4';


export const items = [
    {id: 1, type: 'image', title: 'Осень', src: image1},
    {id: 2, type: 'image', title: 'Домик в деревне', src: image2},
    {id: 3, type: 'image', title: 'Горы', src: image3},
    {id: 4, type: 'image', title: 'Котейка', src: image4},
    {id: 5, type: 'audio', title: 'Птички в лесу', src: audio1},
    {id: 6, type: 'audio', title: 'Relax', src: audio2},
    {id: 7, type: 'audio', title: 'Ночью в лесу...', src: audio3},
    {id: 8, type: 'video', title: 'Never gonna give you up', src: video1},
    {id: 9, type: 'video', title: 'Морской прибой', src: video2},
];