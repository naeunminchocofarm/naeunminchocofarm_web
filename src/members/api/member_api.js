import axios from "axios";

const memberApi = {
  getMemList: function() {
    return axios.get('/api/admin/members')
  },
  signUp: function(memberInfo) {
    return axios.post('/api/user/signUp', memberInfo);
  },
  login: function(loginCheck) {
    return axios.post('/api/user/login', loginCheck);
  }
}
export default memberApi