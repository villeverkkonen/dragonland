import axios from 'axios'
const baseUrl: string = '/api/equipment'

const getEquipment = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => {
    return res.data
  })
}

const getRandomEquipment = () => {
  const request = axios.get(`${baseUrl}/random`)
  return request.then((res) => {
    return res.data
  })
}

const getXEquipment = (amount: number) => {
  const request = axios.get(`${baseUrl}/amount/${amount}`)
  return request.then((res) => {
    return res.data
  })
}

export default {
  getEquipment,
  getRandomEquipment,
  getXEquipment,
}
