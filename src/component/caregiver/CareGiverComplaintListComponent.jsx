import { useEffect, useState } from "react";

function CareGiverComplaintListComponent() {
    const [complaints, setComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">불만 접수 관리</h1>

            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    불만 접수하기
                </button>
            </div>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">제목</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">상태</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">날짜</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">상세보기</th>
                </tr>
                </thead>
                <tbody>
                {complaints.map((complaint) => (
                    <tr key={complaint.id} className="border-b hover:bg-gray-100">
                        <td className="px-6 py-4">{complaint.id}</td>
                        <td className="px-6 py-4">{complaint.title}</td>
                        <td className="px-6 py-4">{complaint.status}</td>
                        <td className="px-6 py-4">{new Date(complaint.date).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                            <button

                                className="text-blue-600 hover:underline"
                            >
                                보기
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CareGiverComplaintListComponent;
