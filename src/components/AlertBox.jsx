import React from 'react';

const AlertBox = ({ message, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="bg-red-500 text-white p-4 rounded">
            {message}
        </div>
    );
};

export default AlertBox;