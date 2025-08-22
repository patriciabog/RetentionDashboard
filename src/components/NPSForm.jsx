import React, { useState } from 'react';

const NPSForm = ({ onSubmit }) => {
    const [score, setScore] = useState('');
    const [feedback, setFeedback] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [company, setCompany] = useState('');
    const [retention, setRetention] = useState('');
    const [usage, setUsage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (score < 1 || score > 10) {
            setError('Please enter a score between 1 and 10.');
            return;
        }
        if (onSubmit) onSubmit(score, feedback, retention, usage, customerName, customerEmail, company);
        setSubmitted(true);
        setScore('');
        setFeedback('');
        setRetention('');
        setUsage('');
        setCustomerName('');
        setCustomerEmail('');
        setCompany('');
        setError('');
    };

    return (
        <div className="nps-form">
            <h2 className="form-title">Submit Feedback</h2>
            {submitted && <p className="success-message"> ✅ Thank you for your feedback!</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <section className="customer-info">
                    <h3>👤 Client</h3>
                <div>
                    <label htmlFor="customerName" className="block font-medium mb-1">Customer Name:</label>
                    <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label htmlFor="customerEmail" className="block font-medium mb-1">Customer Email:</label>
                    <input
                        type="email"
                        id="customerEmail"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="block font-medium mb-1">Company:</label>
                    <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label htmlFor="score" className="block font-medium mb-1">NPS Score (1-10)</label>
                    <input
                        type="number"
                        id="score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        min={1}
                        max={10}
                        className="w-full border rounded p-2"
                        placeholder="Example: 8"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="feedback" className="block font-medium mb-1">Feedback</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="What do you think about the product?"
                        rows={3}
                    />
                </div>
                </section>
                <section className="customer-success">
                <h3>📈 Customer Success</h3>
                <div>
                    <label htmlFor="retention" className="block font-medium mb-1">Retention (%)</label>
                    <input
                        type="number"
                        id="retention"
                        value={retention}
                        onChange={(e) => setRetention(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="Example: 85"
                    />
                    <span className="text-xs">
                        Retention (%) = (Active users at the end of the period / Users at the start of the period) × 100.<br />
                        Example: If you start with 100 users and 80 remain active, retention is 80%.
                    </span>
                </div>
                <div>
                    <label htmlFor="usage" className="block font-medium mb-1">Usage</label>
                    <input
                        type="number"
                        id="usage"
                        value={usage}
                        onChange={(e) => setUsage(e.target.value)}
                        min={1}
                        className="w-full border rounded p-2"
                        placeholder="Example: 120"
                    />
                    <span className="text-xs">
                        Number of times the product was used this month (e.g., 120).
                    </span>
                </div>
                </section>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NPSForm;