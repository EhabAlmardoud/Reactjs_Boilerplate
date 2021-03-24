// used to make the defaults and global Intercepters of Axios

import axios from 'axios'
export default [
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com",
    axios.defaults.headers = "Auth Token",
    axios.interceptors.request.use(
        request => {
            console.log(request)
            // important to retuen the request to pass to the local requests
            return request
        }, error => {
            // console.log(error)
            return console.error();
        }
    ),
    axios.interceptors.response.use(
        response => {
            console.log(response)
            // important to retuen the request to pass to the local response
            return response
        }, error => {
            // console.log(error)
            return console.error();
        }
    )
]

//To use Instances of axios we creat it here and import "instance" after we export it
// const instance = axios.create({
//     baseURL = "https://jsonplaceholder.typicode.com"
// })