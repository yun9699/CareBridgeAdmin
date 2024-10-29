import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/graph/count'


export const getGiverCount = async () => {


    const res = await axios.get(`${host}/giver`)
    console.log("giver")
    console.log(res.data)

    return res.data
}

export const getTakerCount = async () => {


    const res = await axios.get(`${host}/taker`)
    // console.log("taker")
    // console.log(res.data)

    return res.data
}

export const getMatchGiverCount = async () => {


    const res = await axios.get(`${host}/mgiver`)
    console.log("nmgiver")
    console.log(res.data)

    return res.data
}


export const getMatchTakerCount = async () => {


    const res = await axios.get(`${host}/mtaker`)
    // console.log(res.data)

    return res.data
}

