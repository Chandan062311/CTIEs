import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';


const persons = [
    {
        id: 1,
        img: []
    },
    {
        id: 2,
        img: []
    },
    {
        id: 3,
        img: []
    },
    {
        id: 4,
        img: []
    },
    {
        id: 5,
        img: []
    },
    {
        id: 6,
        img: []
    },
    {
        id: 7,
        img: []
    },
    {
        id: 8,
        img: []
    },
    {
        id: 9,
        img: []
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>CTIE empowers innovators and entrepreneurs with the tools, mentorship, and community needed to turn ideas into impactful ventures.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Grow with us</h2>
                    <p>The Center for Technology Innovation and Entrepreneurship (CTIE) is a hub for fostering creativity, innovation, and entrepreneurial spirit. Our mission is to equip individuals with the skills, knowledge, and resources needed to turn their ideas into impactful ventures. We provide a supportive environment where students, professionals, and startups can collaborate, learn, and grow. Through our programs, we offer mentorship from industry experts, access to state-of-the-art facilities, and a platform for networking and collaboration, empowering our members to innovate and lead in their respective fields.</p>
                    <p className='mb-4 mb-lg-5'>At CTIE, we believe that innovation is the key to solving today’s most pressing challenges. We are dedicated to cultivating a community of forward-thinkers who are passionate about making a difference. Whether you are looking to develop a groundbreaking product, launch a startup, or simply explore new possibilities, CTiE is here to guide and support you on your entrepreneurial journey</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src="grow.png" className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Achievments</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;