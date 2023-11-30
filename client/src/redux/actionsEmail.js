import axios from 'axios';

const endpoint = "http://localhost:3001";


export const sendEmail = (formData) => {
    return async (dispatch) => {
        try {
            await axios.post(`${endpoint}/send-email`, formData);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
};