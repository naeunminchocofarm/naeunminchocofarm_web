import axios from "axios";

const humidityApi = {
  getAll: function() {
    return axios.get('/api/humidities?delta=h')
  }
}

export default humidityApi;