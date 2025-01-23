import axios from "axios";

//constante que captura la conexion a la api
export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'

})