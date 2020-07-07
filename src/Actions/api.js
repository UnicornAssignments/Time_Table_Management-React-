
import axios from 'axios'
const baseUrl="https://localhost:44396/";

export default{
    user(url=baseUrl+'api/user'){
  return{
      create:(newUser)=>axios.post(url,newUser)
  }
    }
}