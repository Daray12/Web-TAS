import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Daray12/Web-TAS',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'content-Type': 'application/json'
    },
})

export default{
    getEvents(){
        return apiClient.get('/db')
    },
}