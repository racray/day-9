const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const asiacountry = countriesList.filter(countryname => countryname.region=="Asia")
        const asiaC = asiacountry.map(asiaCo=>asiaCo.name);
        console.log(asiaC);


    }
    xhr.send();
}

getC();
