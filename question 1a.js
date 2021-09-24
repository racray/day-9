//////////// REST COUNTRY UPI NOT OPENING////////////////

const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const asiacountry = countriesList.filter(countryname => countryname.country=="Asia")
        const asiaC = asiacountry.map(asiaCo=>asiaC.country);
        console.log(asiaC);
        // #######      OUTPUT Failed to load resource: the server responded with a status of 404 (Not Found)


    }
    xhr.send();
}

getC();