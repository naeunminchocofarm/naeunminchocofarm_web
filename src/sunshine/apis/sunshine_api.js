import axios from "axios";

const sunshineApi = {
  getAll: function() {
    return axios.get('/api/ldr-values')
  }
}
export default sunshineApi