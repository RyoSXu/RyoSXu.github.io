import type { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  name: '徐尚',
  englishName: 'Ryo Xu',
  avatar: './avatar.jpg', // we will move avatar to public later
  keywords: ['AI应用开发', '软件开发', '机器学习'],
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
      period: '2026.04 — 2026.10',
      description: '独立负责工业振动预测性维护平台的 Web 化重构，完成原系统调研、需求拆解、架构设计、全栈开发、测试及部署交付。主导数据采集接入、信号分析、异常诊断、资产与配置管理、专家分析工作台等核心模块，并针对工业现场完善数据可靠性、故障恢复和运行监控机制，将桌面分析工具建设为兼顾在线监测、离线诊断与工程部署的完整产品。',
    },
    {
      company: '安徽航展自动化科技有限公司',
      role: '自动化实习生',
      location: '滁州',
      type: '实习',
      period: '2023.12 — 2024.02',
      description: '参与工厂自动化生产线升级改造项目，协助完成自动化系统方案设计、PLC 控制程序调试及传感器选型与配置；参与智能仓储系统的现场实施与联调，积累了工业现场环境认知与跨部门协作经验。',
    },
  ],
  skills: [
    {
      name: '编程语言',
      skills: ['Python', 'C++', 'TypeScript', 'Go'],
    },
    {
      name: '深度学习',
      skills: ['PyTorch', 'Transformer', 'GNN'],
    },
    {
      name: '全栈开发',
      skills: ['Vue3', 'FastAPI', 'SQLite', 'PyInstaller', 'Inno Setup'],
    },
    {
      name: '系统协议',
      skills: ['Linux', 'OPC UA'],
    },
    {
      name: '开发工具',
      skills: ['Git', 'Docker', 'Claude Code', 'Codex', 'Cursor', 'Antigravity'],
    },
  ],
  research: [
    {
      title: 'Phonon Density of States Prediction from the Atomic Relative Position Encoding Attention Transformer',
      status: 'npj Computational Materials',
      journalMetrics: {
        publisher: 'Nature Portfolio',
        if: '11.9',
        if5: '13.0',
        jcr: 'Q1',
        cas: '材料科学1区 (TOP期刊)'
      },
      description: '针对传统计算方法预测声子态密度（Phonon Density of States）成本高、速度慢的问题，提出了 ARPAT (Atomic Relative Position Encoding Attention Transformer) 模型。该模型将径向基函数编码的相对距离与球谐函数编码的方向特征融合至注意力机制中，大幅增强了对三维晶格几何与长程原子相互作用的表征能力。',
      highlights: [
        '构建并验证了包含逾 2.4 万条数据、覆盖 86 种元素的声子态密度大规模数据集',
        '在预测精度上显著优于 E3NN、GATGNN、M3GNet 以及原 SOTA 模型 Mat2Spec',
        '具备极高的计算效率（较传统方法实现数个数量级的速度跨越），及在复杂体系中的优异泛化能力，为新材料高通量筛选提供了全新路径',
      ],
      tags: ['Python', 'PyTorch', 'Transformer', 'Materials AI'],
      githubUrl: 'https://github.com/RyoSXu/ARPAT',
      images: [
        './assets/arpat/Figure 1.jpg',
        './assets/arpat/Figure 2.jpg',
        './assets/arpat/Figure 3.jpg',
        './assets/arpat/Figure 4.jpg',
        './assets/arpat/Figure 5.jpg',
      ],
    },
  ],
  projectExperience: [
    {
      title: 'MDoctor - 工业振动分析软件',
      description: '面向设备预测性维护场景，将原 PyQt 振动分析工具重构为 FastAPI + Vue 3 / TypeScript 前后端分离平台，贯通 PLC、FTP 及 CSV 数据接入、存储、分析、诊断与展示链路。后端基于 NumPy / SciPy 实现时域特征提取、FFT、包络解调、速度谱转换和异常检测，结合轴承与齿轮故障频率、ISO 限值、频带告警及自适应基线，输出包含严重度、判断证据和处置建议的诊断结果；前端基于 ECharts 构建资产树、时域波形图、频谱图、包络谱图、瀑布图、健康趋势、交互游标及跨时间与跨通道对比工作台。系统支持在线监测、离线导入、配置管理、报告归档与 Windows 独立部署，并完善可靠入库、异常恢复及链路状态监控机制。',
      tags: ['Vue3/TypeScript', 'Pinia', 'ECharts', 'FastAPI', 'SciPy', 'SQLite', 'OPC UA', 'FTP', 'PyInstaller', 'Go', 'SSE'],
      icon: 'activity',
    },
  ],
}
