const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const popcountry = countriesList.filter(countryname => countryname.population<=200000);
        const popC = popcountry.map(popCo=>popCo.name);
        console.log(popC);
    }
    xhr.send();
}

getC();
