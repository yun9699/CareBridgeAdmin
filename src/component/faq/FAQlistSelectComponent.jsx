import React, { useState } from 'react';
import FAQComponent from "../../component/faq/FAQComponent.jsx";
import FAQAddModalComponent from "../../component/faq/FAQAddModalComponent.jsx";

function FAQListSelectComponent({ listOption }) {
    const [selected, setSelected] = useState(true);

    //
    const handleButtonClick = (changeCategory) => {
        setSelected(changeCategory);
        listOption(changeCategory);
    };


    return (
        <div className="flex justify-center mb-4">


            {/*간병인 FAQ 리스트 버튼*/}
            <button
                className={`px-4 py-2 text-white rounded-l focus:outline-none transition duration-150 ease-in-out
                    ${selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(true)}
            >
                간병인 FAQ
            </button>

            {/*보호자 FAQ 리스트 버튼*/}
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
