import type { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  name: '徐尚',
  englishName: 'Ryo Xu',
  avatar: './avatar.jpg', // we will move avatar to public later
  keywords: ['AI应用开发', '机器学习', '工业软件开发'],
  location: '上海市',
  birthdate: '2003-06-25',
  contact: {
    email: 'xushang@shu.edu.cn',
    phone: '187 0189 8786',
    github: 'https://github.com/RyoSXu',
  },
  education: [
    {
      school: '上海大学',
      logo: './assets/logo/SHU_logo.png',
      college: '材料基因组工程研究院',
      major: '计算机科学与技术',
      degree: '硕士',
      period: '2024.09 — 2027.06',
      tags: ['211'],
    },
    {
      school: '安徽财经大学',
      logo: './assets/logo/AUFE_logo.png',
      college: '管理科学与工程学院',
      major: '计算机科学与技术',
      degree: '本科',
      period: '2020.09 — 2024.06',
    },
  ],
  experience: [
    {
      company: 'ABB(中国)有限公司 - B&R工业自动化',
      role: 'AI应用开发',
      location: '上海',
      type: '实习',
      period: '2026.04 — 至今',
      description: '负责 MDoctor 工业振动分析软件项目，独立完成从立项到工控机上线的完整交付，构建可在产线部署的振动监测与故障诊断系统；期间主动对接现场工程师、梳理设备数据，并持续沟通以对齐产品方向与现场需求。',
    },
    {
      company: '安徽航展自动化科技有限公司',
      role: '自动化实习生',
      location: '滁州',
      type: '实习',
      period: '2023.12 — 2024.02',
      description: '负责自动化系统设计、西门子 PLC 程序编写、传感器配置；参与工厂自动化生产线升级改造与智能仓储系统开发；具备工业现场调试与问题定位经验。',
    },
  ],
  skills: [
    {
      name: '语言与环境',
      skills: ['Python', 'C++', 'Linux', 'Git', 'JavaScript'],
    },
    {
      name: 'AI / 深度学习',
      skills: ['PyTorch', 'Transformer', 'GNN'],
    },
    {
      name: '工程与开发',
      skills: ['Vue.js', 'FastAPI', 'SQLite', 'Electron'],
    },
    {
      name: 'AI 辅助编程',
      skills: ['Claude Code', 'Codex', 'Antigravity'],
    },
  ],
  research: [
    {
      title: 'Phonon Density of States Prediction from the Pre-trained Phonon Transformer',
      status: 'npj Computational Materials',
      journalMetrics: {
        publisher: 'Nature Portfolio',
        if: '11.9',
        if5: '13.0',
        jcr: 'Q1',
        cas: '材料科学1区 (TOP期刊)'
      },
      description: '针对传统计算方法预测声子态密度（Phonon Density of States）成本高、速度慢的问题，提出了 PPhT (Pre-trained Phonon Transformer) 模型。该模型将径向基函数编码的相对距离与球谐函数编码的方向特征融合至注意力机制中，大幅增强了对三维晶格几何与长程原子相互作用的表征能力。',
      highlights: [
        '构建并验证了包含逾 2.4 万条数据、覆盖 86 种元素的声子态密度大规模数据集',
        '在预测精度上显著优于 E3NN、GATGNN、M3GNet 以及原 SOTA 模型 Mat2Spec',
        '具备极高的计算效率（较传统方法实现数个数量级的速度跨越），及在复杂体系中的优异泛化能力，为新材料高通量筛选提供了全新路径',
      ],
      tags: ['Python', 'PyTorch', 'Transformer', 'Materials AI'],
      githubUrl: 'https://github.com/RyoSXu/PPhT',
      images: [
        './assets/ppht/Figure 1.jpg',
        './assets/ppht/Figure 2.jpg',
        './assets/ppht/Figure 3.jpg',
        './assets/ppht/Figure 4.jpg',
        './assets/ppht/Figure 5.jpg',
      ],
    },
  ],
  projectExperience: [
    {
      title: 'MDoctor - 工业振动分析软件',
      description: '在贝加莱（B&R）实习期间独立全栈开发的重点项目，主导从产品到上线全流程：完成需求拆解、产品定位与架构设计，独立承担前端开发、后端服务、故障诊断算法及工控机本地部署，最终交付可在产线部署的设备状态监控与故障诊断系统。',
      tags: ['Web 开发', 'FastAPI', 'Electron', 'PLC 数据接入', '故障诊断算法'],
      icon: 'activity',
    },
  ],
  projects: [
    {
      title: '2Prac - 自定义刷题程序',
      description: '一个将题库转换为刷题程序的工具。基于开源程序修改，增加了通过脚本将自定义题库转换为 JSON 格式并导入的功能。解决了同类产品付费且使用复杂的痛点。',
      tags: ['Vue.js', 'JavaScript', 'JSON Processing'],
      images: ['./assets/projects/2prac1.png', './assets/projects/2prac2.png'],
    },
    {
      title: 'loveCom - 微信小程序平台',
      description: '一个自定义商品售卖的小程序平台，旨在为用户提供零手续费的开店体验。采用微信小程序原生开发 + 腾讯云开发（CloudBase）架构。',
      tags: ['微信小程序', 'CloudBase', 'Serverless'],
      icon: 'shopping-bag',
    },
    {
      title: '今日食份 - 数字化冰箱',
      description: '情侣伙食助手，基于微信小程序云开发。包含食材入库、库存看板（过期预警）、菜谱管理及饮食日志等核心功能，实现精细化膳食管理。',
      tags: ['微信小程序', '云开发', 'MVP'],
      images: [
        '/assets/projects/OurDailyMeal_1.png',
        '/assets/projects/OurDailyMeal_2.png',
        '/assets/projects/OurDailyMeal_3.png',
        '/assets/projects/OurDailyMeal_4.png',
        '/assets/projects/OurDailyMeal_5.png',
      ],
    },
  ],
}
