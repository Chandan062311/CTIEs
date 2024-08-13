import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg'
;
const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Innovate and Lead',
        description: 'Innovation is the cornerstone of success in todays fast-paced world. At CTiE, we believe that anyone can be a leader with the right mindset and tools. Our programs are designed to help you harness your creativity, turn ideas into action, and lead with confidence in the entrepreneurial ecosystem.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Mentorship Matters',
        description: 'Having a mentor can make all the difference in your entrepreneurial journey. CTiE connects you with experienced professionals who provide invaluable guidance, helping you navigate challenges and accelerate your growth. Learn from those who ve been there, and let their insights drive your success.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Unlock Opportunities',
        description: 'Opportunities are all around us, waiting to be unlocked. At CTiE, we open doors to new possibilities through workshops, networking events, and access to resources. Whether you re just starting out or looking to scale, we provide the support you need to seize opportunities and make your mark.'
    },    
];


function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>KLE CTIE BELGAUM</h1>
                <p>ONE STOP INNOVATION HUB FOR ALL UR NEEDS</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Startups</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Explore more!!!</h2>
                        <p>Discover innovative solutions, connect with industry experts, and explore cutting-edge entrepreneurial opportunities with CTIE.</p>
                        <a href="https://www.kletech.ac.in/belagavi/ctie" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </a>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src="grrr.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;