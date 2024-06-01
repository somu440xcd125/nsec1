import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'; // Importing Bootstrap icons
import './Notice.css';
import { useNavigate } from "react-router-dom";

export const MnageNotice = () => {
    const navigate=useNavigate();
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetchNotices();
    }, []);

    // Function to fetch notices from the backend
    const fetchNotices = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getnotice');
            setNotices(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    // Function to handle edit notice click
    const handleEditNotice = (noticeId) => {
        navigate('/editnotice',{state:{noticeId}})

        // Implement edit functionality here
        console.log('Edit notice clicked with ID:', noticeId);
    };

    // Function to handle delete notice click
    const handleDeleteNotice = async (noticeId) => {
        try{
        const response = await axios.post('http://localhost:8000/deletenotice',{noticeId});
        console.log(response)
        fetchNotices();
      } catch (error) {
        console.error('Error fetching notices:', error);
      }

        // Implement delete functionality here
        console.log('Delete notice clicked with ID:', noticeId);

    };

    return (
        <section className="notice-section">
            <div className='container mt-5'>
                <h1>Notices</h1>
                <ul>
                    {notices.map((notice, index) => (
                        <li key={index} className="notice-item">
                            <div className="notice-header row align-items-center">
                                <div className="col-md-6">
                                    <h3>{notice.title}</h3>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end ">
                                    <BsPencilSquare className="edit-icon " onClick={() => handleEditNotice(notice._id)} />
                                    <BsTrash className="delete-icon" onClick={() => handleDeleteNotice(notice._id)} />
                                </div>
                            </div>
                            <p>{notice.noticeDescription}</p>
                            {/* Add more details as needed */}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
