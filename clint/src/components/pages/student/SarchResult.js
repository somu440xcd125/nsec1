import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from "react-redux";


export const SarchResult = () => {
  const { username } = useSelector(state => state.auth.currentUser);
    // const [username, setUsername] = useState("");
    const [questionid, setQuestionid] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [toggle, setToggle] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(username);
        // console.log(questionid);

        try {
            const response = await axios.post("http://localhost:8000/sarchresult", { questionid, username });
            if (response.status === 200) {
              setResult(response.data.data);
              setError(null);
              setToggle(false);
              
                
            }
        } catch (error) {
            console.log(error);
            setError(error.response ? error.response.data : error.message);
        }
    }

    return (
              <>
      <section id="login" className="login">
              {toggle?
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h2>Search Result</h2>
                    </header>
                    <div className="row gy-4">
                        <div className="col-lg-6 offset-md-3 mt-2 p-4">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="row gy-4">
                                    {/* <div className="col-md-12">
                                        <label htmlFor="username">Enter Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="username"
                                            required
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div> */}
                                    <div className="col-md-12">
                                        <label htmlFor="questionid">Enter Question ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="questionid"
                                            required
                                            onChange={(e) => setQuestionid(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                         
                       
                        </div>
                    </div>
                </div>:
                <div className="container">
                  <div className="row">
                    <div className="col-6 text-end"><h5>name:</h5></div>
                    <div className="col-6"><p>{result.name}</p></div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-end"><h5>score:</h5></div>
                    <div className="col-6"><p>{result.score}</p></div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-end"><h5>qestion-id:</h5></div>
                    <div className="col-6"><p>{result.questionid}</p></div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-end"><h5>email:</h5></div>
                    <div className="col-6"><p>{result.username}</p></div>
                  </div>
                </div>
                
                }
            </section>
        </>
    );
};
