import React from 'react'
import './App.css';
export default function Edu({school,time,major}) {
   return (
    <section id="edu">
            <div>
                <div className="edu-item">
                    <span className="edu-name">{school}</span>
                    <span className="edu-time">{time}</span>
                    
                </div>  
                <span>{major}</span>
            </div>
        </section>
   );
}