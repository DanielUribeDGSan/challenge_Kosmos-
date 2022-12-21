import axios from 'axios';


const photosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});


export default photosApi;



