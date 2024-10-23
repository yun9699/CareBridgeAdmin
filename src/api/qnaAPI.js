import axios from "axios";



const host = 'http://10.10.10.105:8080/api/v1/qna'


export const getList = async () => {

    const res = await axios.get(`${host}/list`)

    console.log(res.data)
    return res.data
}

