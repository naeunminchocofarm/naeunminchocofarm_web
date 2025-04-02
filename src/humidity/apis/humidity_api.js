import axios from "axios";

const humidityApi = {
  getAll: function() {
    return axios.get('/api/humidities')
  }
}

export default humidityApi;