const getC =() =>{
    const xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType ="json";
    xhr.onload=()=>{
        const countriesList = xhr.response;
        const USdollarcountry = countriesList.filter(countryname => {
            for(var i in countriesList){
                if(countryname.currencies[i].code=="USD"){
                    return true;
                }else{
                    return false;
                }
                }
        });
        const USDC = USdollarcountry.map(countryname=>countryname.name);
        console.log(USDC);
    }
    xhr.send();
}

getC(); 
