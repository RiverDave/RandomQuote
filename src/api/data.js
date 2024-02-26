//TODO: Implement axios to fetch data from the API
import {API_URL, API_KEY} from './constants.js'
import axios from 'axios'
// const axios = require('axios');


export async function fetchApi(){
    // const options = [
    //     headers: {
    //         'X-Api-Key' : `QijwlrhSe4Y0XQElNuE0pw==gkbuVX9l9Lr2Webc`,
    //     }
        
    // ]

    const {data} = await axios.get(API_URL, {
        headers:{ 
        'X-Api-Key' : `${API_KEY}`,
        }
    });
    return data;
}


export const fetchData = async (quoteState) => {
    try {
      const data = await fetchApi();
      const quote  = data[0];
      quoteState([quote.quote, quote.author])
    } catch(err) {
      console.log(err);
    }
  };






