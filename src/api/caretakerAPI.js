import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/careTaker'

export const getCareTakerList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/list?page=${pageValue}`);
    console.log(res.data)
    return res.data;
}

export const deleteTaker = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}

