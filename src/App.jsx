import React from 'react';
import { HashRouter as Router, Routes, Route, Link,Navigate  } from 'react-router-dom';
import Home  from './pages/Home'; 
import Title from './components/Title';
import About from './pages/About';

import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';

import { ThemeProvider,ThemeToggles  } from './context/ThemeContext';
import {HeaderComponent,SkillItem,ScrollReveal} from'./pages/move';
import ProjectList from './components/ProjectList';

function Footer () {
    return (
        <footer>
            <div className='footer'>  ©  2026  Jing Jiaqi · USTC </div>
        </footer>
    )
}



function SkillsSection ()  {
  const skills = [
    { label: 'HTML/CSS', target: 80 },
    { label: 'JavaScript', target: 70 },
    { label: 'React.js', target: 60 }, 
    { label: 'C语言', target: 90 },
  ];

  return (
    <div  id="skills" className="skills-container">
      {skills.map((skill, index) => (
        <SkillItem key={index} label={skill.label} targetValue={skill.target} />
      ))}
    </div>
  );
};


function Hobby1 (){
  const tags = ['🏸 羽毛球', '🏃 跑步', '📖 古典诗词', '📚 课外阅读'];

  return (
    <div id="hobby">
      {tags.map((tag, index) => (
        <ScrollReveal key={index}>
            <div className='tag'>
          <span className="tag-hobby" >
            {tag}
          </span></div>
        </ScrollReveal>
      ))}
    </div>
  );
};

function ProjectSection ()  {
  const projects = [
    { title: '个人主页搭建', content:'使用HTML/CSS/JavaScript/React等搭建个人主页' },
  
  ];

  return (
    <div  id="project">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} content={project.content} />
      ))}
    </div>
  );
};


export function App() {
    return (
      
        <ThemeProvider>
            
                <div className="app-container">
                    <ThemeToggles />
                    <HeaderComponent />
                    <ProjectList/>

                  

                    {/* 路由区域 */}
                    <Routes>
                       
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={ <Home/> } />
                        
                        <Route path="/edu" element={ <About/> }  />
                       
                        <Route path="/skills" element={<Title num="03" title="🔩技能特长" children={<SkillsSection/>} />} />
                        <Route path="/hobby" element={<Title num="04" title="❤️兴趣爱好" children={<Hobby1/>} />} />
                        <Route path="/project" element={<Title num="05" title="🚀我的项目" children={<ProjectSection/>} />} />
                        <Route path="/Contact" element={<div style={{ marginTop: '700px' }}><Title num="06" title="☎️联系我" children={<Contact/>} /></div>} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>

                    <Footer />
                    {/* <BackToTop /> */}
                </div>
          
        </ThemeProvider>  
        
    );
}



export default App;


