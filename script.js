// declare constants for video controls
const video = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const volDwn = document.querySelector('.vol-down');
const volUp = document.querySelector('.vol-up');
const mute = document.querySelector('.mute');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

// removes controls if javascript file is successfully loaded
video.removeAttribute('controls');

// make custom controls visible 
controls.style.visibility = 'visible';

// add click event listener to play btn
play.addEventListener('click', playPause);

// switch play and pause icons
function switchPlayPauseIcon(){
    if (play.classList.contains('fa-play')){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    } else if (play.classList.contains('fa-pause')){
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
}

/* check state of video, 
   if paused -> change play to pause icon & play video
   else   -> change pause to play icon & pause video */
function playPause(){
    if(video.paused){
        switchPlayPauseIcon();
        video.play();
    } else {
        switchPlayPauseIcon();
        video.pause();
    }
}

// add event listener for stop button
// stop should pause video and start it frm the beginning
stop.addEventListener('click', stopVideo);

// if video ends, player should reset to start of video, and switch pause to play icon
video.addEventListener('ended', function(){
    stopVideo();
    switchPlayPauseIcon();
})

function stopVideo(){
    // if video is playing when stop button is click, switch the pause to play
    if (!video.paused){
        switchPlayPauseIcon();
    }
    // pause video
    video.pause();

    // reset video to the start
    video.currentTime = 0;
}

volDwn.addEventListener('click', softer);
volUp.addEventListener('click', louder);
// mute.addEventListener('click', silence);

let volume = video.volume;

function softer(){
    volume -= 0.1;
    if (volume < 0){
        volume = 0;
    }
    video.volume = volume;
    console.log(video.volume);
}

function louder() {
    volume += 0.1;
    if (volume > 0){
        volume = 1;
    }
    video.volume = volume;
    console.log(video.volume);
}

rwd.addEventListener('click', rewind);

function rewind() {
    video.currentTime -= 2;
    console.log(video.currentTime);
}

fwd.addEventListener('click', forward);

function forward(){
    video.currentTime += 2;
    console.log(video.currentTime);
}


function switchVid(fileName){
    video.src = fileName;
}