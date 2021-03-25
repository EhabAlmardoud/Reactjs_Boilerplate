//To use Instances of axios we creat it here and import "instance" after we export it
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

export default instance