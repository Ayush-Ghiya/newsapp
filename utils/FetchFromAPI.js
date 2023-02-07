import axios from 'axios';
const BASE_URL="https://inshorts.deta.dev/news?category";

export const FetchFromAPI = async (url)=>{
    const {data} = url ? await axios.get(`${BASE_URL}=${url}`,{ crossdomain: true }) : await axios.get(`${BASE_URL}=all`,{ crossdomain: true });
    // const resdata = data.json();
    return data;
}