import React from 'react';
import { Link, Element } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../assets/images/01.jpg'; // If this is an image, use <img src={...} />
import Navebar from './Navebar'; // Corrected spelling
import Dropdown from 'react-bootstrap/Dropdown';
import { useRef } from 'react';

function About() {
      const ref = useRef();
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="container mt-5">
                <h1 className="text-primary">React + Bootstrap Example</h1>
                <button className="btn btn-success">Click Me</button>
            </div>
            <div className="container mt-5">
                <h2>About Us</h2>
                <p>
                    We are a team of passionate developers dedicated to creating amazing web applications.
                </p>
            </div>
        </>
    );
}

export default About;
