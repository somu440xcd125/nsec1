import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
function Home() {
      return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Create Event</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                {/* <h1>300</h1> */}
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Manage Event</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Meeting</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Upload Image</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                
            </div>
        </div>

        
    </main>
  )
}

export default Home