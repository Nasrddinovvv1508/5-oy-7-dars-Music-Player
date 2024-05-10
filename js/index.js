// elements 
let musicContainerEl = document.querySelector(`.music-container`);
let albumCoverImgEl = document.querySelector(`.album-cover-img`);
let progresEl = document.querySelector(`#progress`);
let progressContainerEl = document.querySelector(`#progress-container`);
let titleEL = document.getElementById('title');
let audioEl = document.querySelector(`audio`)

// buttons
let backwordBtn = document.getElementById(`backword`);
let forwardBtn = document.getElementById(`forward`);
let playBtn = document.getElementById(`play`);


// All tracks
let tracks = [
    'DrDre-Eminem-ForgotAboutDre',
    `Eminem-Beautiful`,
    'Eminem-Business',
    `Eminem-LoseYourself`,
    `Eminem-NotAfraid`,
    `Eminem-RapGod`,
    `Eminem-Venom`,
];

let currentTrack = 0;

// change tracks
let changeMusic = (song) => {
    titleEL.textContent = `${song}`
    audioEl.src = `./audio/${song}.mp3`;
    albumCoverImgEl.src = `./img/${song}.png`;
}

changeMusic(tracks[currentTrack]);

// play 
let play = () => {
    musicContainerEl.classList.add('play');
    document.querySelector('.btn-big').innerHTML = `<i class="fa-solid fa-pause"></i>`
    audioEl.play();
}

// pause 
let pause = () => {
    musicContainerEl.classList.remove('play');
    document.querySelector('.btn-big').innerHTML = `<i class="fa-solid fa-play"></i>`
    audioEl.pause();
}

// play song
let playSong = () => {
    if (musicContainerEl.classList.contains(`play`)) {
        pause();
    } else {
        play();
    }
}

// forward song
let forwardSong = () => {
    currentTrack++;
    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }
    changeMusic(tracks[currentTrack]);
    audioEl.play();
    musicContainerEl.classList.add('play');
    document.querySelector('.btn-big').innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

// forward song
let backwordSong = () => {
    currentTrack--;
    if (currentTrack < 0) {
        currentTrack = tracks.length - 1;
    }
    changeMusic(tracks[currentTrack]);
    audioEl.play();
    musicContainerEl.classList.add('play');
    document.querySelector('.btn-big').innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

// progress
let progres = (e) => {
    let {currentTime, duration} = e.target;
    let timeWidth = (currentTime * 100) / duration;

    if (timeWidth == 100) {
        currentTrack++;
        changeMusic(tracks[currentTrack]);
        audioEl.play();
    }

    console.log(timeWidth);
    progressContainerEl.style.width = `${timeWidth}%`;
}


// events
playBtn.addEventListener(`click`, playSong);
forwardBtn.addEventListener(`click`, forwardSong);
backwordBtn.addEventListener(`click`, backwordSong);
audioEl.addEventListener(`timeupdate`, progres);