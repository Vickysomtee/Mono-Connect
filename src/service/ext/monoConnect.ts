import axios from '../ext/Axios'


const exchangeToken = async (data: String) => {

  return await axios.post('https://api.withmono.com/account/auth', data, {
    headers: {
      "mono-sec-key": ""
    }
  })
}

export default {exchangeToken}