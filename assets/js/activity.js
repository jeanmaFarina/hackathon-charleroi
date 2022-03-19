document.body.style.backgroundPosition = "center"
document.body.style.backgroundImage = "url(../assets/images/image0.jpg)"
let i= 0
document.querySelector("#previous").addEventListener("click",(e)=>{
  i = i -1
  if(i<0)
    i=2
  document.body.style.backgroundImage = `url(../assets/images/image${i}.jpg)`

})
document.querySelector("#next").addEventListener("click",(e)=>{
  i = i +1
  if(i>2)
    i=0
  document.body.style.backgroundImage = `url(../assets/images/image${i}.jpg)`

})
