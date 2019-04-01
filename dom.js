

let piano = document.getElementById('pushA');

function playAudio(event) { 
   piano.play(); 
 //  console.log('HELLOW')
  } 
piano.addEventListener('click', playAudio);
