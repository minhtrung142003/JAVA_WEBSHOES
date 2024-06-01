import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import baseURL from '../../api/BaseUrl';

const Verify = () => {
    const [message, setMessage] = useState('');
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get(baseURL + `users/verify?token=${token}`);
                setMessage(response.data);
            } catch (error) {
                setMessage("Xác nhận thất bại, vui lòng thử lại.");
            }
        };

        verifyUser();
    }, [token]);

    return (
        <div className="verify-container">
            <h2>{message}</h2>
        </div>
    );
};

export default Verify;
