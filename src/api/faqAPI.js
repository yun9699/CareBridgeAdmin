import axios from 'axios';

const host = 'http://10.10.10.105:8080/api/v1/faq';

// FAQ 목록 가져오기
export const getFAQList = async (page) => {
    try {
        const res = await axios.get(`${host}/list`);
        return res.data;
    } catch (e) {
        console.error('FAQ List Load Error', e);
        throw e;
    }
};

// FAQ 삭제하기
export const deleteFAQ = async (fno) => {

    const res = await axios.post(`${host}/delete/${fno}`)
    return res.data
}

// FAQ 등록하기
export const insertFAQ = async (fno) => {
    try {
        const res = await axios.post(`${host}/insert`, fno);
        return res.data;
    } catch (e) {
        console.error('FAQ Post Add Error', e);
        throw e;
    }
};
