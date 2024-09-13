import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/clone-2ac0a/us-central1/api', 
  // Ensure this matches your server's base URL
  timeout: 10000,
});

export default instance;