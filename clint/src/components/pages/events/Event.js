import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export const Event = () => {
  const user = useSelector(state => state.auth.currentUser);

  return (
    <section>
      {user.role === "admin" ? (
        <div className="card bg-white mt-5">
          <div className="card-header">
            Featured for Admin
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div className='row'>
            <div className='col-2'>
              
            <a href='/createevent' className="btn btn-primary">create event</a>
            </div>
            <div className='col-2'>

            <button className="btn btn-primary">edit event</button>
            </div>
            <div className='col-2'>

            <button className="btn btn-primary">delete event</button>
            </div>
              </div>
          </div>
        </div>
      ) : (
        <div className="card bg-white">
          <div className="card-header">
            Featured for Student
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           
          </div>
        </div>
      )}
    </section>
  );
};
