console.log("Welcome to the spotify streaming services");
//Initialinzing variables
let songIndex=0;
let audioElement= new Audio('/songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementById('songItems'))
let songs=[
    {songName: "It's always blue", filePath: "/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cartel", filePath: "/songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "They Mad", filePath: "/songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Plug Walk", filePath: "/songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song Title", filePath: "/songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Safety Dance", filePath: "/songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Back it Up", filePath: "/songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "The girl", filePath: "/songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Orange", filePath: "/songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "The Love", filePath: "/songs/10.mp3", coverPath: "covers/10.jpg"},
]
 
//audioElement.play()
songItems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].filePath;
})
//Handle Play Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        // masterPlay.remove('/circle-pause-solid.svg');
        // masterPlay.add('/circle-play-solid.svg');
        gif.style.opacity=0;
        audioElement.pause();
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
console.log("Time update triggered");
myProgressBar.value=parseInt((audioElement.currentTime/audioElement.duration)*100);
})
myProgressBar.addEventListener(('change'),()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
