import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://real-time-news-data.p.rapidapi.com/search',
  params: {
    query: '',
    country: 'US',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key':import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
  }
};

export const FetchNews = async (query) => {
  try {
    const response = await axios.request({
     ...options,params:{query:query}
    });

    return response.data.data

  } catch (error) {
    return error;
  }
};