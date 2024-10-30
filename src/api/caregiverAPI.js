import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/caregiver'
// const host = 'http://localhost:8080/api/v1/caregiver'

export const getCareGiverList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/list?page=${pageValue}`);
    console.log(res.data);
    return res.data;
}

export const deleteGiver = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}


export const getCareGiverOne = async (cgno) => {

    const res = await axios.get(`${host}/read/${cgno}`);

    return res.data;
}

export const updateCareGiver = async (cgno, caregiver) => {

    const res = await axios.post(`${host}/update/${cgno}`, caregiver, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.data;
}

export const getNotApprovedGiverList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/notapprovedgivers?page=${pageValue}`);

    return res.data;
}

export const approveGiver = async (cgno) => {

    const res = await axios.put(`${host}/approve/${cgno}`);

    return res.data;
}

export const getMatchedGiverList = async (cgno, page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/matchedgiver/${cgno}?page=${pageValue}`);

    return res.data;
}