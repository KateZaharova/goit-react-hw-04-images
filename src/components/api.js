import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

/*
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
Your API key: 38422328-85a02d361c587760bb979b0d3;
*/

/*export const fetchImages = async (page,q) => {
    const resp = axios.get('/images');
};*/


export const searchImg = async (itemToSearch, page) => {
    const API_KEY = '38422328-85a02d361c587760bb979b0d3';
    
    const response = await axios.get(`?key=${API_KEY}&q=${itemToSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=100`);
    //console.log(response);
    /*const data = await response.json();
    if (data.totalHits !== 0) {
     }
    totalHits = data.totalHits;
    return data.hits*/
    return response.data;
}
