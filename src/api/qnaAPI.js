import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/qna'


export const getQNAList = async (page) => {

    const pageValue = (Number)(page || 1) // 없으면 1

    const res = await axios.get(`${host}/list?page=${pageValue}`)
    console.log(res.data)

    return res.data
}

export const deleteQNA = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}


