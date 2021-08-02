

fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>resp.json())
.then((result)=>{
    result.forEach(({name,capital,flag})=>{
        console.log("name",name,"capital",capital,"flag",flag);
    });
})
.catch((err)=>console.log(err));