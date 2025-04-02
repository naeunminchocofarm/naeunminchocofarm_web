import axios from "axios";

const soil_humidityApi = {
  getAll: function() {
    return axios.get('/api/soil-humidities')
  }
}

export default soil_humidityApi;