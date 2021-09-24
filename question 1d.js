//////////// REST COUNTRY UPI NOT OPENING////////////////

const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const totalpopulation = countriesList.reduce((totalpop, countrypop)=>totalpop+countrypop.population,0);
        console.log(totalpopulation);
        // #######      OUTPUT Failed to load resource: the server responded with a status of 404 (Not Found)


    }
    xhr.send();
}

getC();