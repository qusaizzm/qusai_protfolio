// import React from 'react';
import CV from '../../assets/Qusai Flutter Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets talk
      </a>
    </div>
  );
};

export default CTA;
