import axios from 'axios';

// FAQ 목록 가져오기
export const getFAQList = async () => {
    try {
        const response = await axios.get('http://10.10.10.105:8080/api/v1/faq/list');
        return response.data;
    } catch (error) {
        console.error('list를 불러오는데 실패했습니다', error);
        throw error;
    }
};