

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './Exam.css';
import { Navigate } from 'react-router-dom';

export const Exam = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const { username, questionid } = location.state || {};
const[existuser,setExistuser]=useState("")
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(); // 10 minutes timer

  const timerRef = useRef(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/getpaper', {
          questionid, // Make sure this matches the backend (lowercase 'q')
        });
        setQuizData(response.data.paper.questions);
        setSelectedOptions(Array(response.data.paper.questions.length).fill(null));
        console.log()
        setTimeLeft(response.data.paper.timeInSeconds)
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizData();
  }, [questionid]);
  

  const handleSubmit=async()=>{
    console.log("mother ")
    clearInterval(timerRef.current);
    try {
      const response= await axios.post('http://localhost:8000/result',{username,score,questionid});
      
      
      if(response.status==200){
        navigate("/");

      }
    } catch (error) {
      setExistuser(error.response.data.message);
      console.log(error)
      
    }

  }

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResult(true);
      handleSubmit();
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(timerRef.current);
    }
  }, [timeLeft, quizData.length]); // Include quizData.length as a dependency
  

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
       else {
        setShowResult(true);
        
      }
  };

  const changeQuestionDecrement = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateScore = () => {
    if (selectedOptions[currentQuestion] === quizData[currentQuestion]?.answer) {
      setScore(score + 1);
    }
  };

  const handleOptionClick = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = index;
    setSelectedOptions(updatedOptions);
  };

  if (quizData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container econtainer">
    
          <>
            <div className="timer">Time Left: {formatTime(timeLeft)}</div>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{quizData[currentQuestion]?.question}</span>
            </div>
            <div className="option-container">
              {quizData[currentQuestion]?.options.map((option, i) => (
                <button
                  className={`option-btn ${selectedOptions[currentQuestion] === i + 1 ? 'checked' : ''}`}
                  key={i}
                  onClick={() => handleOptionClick(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="row">
              <div className="col-6">
                <input type="button" value="Prev" id="prev-button" onClick={changeQuestionDecrement} />
              </div>
              <div className="col-6">
                <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
              </div>
            </div>
          </>
       
      </div>
      {showResult? 
      <div className="result container d-flex align-item-center  justify-content-center ">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-4">

         <button className='btn btn-danger' onClick={handleSubmit}>Submit</button>
          </div>
          <div className="col-12"></div>
           <p className='errorclass'>  {existuser}</p>
        </div>
         </div>:""}
    </div>
  );
};
