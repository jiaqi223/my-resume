import React, { useState, useEffect, Children } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import '../styles/Contact2.css';


import { Button } from '../components/Button'; 

export default function Title ({title,children}) {
  const navigate = useNavigate();

   
  
    const goToContact4 = () => {
      // 2. 执行跳转动作，这里的路径必须和 App.js 里的 path 一致
      navigate('/home');
    };
  return (
    <div>
   <div className="page-border"></div>
    <div className="bg-glow glow-1"></div>
    <div className="bg-glow glow-2"></div>

   <div className="page-border"></div>
    <div className="section-card">
    <div className="section-header">
      <span className="section-num">·</span>
      <span className="section-title">{title}</span>
    </div>
    <span>{children}</span>
    </div>
     <Button 
                                
            className={`btn3`}
            onClick={goToContact4}
                      >
                       Go Back
                      </Button>
    </div>
  );
}
