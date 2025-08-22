const fetchData = async () => {
    const data = await import('../data/sampleData.json');
    return data.default || data;
};

export default fetchData;