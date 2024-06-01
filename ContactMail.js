import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const EmailShow = ({ name, email, subject, message }) => (
    <div className="container">
    <div className="email-show ">
        <h2>Email Details</h2>
        <div className="email-detail">
            <strong>From:</strong> {name} &lt;{email}&gt;
        </div>
        <div className="email-detail">
            <strong>Subject:</strong> {subject}
        </div>
        <div className="email-detail">
            <strong>Message:</strong>
            <p>{message}</p>
        </div>
        
    </div>
    </div>
);

export const ContactMail = () => {
    const [mails, setMails] = useState([]);
 const navigate=useNavigate();
    useEffect(() => {
        fetchMail();
    }, []);

    const fetchMail = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getmail");
            setMails(response.data); // Set the mails state with the data from the response
        } catch (error) {
            console.log(error);
        }
    };


    const  handleSubmit =async ()=>{
        navigate('/mailreply')
    }

    return (
        <>
            <ul>
                {Array.isArray(mails) && mails.map((mail, index) => (
                    <li key={index} className="notice-item">
                        <EmailShow
                            name={mail.name}
                            email={mail.email}
                            subject={mail.subject}
                            message={mail.message}
                        />
                        <div className="submit container">
                <button className='btn btn-primary 'onClick={handleSubmit}>reply</button>
        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
