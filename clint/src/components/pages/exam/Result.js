import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import  "./result.css"

export const Result = () => {
    const [groupedResults, setGroupedResults] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getresult");
            const results = response.data;

            // Group results by questionid
            const grouped = results.reduce((acc, result) => {
                if (!acc[result.questionid]) {
                    acc[result.questionid] = [];
                }
                acc[result.questionid].push(result);
                return acc;
            }, {});

            setGroupedResults(grouped);
            console.log(grouped);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="result  mt-5" >
            <div className="container " id='resultsection'>
                {Object.keys(groupedResults).length > 0 ? (
                    Object.keys(groupedResults).map((questionid, index) => (
                        <div key={index} className="question-group mb-5" id='qestion-group'>
                            <h4 id='header'><LiaQuestionCircleSolid/>Question ID: {questionid}</h4>
                            <h4 id='header'><span ><FaBook/></span>Subject: {groupedResults[questionid][0].subject}</h4>
                            {groupedResults[questionid].map((result, idx) => (
                                <div key={idx} className="row mb-3">
                                    <div className="col-6">
                                        <h5 id='sname'><FaRegUser/>Student Name</h5>
                                        <p>{result.name}</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 id='sname'><MdAlternateEmail/>Student Email</h5>
                                        <p>{result.username}</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 id='sname'>Score</h5>
                                        <p>{result.score}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p>No results available</p>
                )}
            </div>
        </section>
    );
};
