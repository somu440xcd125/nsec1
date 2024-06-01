import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TbBellRinging } from "react-icons/tb";
import './Notice.css'; // Import CSS file for styling

export const Notice = () => {
  const [notices, setNotices] = useState([]);
// console.log(notices)
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

  return (
    <section className="notice-section">
    
      <div className='container connotice mt-5'>
      <div className="row">
        <div className="col-6">

        <h1 id='noticeh1'>Notices </h1>
        </div>
        <div className="col-6">
        <TbBellRinging className='card_icon ' id='noticebell' />
          
        </div>
      </div>
        <ul id='noticeul'>
          {notices.map((notice, index) => (
            <li key={index} className="notice-item">
              {notice.title ? (
                <>
                  <h3 id='noticeh3'>{notice.title}</h3>
                  <p id='noticep' >{notice.noticeDescription}</p>
                </>
              ) : (
                <p>No header available for this notice</p>
              )}
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
