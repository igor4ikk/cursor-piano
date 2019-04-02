
const audio= document.querySelectorAll('.piano_song audio')
const buttons = document.querySelectorAll('.piano_song button')

for(let i=0; i< buttons.length; i++ ){
  buttons[i].addEventListener('click', function(){
      audio[i].play();
    })
  }
