

import React, { useState, useEffect, Children } from 'react';
import '../App.css'; // 引入你刚才保存的 CSS
import '../styles/home.css';

import { Button } from '../components/Button';
 import { useNavigate } from 'react-router-dom';
      
export default function Home  () {

  
 const navigate = useNavigate();

  const goToContact = () => {
    // 2. 执行跳转动作，这里的路径必须和 App.js 里的 path 一致
    navigate('/Contact');
  };
  const goToContact2 = () => {
    // 2. 执行跳转动作，这里的路径必须和 App.js 里的 path 一致
    navigate('/Edu');
  };

  return (
    <div id="home">

  <div className='home-body'>
    <div className="page-border"></div>
    <div className="bg-glow glow-1"></div>
    <div className="bg-glow glow-2"></div>
    {/* <div className="page-border"></div> */}

    <nav>
        <div className="logo">My<span>Home</span></div>
        {/* <div style="cursor: pointer;">Menu</div> */}
    
       
    </nav>

    <div className="container">
       <div className="content">
            <div className="badge">
                <div className="line"></div>
                <span>Welcome to my world</span>
            </div>
       
            <h1>Hey!</h1>
            <span className="gradient-text"> I'm Plus 7</span>
            <p>一名阳光开朗，乐观向上的小女孩。目前就读于中国科学技术大学电子信息专业。</p>
            <p><strong>"路漫漫其修远兮，吾将上下而求索"</strong></p>
            
            {/* <button className="btn">联系我</button> */}
         
            <Button 
                  
                  className={`btn1`}
                  onClick={goToContact}
                >
                  Contact me
                </Button>
            <Button 
                  
                  className={`btn2`}
                  onClick={goToContact2}
                >
                  Learn more
                </Button>
           </div>     
       

        
        <div className="visual">
            <div className="main-sphere">
                💜
                <div className="cube cube-1"></div>
                <div className="cube cube-2"></div>
            </div>
        </div>
    </div>




</div>
</div>
 );
 }     

 
