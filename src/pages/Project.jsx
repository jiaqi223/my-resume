import React from 'react'
import '../App.css';

import { useNavigate } from 'react-router-dom';
export default function Project({title,content}) {
    
    return (
    <section id="project">
            <div>
                
                <div className='project'>{title}</div>
                <div className='project-text'>{content}</div>
            </div>
        </section>
   );
}