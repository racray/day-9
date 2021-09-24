//////////// REST COUNTRY UPI NOT OPENING////////////////

const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const popcountry = countriesList.filter(countryname => countryname.population<=200000);
        const popC = popcountry.map(popCo=>popC.country);
        console.log(popC);
        // #######      OUTPUT Failed to load resource: the server responded with a status of 404 (Not Found)


    }
    xhr.send();
}

getC();