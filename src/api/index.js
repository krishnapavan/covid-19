import axios from 'axios';


const url = "https://covid19.mathdro.id/api"

export const fectchdata = async (country) => {
    let changedUrl = url;
    if (country){
        changedUrl= `${url}/countries/${country}`
    }
    try{
        const { data: { confirmed , recovered , deaths,lastUpdate } }  = await axios.get(changedUrl);
        const modifieddata = { confirmed , recovered , deaths,lastUpdate };
        return modifieddata;
    }
    catch(error){
        console.log(error);
    }

    
}

export const fetchDailydata = async()=> {

    try{

        const { data }  = await axios.get(`${url}/daily`);
        const modifieddata = data.map((dailyData)=> ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate 
        }))
        return modifieddata;

    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async() =>{

    try{
        const { data :{countries}}  = await axios.get(`${url}/countries`);
        
        return countries.map((country)=> country.name);
    }
    catch(error){
        console.log(error);
    }
}

