console.log("welcome home");

// songs
let songs = [
  {
    songName: "mannat",
    filePath: "songs/mannat/song.mp3",
    cover: "songs/mannat/img.jpg",
  },
  {
    songName: "monster",
    filePath: "songs/monster/song.mp3",
    cover: "songs/monster/img.jpg",
  },
  {
    songName: "beliver",
    filePath: "songs/beliver/song.mp3",
    cover: "songs/beliver/img.jpg",
  },
  {
    songName: "badal barse",
    filePath: "songs/badal-barse/song.mp3",
    cover: "songs/badal-barse/img.jpg",
  },
  {
    songName: "khali bali",
    filePath: "songs/khali-bali/song.mp3",
    cover: "songs/khali-bali/img.jpg",
  },
  {
    songName: "bhoos ka dher",
    filePath: "songs/bhoos/song.mp3",
    cover: "songs/bhoos/img.jpg",
  },
  




];




// variables
let songIndex = 4;
let songnamehtml=document.getElementById('songname');
let songname=songs[songIndex]["songName"]
let songfile = songs[songIndex]["filePath"];
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio(songfile);
let waveLine = document.getElementById("waveline");
let songItems=Array.from(document.getElementsByClassName('songItems'))









// play pause
songItems.forEach((element,i)=>{
  element.getElementsByTagName('img')[0].src=songs[i].cover
  element.getElementsByClassName('sname')[0].innerText=songs[i].songName
})


masterPlay.addEventListener("click", () =>{
  if (audioElement.paused || audioElement.currentTime < 0) {
    audioElement.play();
    songnamehtml.innerHTML=songname
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    waveLine.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    waveLine.style.opacity = 0;
  }
});

const makePlays= ()=>{
  Array.from(document.getElementsByClassName('timeSpanIcons')).forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')
  })
}

Array.from(document.getElementsByClassName('timeSpanIcons')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makePlays()
    songIndex=parseInt(e.target.id);


  
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    
   
    audioElement.currentTime=0
    audioElement.src=(songs[songIndex].filePath)
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
 
  })
});



// progessbar
audioElement.addEventListener('timeupdate',()=>{


    progress=(audioElement.currentTime/audioElement.duration)*100
    myProgressBar.value=progress;
    
   
});


myProgressBar.addEventListener("change",()=>{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})



// next previous
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >5){
    songIndex=0
  }else{
    songIndex+=1
  }
  songnamehtml.innerText=songs[songIndex].songName
  audioElement.currentTime=0
  audioElement.src=songs[songIndex].filePath
  audioElement.play()

})

document.getElementById('pre').addEventListener('click',()=>{
  if(songIndex <0){
    songIndex=5
  }else{
    songIndex-=1
  }
  songnamehtml.innerText=songs[songIndex].songName

  audioElement.currentTime=0
  audioElement.src=songs[songIndex].filePath
  audioElement.play()
  

  
})




































document.addEventListener('keypress',(event)=>{
  key=event.key;
  if(key=="j"){
    audioElement.currentTime-=5;
  }
  else if(key=="l"){
    audioElement.currentTime+=5;
  }
  else if(key=="1"){
    myProgressBar.value=10;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="2"){
    myProgressBar.value=20;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="3"){
    myProgressBar.value=30;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="4"){
    myProgressBar.value=40;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="5"){
    myProgressBar.value=50;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="6"){
    myProgressBar.value=60;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="7"){
    myProgressBar.value=70;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="8"){
    myProgressBar.value=80;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=="9"){
    myProgressBar.value=90;
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    
  }
  else if(key=='k'){
    audioElement.pause()
  }
  
  
  
  
  
  
  
  

})