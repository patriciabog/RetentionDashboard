import React from 'react';

const UserTypeFilter = ({ userType, setUserType }) => {
    const handleChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div className="mb-4 dashboard-header">
            <label className="user-type-label font-semibold">User Type:</label>
            <div className="user-type-selector">
                <select
                    value={userType}
                    onChange={handleChange}
                    className="user-type-select"
                >
                    <option value="All">All</option>
                    <option value="freemium">Freemium</option>
                    <option value="poc">POC</option>
                    <option value="enterprise">Enterprise</option>
                </select>
            </div>
        </div>
    );
};

export default UserTypeFilter;