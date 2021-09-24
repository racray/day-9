//////////// REST COUNTRY UPI NOT OPENING////////////////

const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
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