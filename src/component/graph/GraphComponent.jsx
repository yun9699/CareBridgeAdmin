import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import {useEffect, useState} from "react";
import {
    getGiverCount,
    getMatchGiverCount,
    getMatchTakerCount,
    getTakerCount
} from "@/api/graphAPI.js";

// 필요한 Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GraphComponent() {

    const[giverCount, setGiverCount] = useState(0);
    const[takerCount, setTakerCount] = useState(0);
    const[mgiverCount, setmgiverCount] = useState(0);
    const[mtakerCount, setmtakerCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const giver = await getGiverCount();
            const mgiver = await getMatchGiverCount();
            const taker = await getTakerCount();
            const mtaker = await getMatchTakerCount();

            setGiverCount(giver);
            setmgiverCount(mgiver);
            setTakerCount(taker);
            setmtakerCount(mtaker);
        };

        fetchData();

    }, []);

    const NotMatchGiverCount = giverCount - mgiverCount;
    const NotMatchTakerCount = takerCount - mtakerCount;



    const data = {
        labels: ['전체', '구인중', '구인완료'], // 간병인과 보호자 구분을 위한 레이블
        datasets: [
            {
                label: '간병인',
                data: [giverCount, NotMatchGiverCount, mgiverCount], // 전체 간병인, 구인중, 구인완료 수
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                barThickness: 30,
            },
            {
                label: '보호자',
                data: [takerCount, NotMatchTakerCount, mtakerCount], // 전체 보호자, 구인중, 구인완료 수
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                barThickness: 30,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '간병인과 보호자 구분',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 50, // y축 최대값 설정
                ticks: {
                    stepSize: 10, // y축 눈금 간격 설정
                },
            },
            x: {
                grid: {
                    display: false, // x축 격자선 비활성화
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },
        },
    };
    return (
        <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '100%', height: 'auto'}}>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default GraphComponent;