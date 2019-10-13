import axios from 'axios';

const hotSectionQuery = { q: 'turkey', 'apiKey': '899a4c0ca1554288b98d9f8a763fa352', 'page': 1, 'pageSize': 4 }
const moneySectionQuery = { q: 'money', 'apiKey': '899a4c0ca1554288b98d9f8a763fa352', 'page': 2, 'pageSize': 8 }
const gridSectionQuery = { q: 'trend', 'apiKey': '899a4c0ca1554288b98d9f8a763fa352', 'page': 3, 'pageSize': 5 }

const ApiService = {

  getAllNewsByJson(API_URL) {
    return axios
    .all([
      axios.get(API_URL, { params: hotSectionQuery }),
      axios.get(API_URL, { params: moneySectionQuery }),
      axios.get(API_URL, { params: gridSectionQuery })
    ])
  }
};

export default ApiService
