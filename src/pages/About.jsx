import React from 'react';
import '../App.css';
import '../styles/home.css';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function About() {
     const navigate = useNavigate();

  const goToContact3 = () => {
    // 2. 执行跳转动作，这里的路径必须和 App.js 里的 path 一致
    navigate('/home');
  };
    return (
  <div id="edu">   
  <div className="page-border"></div>
    <div className="bg-glow glow-1"></div>
    <div className="bg-glow glow-2"></div>

      

    <div className="container">
    
        <div className="bg-text">WELCOME</div>

        <div className="main-card card">
            <span className="label">ABOUT ME </span>
            <h1 className="name">景佳琪</h1>
            <ul className="info-list">
                <li>中国科学技术大学 · 电子信息专业</li>
                <li>政治面貌：共青团员</li>
                <li>出生日期: 2007.02</li>
                <li>当前状态：本科在读</li>
            </ul>
            <div className="skills-tag2">
                <span className="tag2">Explorer</span>
                <span className="tag2">Creator</span>
                <span className="tag2">Developer</span>
            </div>
        </div>

       
        <div className="sub-card card">
            <span className="label">MY MOTTO </span>
            
            <p className="quote">“ 保持热爱，奔赴山海。在技术的海洋里探索无限可能。 ”</p>
           
        </div>
    </div>
    <Button 
                      
                      className={`btn3`}
                      onClick={goToContact3}
                    >
                     Go Back
                    </Button>
 </div>

  );
}
