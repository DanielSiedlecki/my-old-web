import axios from 'axios';

export async function fetchData(){

    try {
        const response = await axios.get('https://mycv-project.herokuapp.com/api/project/');
        return response.data
    }catch (error){
        console.log(error);
        return null
    }

}



const http = axios.create({
    baseURL: "https://mycv-project.herokuapp.com/api",
    headers: {
      "Content-type": "application/json"
    }
  });
  
  export  {http}

