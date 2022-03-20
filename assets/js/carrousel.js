let imgArray = document.querySelectorAll(".carrouselImage")
let carrousel = document.querySelector(".carrousel")
imgArray.forEach((item, i) => {
  item.style.left = "100%";
  item.style.transform = `translateX(${i*500}px)`
});

document.querySelector("#btnLeft").addEventListener("click",(e)=>{
  imgArray.forEach((item, i) => {
    //rajouter un if pour revenir a 0

    item.style.transform="translateX(100%)"
  });

})

document.querySelector("#btnMiddle").addEventListener("click",(e)=>{
  imgArray.forEach((item, i) => {
    //rajouter un if pour revenir a 0

    item.style.transform="translateX(100%)"
  });

})

document.querySelector("#btnRight").addEventListener("click",(e)=>{
  imgArray.forEach((item,i)=>{
    //rajouter un if pour revenir a 0

    item.style.transform="translateX(-100%)"
  })
})
