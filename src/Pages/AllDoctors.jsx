import React from 'react'
import '../Pages_CSS/All_Doctors.css'
import Header from '../Components/Header'
import group_profiles from '../assets/group_profiles.png'
import arrow_icon from '../assets/arrow_icon.svg'
import docctor_hero_img from '../assets/doc-header-img.png'

const AllDoctors = () => {
  return (
    <div>
        <Header />
        <div className="doctor-hero">
            <div className="doctor-wrapper">
                  <div className='doctor-wrapper-text'>
                     <div className="doctor-wrapper-text-inner">
                     <h1>Book Appointment <br /> With Trusted Doctors</h1>
                     <div className="img-text">
                        <img src={group_profiles} alt="" />
                        <p>
                            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                        </p>
                     </div>
                     <div className='Book-appointment-btn'>
                        <p>Book appointment</p>
                        <img src={arrow_icon} alt="" />
                     </div>
                     </div>
                  </div>
                  <div className='doctor-wrapper-img'>
                    <img src={docctor_hero_img} alt="" />
                  </div>
            </div>
            <div className="doctor-hero-Speciality">
            </div>
        </div>
    </div>
  )
}

export default AllDoctors
