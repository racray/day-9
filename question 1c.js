const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        Object.keys(countriesList).forEach(Element=>{
            if(Element == "country"){
                console.log(key,countriesList[key]);
            }else if(Element == "capital"){
                console.log(key,countriesList[key]);
            }else if(Element == "flag"){
                console.log(key,countriesList[key]);                
            }               
        });
        // #######      OUTPUT Failed to load resource: the server responded with a status of 404 (Not Found)


    }
    xhr.send();
}

getC();
