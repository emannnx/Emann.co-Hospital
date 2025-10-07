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
import Richard_James from '../assets/Dr._Richard_James.png'
import Available_dot from '../assets/Green_dot_available.png'
import appoinytmentDoctor from '../assets/appointment-doc-img.png'
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const AllDoctors = () => {
  return (
    <div>
      <Header />
      <div className="doctor-hero">
        
        {/* Hero Section */}
        <motion.div 
          className="doctor-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='doctor-wrapper-text'>
            <div className="doctor-wrapper-text-inner">
              <h1>Book Appointment <br /> With Trusted Doctors</h1>
              <div className="img-text">
                <img src={group_profiles} alt="profiles" />
                <p>Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.</p>
              </div>
              <div className='Book-appointment-btn'>
                <p>Book appointment</p>
                <img src={arrow_icon} alt="arrow" />
              </div>
            </div>
          </div>
          <motion.div 
            className='doctor-wrapper-img'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            <img src={docctor_hero_img} alt="doctor hero" />
          </motion.div>
        </motion.div>

        {/* Find by Speciality */}
        <motion.div 
          className="doctor-hero-Speciality"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1>Find by Speciality</h1>
          <p>Browse through our extensive list of trusted doctors by speciality.</p>
          <div className="Speciality-Container">
            {[ 
              {img: general_physician, name: "General Physician"},
              {img: Gynecologist, name: "Gynecologist"},
              {img: Dermatologist, name: "Dermatologist"},
              {img: Pediatricians, name: "Pediatricians"},
              {img: Neurologist, name: "Neurologist"},
              {img: Gastroenterologist, name: "Gastroenterologist"}
            ].map((spec, i) => (
              <motion.div 
                key={i}
                className="card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="Speciality-img-circle">
                  <img src={spec.img} alt={spec.name} />
                </div>
                <p>{spec.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Doctors to Book */}
        <motion.div 
          className="doctor-hero-TopDoctors"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1>Top Doctors to Book</h1>
          <p>Simply browse through our list of trusted doctors.</p>

          <div className="TopDoctors-Container">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                className="doctor-card" 
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className='doctor_img_container_hero'>
                  <img src={Richard_James} alt="doctor" />
                </div>
                <div className='doctor_info_container_name'>
                  <div className='Available'> 
                    <img src={Available_dot} alt="available" />
                    <p className='Available_p'>Available</p>
                  </div>
                  <h3>Dr. Richard James</h3>
                  <p>General Physician</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button 
            className='Doctors-more'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More
          </motion.button>
        </motion.div>

        {/* 100+ Trusted Doctors Section */}
        <motion.div 
          className='With_100_Trusted_Doctorss'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="doctor-wrapper">
            <div className='doctor-wrapper-text'>
              <div className="doctor-wrapper-text-inner">
                <h1>Book Appointment <br /> With 100+ Trusted Doctors</h1>
                <div className='Book-appointment-btn'>
                  <p>Create account</p>
                  <img src={arrow_icon} alt="arrow" />
                </div>
              </div>
            </div>
            <div className='doctor-wrapper-img'>
              <img src={appoinytmentDoctor} alt="appointment" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AllDoctors
