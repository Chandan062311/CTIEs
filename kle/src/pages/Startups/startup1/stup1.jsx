import React from 'react';
import './stup1.css';

function Stup1() {
  return (
    <div className='startup-detail-page1'>
      <header className='header'>
        <div className='banner'>
          <h1>Rasb Inventions</h1>
          <p>Transforming Healthcare with Innovative Solutions.</p>
        </div>
      </header>

      <section className='info-blocks'>
        <div className='block'>
          <h2>Overview</h2>
          <p>Rasb Inventions is revolutionizing healthcare by addressing the challenges faced by hospital staff and patients with innovative equipment solutions.</p>
        </div>
        <div className='block'>
          <h2>Achievements</h2>
          <p>Developed the Rasb Electric Stretcher, featuring an ergonomic design, integrated charger, and electric motor for smooth patient transport.</p>
        </div>
        <div className='block'>
          <h2>Team</h2>
          <p>Led by Sham C. Ambewadkar, Ramkrishna Ambewadkar, and Anmol Vaje, the Rasb Inventions team is dedicated to creating practical healthcare solutions.</p>
        </div>
        <div className='block'>
          <h2>Contact</h2>
          <p>Email: rasbinventions@gmail.com | Phone: 78920 75015</p>
        </div>
      </section>

      {/* <section className='testimonials'>
        <h2>What People Say</h2>
        <div className='testimonial'>
          <img src='/path/to/profile-pic1.jpg' alt='Profile 1' className='profile-pic' />
          <p><strong>John Doe</strong>: "Rasb Inventions has significantly improved patient care with their electric stretcher!"</p>
        </div>
        <div className='testimonial'>
          <img src='/path/to/profile-pic2.jpg' alt='Profile 2' className='profile-pic' />
          <p><strong>Jane Smith</strong>: "The ergonomic design and smooth transport are a game-changer for our hospital staff."</p>
        </div>
        
      </section> */}

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src="/strecher.png" alt='Electric Stretcher' />
          </div>
          <div className='feature-desc flex'>
            <h4>Effortless validation for</h4>
            <h3>Healthcare professionals</h3>
            <p>The Rasb Electric Stretcher offers smooth, effortless patient transport, reducing staff exertion and improving patient comfort.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container' id='second-big-feature'>
          <div className='feature-img'>
            <img src='/stch2.png' alt='Expandable Features' />
          </div>
          <div className='feature-desc flex'>
            <h4>Future-ready solutions for</h4>
            <h3>Healthcare facilities</h3>
            <p>Expandable features like adjustable height, patient monitoring, and data integration ensure Rasb's stretcher stays ahead in the market.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src='/stch3.png' alt='Affordable Innovation' />
          </div>
          <div className='feature-desc flex'>
            <h4>Cost-effective innovation for</h4>
            <h3>Healthcare providers</h3>
            <p>Rasb Inventions focuses on affordability without compromising on quality, making advanced healthcare equipment accessible to all.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stup1;
