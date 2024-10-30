import { careGiverOneHeader } from "@/page/caregiver/CareGiverIndex.jsx";

function CareGiverReadProfileComponent({ userData, setUserData }) {

    const handleChange = (key, value) => {
        setUserData(prevData => ({
            ...prevData,
            [`cg${key}`]: value
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">사용자 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careGiverOneHeader.map((key) => (
                    <div key={key}>
                        <label className="block text-gray-500 font-medium mb-1">{key.toUpperCase()}</label>
                        <div className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">
                            <input
                                value={userData[`cg${key}`] || ""}
                                className="bg-transparent outline-none w-full"
                                onChange={(e) => handleChange(key, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareGiverReadProfileComponent;
