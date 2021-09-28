const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const totalpopulation = countriesList.reduce((totalpop, countrypop)=>totalpop+countrypop.population,0);
        console.log(totalpopulation);
    }
    xhr.send();
}

getC();
