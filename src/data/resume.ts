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
      description: '独立负责 MDoctor 工业振动分析软件从工控机桌面版到 Web 平台的完整架构设计与重构；深入产线理解 B&R PLC + mapp Vibration 采集体系，打通 FTP 波形入库与 OPC UA 实时监测双数据链路；与 mentor 及团队协作拆解振动分析业务需求，独立推进全栈开发与工控机桌面化封装。',
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
      skills: ['Python', 'C++', 'JavaScript'],
    },
    {
      name: '深度学习',
      skills: ['PyTorch', 'Transformer', 'GNN'],
    },
    {
      name: '全栈开发',
      skills: ['Vue3', 'FastAPI', 'SQLite'],
    },
    {
      name: '系统协议',
      skills: ['Linux', 'OPC UA'],
    },
    {
      name: '开发工具',
      skills: ['Git', 'Claude Code', 'Codex', 'Cursor', 'Antigravity'],
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
      githubUrl: 'https://github.com/RyoSXu/ARPAT',
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
      description: '独立完成旧版工控机软件到 Web 平台的完整移植。构建双通路数据链路：FTP 增量轮询采集 PLC 振动波形 + asyncua 异步读取 OPC UA 实时 RMS/Peak 经 SSE 推送；后端基于 SciPy 实现 FFT、Hilbert 包络解调、频域积分、MAD 稳健异常检测及轴承机理频率规则诊断；前端 ECharts 实现波形/频谱/包络谱/倒谱/语谱图/瀑布图等 8 类可视化，支持图表联动与触控手势适配；部署采用 PyInstaller + Go 系统托盘 + Edge WebView2 壳架构，支持 WinSW 服务化与 mDNS 局域网发现。',
      tags: ['Vue3/TypeScript', 'Pinia', 'ECharts', 'FastAPI', 'SciPy', 'SQLite', 'OPC UA', 'FTP', 'PyInstaller', 'Go', 'SSE'],
      icon: 'activity',
    },
  ],
}
