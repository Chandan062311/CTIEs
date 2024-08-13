import React from 'react';
import './stup2.css';

function Stup2() {
  return (
    <div className='startup-detail-page'>
      <header className='header'>
        <div className='banner'>
          <h1>Kimi Motors Pvt. Ltd.</h1>
          <p>Innovation Unlimited: Transforming Rural Mobility and Farming Efficiency.</p>
        </div>
      </header>

      <section className='info-blocks'>
        <div className='block'>
          <h2>Overview</h2>
          <p>Kimi Motors is addressing the challenges faced by small-scale farmers and rural entrepreneurs by offering innovative and affordable farming equipment solutions.</p>
        </div>
        <div className='block'>
          <h2>Achievements</h2>
          <p>Kimi Motors has developed a versatile tractor attachment that transforms two-wheelers (petrol and electric bikes) into powerful farming tools, enhancing productivity and reducing manual labor.</p>
        </div>
        <div className='block'>
          <h2>Team</h2>
          <p>Led by Shrikant Shinde and Usha Shinde, Kimi Motors is driven by a team with extensive expertise in engineering, product development, management, and marketing.</p>
        </div>
        <div className='block'>
          <h2>Contact</h2>
          <p>Website: <a href="http://www.kimimotors.com">www.kimimotors.com</a> | Phone: +91 8104260724</p>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src="/f2.png" alt='Affordable Tractor Attachment' />
          </div>
          <div className='feature-desc flex'>
            <h4>Affordable solutions for</h4>
            <h3>Small-scale farmers</h3>
            <p>The tractor attachment from Kimi Motors offers a cost-effective solution, transforming standard two-wheelers into versatile farming tools that boost efficiency and reduce manual effort.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container' id='second-big-feature'>
          <div className='feature-img'>
            <img src='/f3.png' alt='Multi-functional Features' />
          </div>
          <div className='feature-desc flex'>
            <h4>Future-ready tools for</h4>
            <h3>Rural communities</h3>
            <p>With multi-functional capabilities like plowing and towing, Kimi Motors' attachments ensure that farmers have access to efficient, durable, and easy-to-use farming tools.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src='/f4.png' alt='Rural Innovation' />
          </div>
          <div className='feature-desc flex'>
            <h4>Cost-effective innovation for</h4>
            <h3>Rural development</h3>
            <p>Kimi Motors is committed to providing affordable and sustainable farming solutions, empowering small-scale farmers and boosting rural economies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stup2;
