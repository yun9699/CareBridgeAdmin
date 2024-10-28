import React, { useState } from 'react';

function FAQListSelectComponent({ listOption }) {
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
                간병인 FAQ
            </button>
            <button
                className={`px-4 py-2 text-white rounded-r focus:outline-none transition duration-150 ease-in-out
                    ${!selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(false)}
            >
                보호자/환자 FAQ
            </button>
        </div>
    );
}

export default FAQListSelectComponent;
