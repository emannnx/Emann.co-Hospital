import React from 'react'
import '../Pages_CSS/All_Doctors.css'
import Header from '../Components/Header'
import group_profiles from '../assets/group_profiles.png'
import arrow_icon from '../assets/arrow_icon.svg'
import docctor_hero_img from '../assets/doc-header-img.png'
import general_physician from '../assets/General-physician.png'
import Gynecologist from '../assets/Gynecologist.png'
import Dermatologist from '../assets/Dermatologist.png'
import Pediatricians from  '../assets/Pediatricians.png'
import Neurologist from '../assets/Neurologist.png'
import Gastroenterologist from '../assets/Gastroenterologist.png'


const AllDoctors = () => {
  return (
    <div>
        <Header />
        <div className="doctor-hero">

            {/* Hero Section */}
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

            {/* Find by Speciality */}
            <div className="doctor-hero-Speciality">
              <h1>Find by Speciality </h1>
              <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
              <div className="Speciality-Container">
                <div className="card card1">
                  <div className="Speciality-img-circle">
                    <img src={general_physician} alt="" />
                  </div>
                  <p>General physician</p>
                </div>
                <div className="card card2">
                   <div className="Speciality-img-circle">
                    <img src={Gynecologist} alt="" />
                  </div>
                  <p>Gynecologist</p>
                </div>

                <div className="card card3">
                   <div className="Speciality-img-circle">
                    <img src={Dermatologist} alt="" />
                  </div>
                  <p>Dermatologist</p>
                </div>

                <div className="card card4">
                   <div className="Speciality-img-circle">
                    <img src={Pediatricians} alt="" />
                  </div>
                  <p>Pediatricians</p>
                </div>

                <div className="card card5">
                   <div className="Speciality-img-circle">
                    <img src={Neurologist} alt="" />
                  </div>
                  <p>Neurologist</p>
                </div>

                <div className="card card6">
                   <div className="Speciality-img-circle">
                    <img src={Gastroenterologist} alt="" />
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
