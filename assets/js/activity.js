let bg = document.getElementById('idbg');

bg.style.backgroundPosition = "center"
bg.style.backgroundImage = "url(../assets/images/image0.jpg)"
let i= 0
document.getElementById("previous").addEventListener("click",(e)=>{
  i = i -1
  if(i<0)
    i=2
  bg.style.opacity = "0"
  bg.style.backgroundImage = `url(../assets/images/image${i}.jpg)`
  bg.style.opacity = "1"
})
document.getElementById("next").addEventListener("click",(e)=>{
  i = i +1
  if(i>2)
    i=0
  bg.style.opacity = "0"
  bg.style.backgroundImage = `url(../assets/images/image${i}.jpg)`
  bg.style.opacity = "1"
})
