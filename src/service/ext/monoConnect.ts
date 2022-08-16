import axios from '../ext/Axios'


const exchangeToken = async (code: String) => {

  return await axios.post('https://api.withmono.com/account/auth', {code}, {
    headers: {
      "mono-sec-key": process.env.MONO_SEC_KEY
    }
  })
}

export default {exchangeToken}