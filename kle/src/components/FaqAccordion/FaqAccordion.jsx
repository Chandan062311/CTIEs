import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Find answers to common questions about our programs, resources, and how to get involved with CTiE.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is CTIE?</Accordion.Header>
                    <Accordion.Body>
                    CTIE stands for the Center for Technology Innovation and Entrepreneurship. It is dedicated to fostering innovation and supporting entrepreneurial ventures.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Who can participate in CTIE programs?</Accordion.Header>
                    <Accordion.Body>
                    CTIE programs are open to students, faculty, and professionals interested in technology and entrepreneurship.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What industries does CTIE focus on?</Accordion.Header>
                    <Accordion.Body>
                    CTIE focuses on a wide range of industries, including technology, healthcare, finance, and more, with a special emphasis on innovation-driven enterprises.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;