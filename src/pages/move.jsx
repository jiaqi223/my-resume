import React, { useState, useEffect ,useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../App.css'; // 确保引入了 CSS
import { Button } from '../components/Button';
 


// === 2. 技能标签入场动画 ===
// 利用 IntersectionObserver 监听滚动，当看到技能标签时弹出

export function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.7 }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  // 定义初始和激活状态的样式
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
    transition: 'all 0.5s ease-out',
    // display: 'inline-block', // 确保 transform 生效
     display: 'block',
  };

  return (
    <div ref={domRef} style={style}>
      {children}
    </div>
  );
};






// === 3. 返回顶部按钮 ===

// export function BackToTop () {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handler = () => setIsVisible(window.scrollY > 300);
//     window.addEventListener('scroll', handler);
//     return () => window.removeEventListener('scroll', handler);
//   }, []);

//   return (
//      <Button 
//       variant="round" //  round 是圆形悬浮样式
//       className={`back-to-top ${isVisible ? 'visible' : ''}`}
//       onClick={() =>{
      
//         window.scrollTo({ top: 0, behavior: 'smooth' })}} 
//     >
//       ↑
//     </Button>
//   );
// };
// === 4. 导航/标题滚动吸顶效果 (针对 header-card) ===

export function HeaderComponent () {
  // 1. 使用 Ref 代替 querySelector
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // 获取初始位置
    const headerOffset = header.offsetTop;

    const handleScroll = () => {
      // 2. 使用状态控制样式，而不是直接操作 style
      if (window.scrollY > headerOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // 3. 组件销毁时必须移除监听器，防止内存泄漏
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. 平滑滚动处理函数
  const handleNavClick = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetId = e.target.getAttribute('href'); // 获取 #id
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      
            <div> {/* 导航栏 */}
            <nav className="nav-bar">
               <Link to="/home">Home</Link>
             
              <Link to="/edu">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/hobby">Hobby</Link>
               <Link to="/project">Project</Link>
              <Link to="/Contact">Contact</Link>
             
             </nav>
             </div> 
          
    </div>
  );}


export function SkillItem ({ label, targetValue }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // 1. 创建观察器
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一旦触发，停止观察
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. 数字累加逻辑
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1000; // 动画持续 1 秒
    const increment = targetValue / (duration / 20); // 每20ms增加多少

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div className="skill-item" ref={domRef} style={{ marginBottom: '20px' }}>
      <div className="skill-info">
        <span>{label}</span>
        {/* 数字显示 */}
        <span className="counter">{count}%</span>
      </div>
      
      <div className="progress-bar" 
      
      >
        {/* 进度条填充 */}
        <div 
          className="progress-fill" 
          style={{
            width: isVisible ? `${targetValue}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};







    
    
    
    