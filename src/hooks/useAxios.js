import {useEffect,useState} from 'react'
import axios from 'axios';

const useAxios = (url)=>{
  const [data,setData] = useState([]);
  const axiosPublic = axios.create({
    baseURL : import.meta.env.VITE_API_URL
  })
  useEffect(() => {
    axiosPublic.get(`${url}`)
    .then(data => setData(data.data))
  }, [data])
  return data
}
export default useAxios