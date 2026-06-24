let songs = [
    "Kaathalae Kaathalae - SenSongsMp3.Co.mp3",
    "Dhoom Machale Sunidhi Chauhan 320 Kbps.mp3",
    "Tum Hi Ho Aashiqui 2 320 Kbps.mp3",
    "Imagine_Dragons_-_Believer_NPBM2020_(mp3.pm).mp3",
    "Gunday(KoshalWorld.Com).mp3"
];

let songNames = [
    "Kadale Kadale",
    "Dhoom",
    "Tum Hi Ho",
    "Believer",
    "Gunday"
];

let currentSong = 0;

function playsong(songName,songfile,coverfile) {
    console.log(coverfile);
    document.getElementById("nowplaying").innerHTML =
  "Now playing:" + songName;
    document.getElementById("cover").src =coverfile;
   let player =
document.getElementById("mainplayer");
player.src= songfile;
player.play();

}
function toggleplay()  {
    let player =
    document.getElementById("mainplayer");
    if (player.paused) {
     player.play();
    } else {
      player.pause();
    }


}
function previoussong() {

    if(currentSong == 0){
    playsong("Gunday","Gunday(KoshalWorld.Com).mp3","gunday.jpg");
             currentSong = 4;
   }
    else if(currentSong == 1){

     playsong("Kadale Kadale","Kaathalae Kaathalae - SenSongsMp3.Co.mp3","96.jpg");
        currentSong = 0;

    }
    

    else if(currentSong == 2){
        playsong("DHOOM","Dhoom Machale Sunidhi Chauhan 320 Kbps.mp3","dhoom.jpg");
        currentSong = 1;
    }

    else if(currentSong == 3){
        playsong("Tum Hi Ho","Tum Hi Ho Aashiqui 2 320 Kbps.mp3","tum hi ho.jpg");
        currentSong = 2;
    }

    else if(currentSong == 4){
        playsong("Believer","Imagine_Dragons_-_Believer_NPBM2020_(mp3.pm).mp3","Beliver dragons.jpg");
        currentSong = 3;
    }
    else if(currentSong == 5){
    playsong("Kadale Kadale","Kaathalae Kaathalae - SenSongsMp3.Co.mp3","96.jpg");
    currentSong = 4;
}

else if(currentSong == 6){
    playsong("RRR","RRR.mp3","RRR.jpg");
    currentSong = 5;
}

else if(currentSong == 7){
    playsong("Bar Bar Dekho","Kala Chashma Inderbir Sidhu 128 Kbps.mp3","kala cahsma.jpg");
    currentSong = 6;
}

else if(currentSong == 8){
    playsong("Param Sundari","Param Sundari(KoshalWorld.Com).mp3","param sundari.jpg");
    currentSong = 7;
}

else if(currentSong == 9){
    playsong("Vatti","vatti coming.mp3","vatti coming.jpg");
    currentSong = 8;
}
}


function nextsong() {
    
    if(currentSong == 0){
        playsong("DHOOM","Dhoom Machale Sunidhi Chauhan 320 Kbps.mp3","dhoom.jpg");
        currentSong = 1;
    }

    else if(currentSong == 1){
        playsong("Tum Hi Ho","Tum Hi Ho Aashiqui 2 320 Kbps.mp3","tum hi ho.jpg");
        currentSong = 2;
    }

    else if(currentSong == 2){
        playsong("Believer","Imagine_Dragons_-_Believer_NPBM2020_(mp3.pm).mp3","Beliver dragons.jpg");
        currentSong = 3;
    }

    else if(currentSong == 3){
        playsong("Gunday","Gunday(KoshalWorld.Com).mp3","gunday.jpg");
        currentSong = 4;
    }
    
    
    else if(currentSong == 4){
    playsong("Kadale Kadale",
    "Kaathalae Kaathalae - SenSongsMp3.Co.mp3",
    "96.jpg");
    currentSong = 5;
   }

    else if(currentSong == 5){
    playsong("RRR",
    "RRR.mp3",
    "RRR.jpg");
    currentSong = 6;
    }

    else if(currentSong == 6){
    playsong("Bar Bar Dekho",
    "Kala Chashma Inderbir Sidhu 128 Kbps.mp3",
    "kala cahsma.jpg");
    currentSong = 7;
    }

    else if(currentSong == 7){
    playsong("Param Sundari",
    "Param Sundari(KoshalWorld.Com).mp3",
    "param sundari.jpg");
    currentSong = 8;
    }

    else if(currentSong == 8){
    playsong("Vatti",
    "vatti coming.mp3",
    "vatti coming.jpg");
    currentSong = 9;
     }

    else if(currentSong == 9){
    playsong("Ra One",
    "chammak challo.mp3",
    "raone.jpg");
    currentSong = 0;
    }

}

    let player =
    document.getElementById("mainplayer");

    player.addEventListener("ended",
   function() {
    nextsong();
    });

    let volume = document.getElementById("volume");

    volume.addEventListener("input", function() {
    player.volume = volume.value;
});

{
let player = document.getElementById("mainplayer");

player.addEventListener("timeupdate", function () {

    let current = Math.floor(player.currentTime);
    let duration = Math.floor(player.duration);

    let currentMin = Math.floor(current / 60);
    let currentSec = current % 60;

    let durationMin = Math.floor(duration / 60);
    let durationSec = duration % 60;

    if (currentSec < 10) currentSec = "0" + currentSec;
    if (durationSec < 10) durationSec = "0" + durationSec;

    document.getElementById("time").innerHTML =
        currentMin + ":" + currentSec +
        " / " +
        durationMin + ":" + durationSec;
});
}
let progress = document.getElementById("progress");

player.addEventListener("timeupdate", function () {

    let percentage =
    (player.currentTime / player.duration) * 100;

    progress.value = percentage;

});

progress.addEventListener("input", function () {

    player.currentTime =
    (progress.value / 100) * player.duration;

});















