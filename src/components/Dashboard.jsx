import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = ({ data, userType }) => {
    if (!data) return <div>Loading...</div>;

    const userTypes = ['freemium', 'poc', 'enterprise'];
    const filteredTypes = userType === 'All' ? userTypes : [userType];

    // NPS promedio por tipo de usuario filtrado
    const npsAverages = filteredTypes.map(type => {
        const scores = data.nps[type];
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        return avg.toFixed(1);
    });

    const retentionData = filteredTypes.map(type => data.retention[type]);
    const usageData = filteredTypes.map(type => data.usage[type]);

    const npsChartData = {
        labels: filteredTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)),
        datasets: [
            {
                label: 'NPS Average',
                data: npsAverages,
                backgroundColor: '#60a5fa',
            },
        ],
    };
    const retentionChartData = {
        labels: filteredTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)),
        datasets: [
            {
                label: 'Retention (%)',
                data: retentionData,
                backgroundColor: '#fbbf24',
            },
        ],
    };

    const usageChartData = {
        labels: filteredTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)),
        datasets: [
            {
                label: 'Usage',
                data: usageData,
                backgroundColor: '#34d399',
            },
        ],
    };

    // Opciones para mejorar el gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Key metrics by user type',
            },
        },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <>
        <div className='container-1'>
            <h2 className="mb-4">Dashboard</h2>
            <h3>NPS Average</h3>
            <Bar data={npsChartData} options={options} />
            <h3>Retention (%)</h3>
            <Bar data={retentionChartData} options={options} />
            <h3>Usage</h3>
            <Bar data={usageChartData} options={options} />
        </div>
        </>
    );
};

export default Dashboard;