import axios from 'axios';

export async function fetchData(){

    try {
        const response = await axios.get('http://localhost:8080/api/project/');
        return response.data
    }catch (error){
        console.log(error);
        return null
    }

}



const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "application/json"
    }
  });
  
  export  {http}

