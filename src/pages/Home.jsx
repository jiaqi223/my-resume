

import React, { useState, useEffect, Children } from 'react';
import './App.css'; // 引入你刚才保存的 CSS


      
export default function Home  () {
  {/* 个人信息卡片 */}
  return (
    <div id="home">


      <div className='greet'>
        <div className='greeting'>Nice to meet you!</div>
        
      </div>
     <div className="purple-sphere" style={{top: '10%', right:'5%'}}></div>
      <div className="purple-sphere" style={{bottom: '10%',left: '5%'}}></div>
      
   <header  className="header-card">
   {/* <header className='bg-purple-main'> */}
       
        
        <div className="avatar-wrapper">
          <img src="/public/2025.jpg" alt="头像" />
        </div>
        <div className="info-content">
          <h1>景佳琪</h1>
          <div className="school-info">
            <span>🏫</span> 中国科学技术大学 · 电子信息专业 · 本科在读
          </div>
          <div className="contact-grid">
              <a href="#" className="contact-item">
                <span className="icon">👤</span> 政治面貌: 共青团员
              </a>
              <a href="#" className="contact-item">
                <span className="icon">🎂</span> 出生日期: 2007.02
              </a>
              <a href="tel:18239961398" className="contact-item">
                <span className="icon">📱</span> 手机: 182-3996-1398
              </a>
              <a href="mailto:2567156739@qq.com" className="contact-item">
                <span className="icon">✉️</span> 邮箱: 2567156739@qq.com
              </a>
          </div>
        </div>
      </header>
</div>
      

  ); 


};
      
  

