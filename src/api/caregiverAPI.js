import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/caregiver'

export const getCareGiverList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/list?page=${pageValue}`);
    console.log(res.data);
    return res.data;
}

export const getCareGiverOne = async (cgno) => {

    const res = await axios.get(`${host}/read/${cgno}`);
    console.log(res.data)
    return res.data;
}