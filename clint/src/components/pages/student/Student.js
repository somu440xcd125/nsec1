import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import "./student.css"
import { useSelector } from "react-redux";
import axios from 'axios';

export const Student = () => {
    const [profile, setProfile] = useState(null);
    const { username } = useSelector(state => state.auth.currentUser);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const response = await axios.post("http://localhost:8000/accessstudent", { username });
            console.log(response.data);
            setProfile(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section id="student">
            <div className="container scontainer mt-5">
                {profile && (

                    <div className="row " >
                        <div className="row" id='profile'>
                        <div className="col-12 profilelogo"><CgProfile /></div>
                        <div className="col-12 headingp ">{profile.name}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 heading">
                                <p>
                                    username: <span>{profile.username}</span></p> 
                                    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 heading">
                                <p>
                                class:<span> {profile.class}</span></p>
                            </div>
                        </div>
                      
                        <div className="row">
                            <div className="col-12 heading"><p>
                            roll:<span> {profile.roll}</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 heading"><p>contact:<span> {profile.phone}</span></p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 heading"><p>Section:</p></div>
                        </div>
                    </div>

                )}
                {!profile && (
                    <div className="col-12">Loading...</div>
                )}
            </div>
        </section>
    )
}
