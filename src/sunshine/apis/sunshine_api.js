import axios from "axios";

const sunshineApi = {
  getAll: function() {
    return axios.get('/api/sunshines?')
  }
}
export default sunshineApi