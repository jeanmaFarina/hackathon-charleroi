document.querySelector('#run').addEventListener('click' , () => {

    fetch('http://localhost:3000/needer')
    .then(Response => {
        if(Response.ok){
            console.log("ok")
            Response.json().then(data => {
                for(item of data){
                    console.log(item);
                }

            })
        }else{
            console.log('error');
        }
    })
})
