import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import NPSForm from './components/NPSForm';
import UserTypeFilter from './components/UserTypeFilter';
import AlertBox from './components/AlertBox';
import fetchData from './utils/DataFetcher';
const App = () => {
    const [data, setData] = useState(null);
    const [userType, setUserType] = useState('All');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
            checkUsage(result);
        };
        getData();
    }, []);

    const checkUsage = (data) => {
        const threshold = 100; // O el valor que prefieras
        if (data && data.usage < threshold) {
            setAlertVisible(true);
            setAlertMessage('Usage has dropped below the threshold!');
        }
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    // Esta función actualiza el NPS en el estado
    const handleNPSSubmit = (score, feedback, retention, usage, customerName, customerEmail, company) => {

            setData(prevData => {
                if (!prevData) return prevData;
                const updated = { ...prevData };
                const type = userType === 'All' ? 'freemium' : userType;
                updated.nps[type] = [...updated.nps[type], Number(score)];
                return updated;
            });

        fetch('https://script.google.com/macros/s/AKfycbzVu6ZDJY8gGWXJHLpZxpofsEQTUXi2DeIGpPIc1-RxAw6_w6hBTIS9_cjvtD6iQtzCLg/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `userType=${encodeURIComponent(userType)}&score=${encodeURIComponent(score)}&feedback=${encodeURIComponent(feedback)}&retention=${encodeURIComponent(retention)}&usage=${encodeURIComponent(usage)}&customerName=${encodeURIComponent(customerName)}&customerEmail=${encodeURIComponent(customerEmail)}&company=${encodeURIComponent(company)}`
            }).then(() => {
                // Vuelve a cargar los datos del sheet después de guardar
                fetchData().then(result => setData(result))
                .catch(() => setAlertMessage('Error saving feedback'));
            });

        };

    return (
        
        <div className="App">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Customer Retention & Feedback Dashboard</h1>
            </div>
            <UserTypeFilter userType={userType} setUserType={handleUserTypeChange} />
            <Dashboard data={data} userType={userType} />
            <NPSForm onSubmit={handleNPSSubmit} />
            <AlertBox message={alertMessage} visible={alertVisible} />
        </div>
    );
};

export default App;