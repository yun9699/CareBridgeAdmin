import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/careTaker'
// const host = 'http://localhost:8080/api/v1/careTaker'


export const getCareTakerList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/list?page=${pageValue}`);
    console.log(res.data)
    return res.data;
}

export const getCareTakerMatchList = async (ctno, page) => {

    const pageValue = (Number)(page || 1)
    const res = await axios.get(`${host}/match/${ctno}?page=${pageValue}`)
    console.log(res.data)
    return res.data

}

export const deleteTaker = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}

export const getCareTakerOne = async (ctno) => {

    const res = await axios.get(`${host}/read/${ctno}`);
    console.log(res.data)
    return res.data;
}

export const updateTaker = async (ctno, caretaker) => {

    const res = await axios.post(`${host}/update/${ctno}`, caretaker, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.data;
}

