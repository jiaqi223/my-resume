import React from 'react';
import './App.css';
export default function Exp({position,experience}) {
  return (
    <section id="exp" >
            <div >
                <p className='experience'>• <strong>{position}</strong> {experience}</p>
              
            </div>
        </section>
  );
}
  
    


