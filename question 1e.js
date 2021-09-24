//////////// REST COUNTRY UPI NOT OPENING////////////////

const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const USdollarcountry = countriesList.filter(countryname => countryname.currency=="US Dollar");
        const USDC = USdollarcountry.map(countryname=>countryname.country);
        console.log(USDC);
        // #######      OUTPUT Failed to load resource: the server responded with a status of 404 (Not Found)


    }
    xhr.send();
}

getC(); 