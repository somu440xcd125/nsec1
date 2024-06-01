import React, { useState } from 'react'

export const AdminLogin = () => {
    const [role,setRole]=useState("admin");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
 
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle submit function called");
        
        try {
          const response = await axios.post('http://localhost:8000/login', { username, password,role  });
          console.log(response.status);
          if (response.status === 200) {
            // Redirect to home page
          }
          // Do something with the response, such as storing a token
        } catch (error) {
          console.error("Error occurred:", error);
          setError(error.response.data.message);
        }
      };
 
 
 
 
 
    return (
    <>
        <section id="login" className="login">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Login</h2>
            <p>Admin Login</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6 offset-md-3 mt-2 p-4">
              <form className="login-form">
                <div className="row gy-4">
                  <div className="col-md-12 ">
                    <input
                      type="username"
                      className="form-control"
                      name="username"
                      placeholder="Enter Email"
                      required
                      onChange={(e) => { setUsername(e.target.value) }}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      required
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit" onClick={handleSubmit} >Login</button>
                  </div>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
