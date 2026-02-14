// src/data.js

export const resumeData = {
  // 基础个人信息
  profile: {
    name: "景佳琪",
    avatar: "/2025.jpg", // 确保图片放在 public 文件夹下
    title: "电子信息专业 · 本科在读",
    university: "中国科学技术大学",
    department: "6系 (电子工程与信息科学系)",
    status: "2025级本科生",
    politics: "共青团员",
    birthday: "2007.02",
    phone: "182-3996-1398",
    email: "2567156739@qq.com",
    motto: "路漫漫其修远兮，吾将上下而求索"
  },

  // 自我评价
  about: "本人阳光开朗，乐观向上，自立自强。在学习上勤奋刻苦，不轻言放弃，遇到困难积极解决。目前就读于中国科学技术大学，致力于在电子信息领域深耕实践。",

  // 教育背景
  education: [
    {
      school: "中国科学技术大学",
      degree: "本科",
      major: "电子信息专业",
      duration: "2025 - 至今",
      details: "主修电子信息工程相关课程，包括数学分析、线性代数、C语言程序设计等基础学科。"
    }
  ],

  // 技能特长 (用于进度条展示)
  skills: [
    { label: "数学分析", target: 30 },
    { label: "线性代数", target: 88 },
    { label: "C 语言程序设计", target: 70 },
    { label: "电路基础", target: 45 }
  ],

  // 校园经历
  experience: [
    {
      role: "学生会干事",
      content: "参与举办和筹划多次校园活动，具备良好的沟通与执行能力。"
    },
    {
      role: "数学课代表",
      content: "初高中长期担任此职，协助老师处理班级事务，培养了极强的责任感。"
    },
    {
      role: "志愿者经历",
      content: "在校运动会中担任志愿者，负责赛事记录与后勤保障工作。"
    }
  ],

  // 兴趣爱好
  hobbies: [
    { icon: "🏸", name: "羽毛球" },
    { icon: "🏃", name: "跑步" },
    { icon: "📖", name: "古典诗词" },
    { icon: "📚", name: "课外阅读" }
  ],

  // 项目经历 (预留，方便你后续添加)
  projects: [
    {
      id: 1,
      title: "个人交互式简历网页",
      tech: "React + Vite + CSS3",
      desc: "基于 React 开发的响应式个人主页，包含暗黑模式切换、滚动动画及组件化开发实践。"
    }
  ]
};
