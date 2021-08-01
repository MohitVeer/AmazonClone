const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");  
const prev = document.getElementById("prev");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");

const progress_div = document.getElementById("progress_div")


const songs = [
  {
    name: "mohit-2",
    title: "How Bad Do You",
    artist: "Sevyn Streeter",
  },
  {
    name: "mohit-3",
    title: "Go Hard or Go Home",
    artist: "Unknown",
  },
  {
    name: "mohit-4",
    title: "How We Roll",
    artist: "Don Omar",
  },
  {
    name: "mohit-5",
    title: "Payback",
    artist: "Unknown",
  },
  {
    name: "mohit-6",
    title: "Ride Out",
    artist: "Tyga, Wale, Yg, Rich Homie Quan",
  },
  {
    name: "mohit-7",
    title: "See You Again",
    artist: "Wiz khalifa ft. Charlie Puth",
  },
];


let isPlaying = false;

// For play funtion

// play.addEventListener("click",
    const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

// For pause funtion

// pause.addEventListener("click",
    const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};


play.addEventListener("click",() =>{
    isPlaying ? pauseMusic() : playMusic();
    // ternary operatr
})


// changing the mjsic data



const loadSong = (songs) =>{
    artist.textContent = songs.artist;
    title.textContent = songs.title;
    music.src = "assets/music/" + songs.name + ".mp3";
    img.src = "assets/images/" + songs.name + ".jfif"

}

songIndex = 0;


const nextSong = () => {
    // songIndex++;
    songIndex = (songIndex + 1) % songs.length
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    // songIndex++;
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// progress js work

music.addEventListener("timeupdate", ( event ) => {
  const { currentTime, duration } = event.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progress.style.width =`${progress_time}%`;

  //music time update 

  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);
  
  let tot_duration = `${min_duration}:${sec_duration}`;
  if (duration) {
    total_duration.textContent = `${tot_duration}`;

  }

  // current time update

  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime / 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTimes}`
  }

  let tot_currentTime  = `${min_currentTime}:${sec_currentTime}`;
  
   current_time.textContent = `${tot_currentTime}`;

});

// progress onclick 

progress_div.addEventListener("click", (event) =>{
  const { duration } = music;
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  music.currentTime = move_progress;
}); 

// mmusic change function
music.addEventListener("ended" , nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);



