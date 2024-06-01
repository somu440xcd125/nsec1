import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
function Home() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>


                <Link to="/createnotice" className="card">
                    <div className='card-inner'>
                        <h3 id='txt'>Create Notice</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                </Link>

                <Link to="/mnagenotice" className="card">

                    <div className='card-inner'>
                        <h3 id='txt'>Manage Notice</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div> 
                    </Link>




                <Link to="/manageexam" className='card'>
                    <div className='card-inner'>
                        <h3 id='txt'>Create Exam</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>

                </Link>
                <Link to="/result" className='card'>
                    <div className='card-inner'>
                        <h3 id='txt'>Result</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>

                </Link>
                <Link to="/Contactmail" className='card new'>
                    <div className='card-inner'>
                        <h3 id='txt'>Mail</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>

                </Link>
            </div>


        </main>
    )
}

export default Home