import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../styles/Contact2.css';


import { Button } from '../components/Button'; 

export default function Contact() {
  const navigate = useNavigate();

   
  
    const goToContact4 = () => {
      // 2. 执行跳转动作，这里的路径必须和 App.js 里的 path 一致
      navigate('/home');
    };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    // 1. 必须首先阻止默认行为
    e.preventDefault(); 
    // 使用 useCallback 确保处理函数不会导致组件不必要的重绘
  const handleFocus = (e
) => {
    // 可以在这里手动处理滚动，但通常保持静默即可
    // e.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
    // 2. 逻辑处理
    if (!name || !msg) {
      alert("请填写姓名和留言内容");
      return;
    }

    alert(`提交成功！\n姓名：${name}\n留言：${msg}`);
    
    // 3. 关键：提交后清空状态，这样页面就不会因为表单状态改变而产生奇怪的滚动
    setName('');
    setEmail('');
    setMsg('');

   
  };

  return (
   <section id="con" style={{ overflowAnchor: 'none' }}> 
      {/* 顶部联系方式卡片 */}

      {/* overflowAnchor: none 防止浏览器自动调整滚动位置 */}

      <div className='contact-grid2'>
        <a href="tel:18239961398" className="contact-item2">
          <div className="icon">📱</div>
          <div className='contact-text'>手机: 182-3996-1398</div>
        </a>
        <a href="mailto:2567156739@qq.com" className="contact-item2">
          <div className="icon">✉️</div>
          <div className='contact-text'>邮箱: 2567156739@qq.com</div>
        </a>
        <a href="https://github.com/jiaqi223" className="contact-item2">
          <div className="icon">🔗</div>
          <div className='contact-text'>GitHub: jiaqi223</div>
        </a>
      </div>

  
      <div className='advice'>留言板</div>

      {/* 表单部分 */}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="username">姓名</label>
          <input
            type="text"
            id="username"
            placeholder="请输入您的姓名或昵称"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="email"
            placeholder="请输入您的邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">留言</label>
          <textarea
            id="message"
            placeholder="请输入您的留言内容"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>
        </div>

        {/* 使用原生 button 配合 type="submit" 最稳妥的 */}
        <button type="submit" className="submit-btn">
          提交
        </button>
      </form>
       
    </section>
    
  );
}