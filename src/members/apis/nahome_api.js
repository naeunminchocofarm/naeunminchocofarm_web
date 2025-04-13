import axios from "axios";
import SignupFlow from "../components/SignupFlow";

const nahomeApi = {
  login: function() {
    return axios.post('/api/user/login')
  },
  Signup: function() {
    return axios.post('/api/user/signup')
  }
}

export default nahomeApi;