import axios from "axios";

const soil_humidityApi = {
  getAll: function() {
    return axios.get('/api/soil-moisture-values')
  }
}

export default soil_humidityApi;