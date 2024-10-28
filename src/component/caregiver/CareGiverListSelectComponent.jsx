import React, { useState } from 'react';

function CareGiverListSelectComponent({ listOption }) {
    const [selected, setSelected] = useState(true);

    const handleButtonClick = (isApproved) => {
        setSelected(isApproved);
        listOption(isApproved);
    };

    return (
        <div className="flex justify-center mb-4">
            <button
                className={`px-4 py-2 text-white rounded-l focus:outline-none transition duration-150 ease-in-out
                    ${selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(true)}
            >
                승인 된 간병인
            </button>
            <button
                className={`px-4 py-2 text-white rounded-r focus:outline-none transition duration-150 ease-in-out
                    ${!selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(false)}
            >
                승인 되지 않은 간병인
            </button>
        </div>
    );
}

export default CareGiverListSelectComponent;
