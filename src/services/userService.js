import axios from 'axios';

export default {
    async readAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
          } catch (error) {
            console.error(error);
          }
    }    
}