//https://restcountries.com/v3.1/name/{name}?fullText=true

//declaring variables 


const flagBtn = document.getElementById('btn');
const inputFlag = document.getElementById('input-flag');
const result = document.getElementById('result');

//creating event and api 


const getFlag = async () => {

    try{
        let putingFlag =  inputFlag.value;
        let url = `https://restcountries.com/v3.1/name/${putingFlag}?fullText=true`;
        let finalUrl = await fetch(url)
        
        let data = await finalUrl.json()
        console.log(data)
        result.innerHTML = 
        `
            <img src = "${data[0].flags.svg}" alt = "flag" class = "flags">
            <p id ="p-1">Capital: ${data[0].capital}</p>
            <p id ="p-1">Population: ${data[0].population}</p>
            <p id ="p-1">Currencies: ${Object.keys(data[0].currencies)}</p>
            <p id ="p-1">Languages: ${Object.keys(data[0].languages)}</p>
            <p id ="p-1">Continents: ${data[0].continents}</p>
        `
       
    }catch (err) {
        
       result.innerHTML = `<h3>Invalid Input!`
    }
    
   
    
}



flagBtn.addEventListener('click', getFlag)

