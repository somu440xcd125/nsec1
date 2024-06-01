import React, { useState } from 'react'

export const CreateEvent = () => {

  const [eventHeader, setEventHeader] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");




  const handleSubmit=async()=>{
    try{
      const response = await axios.post('http://localhost:8000/event', { eventHeader, eventDescription, fromDate ,toDate });



    }
    catch(error){

    }

  }



  return (
    <>
      <section>
        <section id="login" className="login">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <p>Create event</p>
            </header>
            <div className="row gy-4">
              <div className="col-lg-6 offset-md-3 mt-2 p-4">
                <form className="login-form" onSubmit={handleSubmit} >
                  <div className="row gy-4">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="event-header"
                        placeholder="Event header"
                        required
                        value={eventHeader}
                        onChange={(e) => setEventHeader(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="event-description"
                        placeholder="Event Description"
                        required
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                      />
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <label>From Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="from-date"
                            required
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>To Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="to-date"
                            required
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                          />
                        </div>
                      </div>

                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}
