// src/utils/api.js

const callApi = async(endpoint, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
    };

    try {
        const response = await fetch(`http://localhost:5000${endpoint}`, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    } catch (error) {
        throw error;
    }
};

export default callApi;