import React from 'react';

function CareGiverListSelectComponent({listOption}) {
    return (

        <div className="flex justify-center mb-4">
            <button
                className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-l focus:outline-none"
                onClick={() => listOption(true)}
            >
                승인 된 간병인
            </button>
            <button
                className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-r focus:outline-none"
                onClick={() => listOption(false)}
            >
                승인 되지 않은 간병인
            </button>
        </div>
    );
}

export default CareGiverListSelectComponent;