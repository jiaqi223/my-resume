


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home  from './pages/Home'; 
import { Title } from './pages/Title';
import About from './pages/About';
import Edu from './pages/Edu';
import Exp from './pages/exp';
import './pages/App.css';
import { ThemeProvider,ThemeToggles  } from './context/ThemeContext';
import {BackToTop,HeaderComponent,SkillItem,ScrollReveal} from'./pages/Projects';
 

function Footer () {
    return (
        <footer>
            <p>  ©  2026   景佳琪 · USTC </p>
        </footer>
    )
}
function About1 () {
    return (
    <About 
        about="本人阳光开朗，乐观向上，自立自强。在学习上勤奋刻苦，不轻言放弃，遇到困难积极解决。
      目前就读于中国科学技术大学，致力于在电子信息领域深耕实践。" 
        line="路漫漫其修远兮，吾将上下而求索" 
    /> 

    );
}
function Edu1 ()
{
    return (
    <Edu
        school="中国科学技术大学 (本科)"
        time="2025 - 至今"
        major="6系·电子信息专业"
    />
    );
}


function SkillsSection ()  {
  const skills = [
    { label: '数学分析', target: 90 },
    { label: '线性代数', target: 85 },
    { label: 'C语言程序设计', target: 80 },
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




function Exp1 () {
    return(
    <div className="desc-text">
        <Exp
        position="学生会干事："
        experience="参与举办和筹划多次校园活动，具备良好的沟通与执行能力。"
        />
         <Exp
        position="数学课代表："
        experience="初高中长期担任此职，协助老师处理班级事务。"
        />
         <Exp
        position="志愿者经历："
        experience="在校运动会中担任志愿者，负责赛事记录与后勤保障。"
        />
     </div>
    )
}


// --- 新增：把原来的单页内容组合成一个“主页”组件 ---
const MainPage = (
) => (
    <>
        {/* <Home />  */}
        <Title num="01" title="关于我" children={<About1/>
} />
        <Title num="02" title="教育经历" children={<Edu1/>
} />
        <Title num="03" title="技能特长" children={<SkillsSection/>
} />
        <Title num="04" title="兴趣爱好" children={<Hobby1/>
} />
        <Title num="05" title="校园经历" children={<Exp1/>
} />
    </>
);

export function App() {
    return (
        <ThemeProvider>
            
                <div className="app-container">
                    <ThemeToggles />
                    <HeaderComponent />

                  

                    {/* 路由区域 */}
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/home" element={ <Home/>} />
                        <Route path="/about" element={<Title num="01" title="关于我" children={<About1/>} />} />
                        <Route path="/edu" element={<Title num="02" title="教育经历" children={<Edu1/>} />} />
                        <Route path="/skills" element={<Title num="03" title="技能特长" children={<SkillsSection/>} />} />
                        <Route path="/hobby" element={<Title num="04" title="兴趣爱好" children={<Hobby1/>} />} />
                        <Route path="/exp" element={<Title num="05" title="校园经历" children={<Exp1/>} />} />
                    </Routes>

                    <Footer />
                    <BackToTop />
                </div>
          
        </ThemeProvider>
    );
}

// function App() {
//     return (
//         <div> 
//           <ThemeProvider>
//             <ThemeToggles />
//             <HeaderComponent/>
//             <Home /> 
//             <Title
//                 num="01"
//                 title="关于我"
//                 children={<About1/>}
//             />
//             <Title
//             num="02"
//             title="教育经历"
//                 children={<Edu1/>}
//             />
//             <Title
//             num="03"
//             title="技能特长"
//             children={ <SkillsSection/>}
//             />
            
//             <Title
//             num="04"
//             title="兴趣爱好"
//             children={<Hobby1/>}
//             />
//             <Title
//             num="05"
//             title="校园经历"
//             children={<Exp1/>}
//             />
//             <Footer/>
           
           
//             {/* <ThemeToggle/> */}
//             <BackToTop/>
//             </ThemeProvider>

 
//         </div>
//     );
// }


export default App;


