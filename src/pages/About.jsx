import React from 'react';
import './App.css';

export default function About({ about, line }) {
    return (
  <div id="about">   
    <div className="desc-text">{about}
        <div className="quote-box">{line}</div>
    </div>
  </div>
    );
}

