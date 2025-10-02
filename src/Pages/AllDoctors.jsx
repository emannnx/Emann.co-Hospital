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
              <h1>Find by Speciality </h1>
              <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
              <div className="Speciality-Container">
                <div className="card card1">
                  <div className="Speciality-img-circle">

                  </div>
                  <p>General physician</p>
                </div>
                <div className="card card2">
                   <div className="Speciality-img-circle">

                  </div>
                  <p>Gynecologist</p>
                </div>
                <div className="card card3">
                   <div className="Speciality-img-circle">

                  </div>
                  <p>Dermatologist</p>
                </div>
                <div className="card card4">
                   <div className="Speciality-img-circle">

                  </div>
                  <p>Pediatricians</p>
                </div>
                <div className="card card5">
                   <div className="Speciality-img-circle">

                  </div>
                  <p>Neurologist</p>
                </div>
                <div className="card card6">
                   <div className="Speciality-img-circle">

                  </div>
                  <p>Gastroenterologist</p>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default AllDoctors
