# 个人主页 - [景佳琪]

> 一个现代化的个人作品集网站，展示我的技能、项目和经历。

🔗 **在线访问**: [https://jiaqi223.github.io/my-resume/]



## ✨ 特性

- 🎨 现代化设计，响应式布局
- 🌓 支持亮色/暗黑模式切换
- ⚡ 使用 React 构建，性能优异
- 📱 完美适配移动端、平板、桌面端
- 🚀 部署在 GitHub Pages

## 🛠️ 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **路由**: React Router v6
- **样式**: CSS3 + CSS Modules
- **部署**: GitHub Pages

## 📂 项目结构

my-github-page/
├── public/
│  
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Button.jsx
│   │   ├── ProjectList.jsx
│   │   ├── SkeletonCard.jsx 
│   │   └──  Title.jsx
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   ├── move.jsx
│   │   └── Contact.jsx
│   ├── context/            # Context 状态管理
│   │   └── ThemeContext.jsx
│   ├── styles/             # 样式文件
│   │   ├──home .css
│   │   ├── Contact2.css
│   │   └── SkeletonCard.css
│   ├── App.jsx             # 根组件
│   ├── App.css
│   ├── main.jsx            # 入口
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md               # 项目文档

## 🎨 设计参考

本项目的设计灵感来源于：

1. [Dribbble](https://dribbble.com/shots/16075179-Developer-s-Portfolio-Landing-Page) - 整体布局风格

## 🤖 AI 协作记录

### 使用的 AI 工具
- **在问Gemini-3.0-flash**: 问题解答和代码优化

### 主要协作场景
#### 1. 主页框架搭建
**问题**: 根据设计参考搭建首页框架
**AI 帮助**: 提供了基本HTML和css代码
**我的修改**: 调整代码使页面更加和谐


#### 2. React 状态管理
**问题**: 怎么使用 Context API 实现全局主题管理
**AI 帮助**: 建议创建 Context、提供 Provider、消费数据三步给出示例代码
**我的修改**: 实例代码无法运行，自己进行调试
**学到的知识**: Context Provider 的实现原理

#### 3. 性能优化
**问题**: 如何实现点击按钮跳转页面
**AI 帮助**: 使用 React Router 的导航功能并给出实例
**我的修改**: 应用到多个按钮上
**学到的知识**: React Router 的导航功能

### AI 使用心得

1. AI 能快速提供解决思路，但要理解原理后再使用
2. 对于复杂需求，要分步骤提问，逐步完善
3. AI 生成的代码需要根据实际项目调整和优化
4. 保持独立思考，不过度依赖 AI

## 🚀 本地运行

\`\`\`bash
# 克隆项目
git clone https://github.com/jiaqi223/my-resume.git

# 进入目录
cd 仓库名

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
\`\`\`

访问 `http://localhost:5173` 查看项目。

## 📦 部署

\`\`\`bash
# 部署到 GitHub Pages
npm run deploy
\`\`\`

## 📄 开源协议

MIT License

---



## ✅ 验收标准

在提交前，请对照以下清单自查：

### 功能完整性
- [ ] 所有必需页面都已完成
- [ ] 路由正常工作，无 404
- [ ] 暗黑模式切换正常
- [ ] 响应式布局在各设备上正常

### 代码质量
- [ ] 组件拆分合理
- [ ] 代码有适当注释
- [ ] 无 console.log 等调试代码
- [ ] 无 ESLint 错误
- [ ] Git commit 信息清晰

### 设计审美
- [ ] 配色协调统一
- [ ] 排版整洁有序
- [ ] 有交互动画效果
- [ ] 参考了优秀设计
- [ ] 在 README 中注明设计来源

### 文档完善
- [ ] README 完整详细
- [ ] 包含 AI 协作记录
- [ ] 有项目运行说明
- [ ] 有在线访问链接

### 部署成功
- [ ] GitHub Pages 部署成功
- [ ] 在线链接可正常访问
- [ ] 在真机上测试过
- [ ] 分享给朋友测试过

