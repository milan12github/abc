// src/components/Overview.js

import React from 'react';
import './Overview.css'; // Import your CSS file here
import exploreImage from '../assets/images/explorearound.jpg';
import fitnessImage from '../assets/images/fitness_center.jpg';
import exclusiveImage from '../assets/images/Exlusive.jpeg';



const Overview = () => {
  return (
    <div>
      {/* Overview Main Content */}
      <section className="overview-section">
        <div className="overview-text">
          <h1>ABC Restaurant</h1>
          <p>
             {/* Add Overview Main Content */}
          </p>
          <a href="/menu" className="cta-button">
            Explore
          </a>
        </div>

        
      </section>

      {/* Explore More Section */}
      <section className="explore-section">
       
        <div className="explore-content">
          <img src={exploreImage}  alt="Explore Image 1" className="explore-image" />
          <div className="explore-text">
            <h3>Location</h3>
            <p>
              {/* Add Content */}
            </p>
          </div>
        </div>

        
        <div className="explore-content reverse">
          <img src={fitnessImage}  alt="Explore Image 2" className="explore-imagesecond" />
          <div className="explore-textsecond">
            <h3> Facilities</h3>
            <p>
               {/* Add Content */}
            </p>
            <a href="/facilities" className="explore-btn">
              Explore 
            </a>
          </div>
        </div>
      </section>

     
      <section className="explore-section">
        <div className="explore-content">
          <img src={exclusiveImage}  alt="Explore Image 1" className="explore-image3" />
          <div className="explore-text3">
            <h3>Exclusive offers </h3>
            <p>
               {/* Add Content */}
            </p>
            <a href="/offers" className="explore-btn">
              Explore 
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Overview;
