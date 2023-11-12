

const imageElement = document.querySelector('img')

function lightswitch(){
 
  if(imageElement.classList.contains('on')){
    imageElement.src = "images/b_off.png"
  }else{imageElement.src = 'images/b_on.png'}
  imageElement.classList.toggle('on')
}
  

imageElement.addEventListener("click", lightswitch)

