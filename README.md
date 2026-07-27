# 徐尚 · Ryo Xu — 个人主页

**🌐 网站**：[ryosxu.github.io](https://ryosxu.github.io)　｜　**📧 邮箱**：[xushang@shu.edu.cn](mailto:xushang@shu.edu.cn)　｜　**💻 GitHub**：[RyoSXu](https://github.com/RyoSXu)

**求职意向**：AI 应用开发工程师 / 工业软件开发工程师｜上海

---

## 个人简介

上海大学计算机科学与技术硕士（2027 届），具备 AI 应用、工业软件全栈开发与 PLC 工程实践经验。于 ABB/B&R 独立承担振动分析平台 MDoctor 的 Web 化重构与部署交付，覆盖数据采集、信号算法、故障诊断、可视化及工控机部署；以第一作者身份在 npj Computational Materials 发表材料机器学习论文（中科院一区TOP、JCR Q1）。

---

## 项目经历

### MDoctor — 工业振动分析平台

- 将原 PyQt 振动分析工具重构为 FastAPI + Vue 3 / TypeScript 前后端分离平台，独立完成需求分析、架构设计、核心开发及 Windows 部署交付。
- 打通 PLC、FTP、CSV、SQLite、特征提取和诊断展示链路，支持在线监测、离线导入、异常重试、配置管理及报告归档。
- 基于 NumPy / SciPy 实现时域特征、FFT、包络解调、速度谱和异常检测，并通过 ECharts 构建波形、频谱、瀑布图及健康趋势分析。
- 使用 Structured Text 与 C 重构 PLC 侧采集和诊断程序，对齐上下位机数据接口及诊断流程。
- 建立 pytest + Vitest 自动化测试与历史样本回归体系，覆盖采集入库、信号算法、诊断契约、离线导入及前端状态管理等关键链路共 1,200+ 项后端及 69 项前端测试，并基于 720 份历史采样验证重构一致性。

### MCode — 工业智能编程工具

- 围绕代码修改、上下文管理和编译诊断独立设计 3 类场景、80+ 条测试用例，提交 20+ 个有效缺陷并完成多轮版本回归。
- 参与迭代 AGENTS.md、Agent Skill 与 MCP 配置，将代码规范、工程约束、知识检索和 Build 反馈接入 Agent 工作流。

---

## 学术研究

### Phonon Transformer — Atomic Relative Position Encoding Attention Transformer

针对传统计算方法预测声子态密度（Phonon Density of States）成本高、速度慢的问题，提出了 Phonon Transformer (Atomic Relative Position Encoding Attention Transformer) 模型。该模型将径向基函数编码的相对距离与球谐函数编码的方向特征融合至注意力机制中，大幅增强了对三维晶格几何与长程原子相互作用的表征能力。

- 构建并验证了包含逾 2.4 万条数据、覆盖 86 种元素的声子态密度大规模数据集。
- 在预测精度上显著优于 E3NN、GATGNN、M3GNet 以及原 SOTA 模型 Mat2Spec。
- 具备极高的计算效率（较传统方法实现数个数量级的速度跨越），及在复杂体系中的优异泛化能力，为新材料高通量筛选提供了全新路径。

- **论文**：*Phonon Density of States Prediction from the Atomic Relative Position Encoding Attention Transformer*，发表于 npj Computational Materials（第一作者，中科院一区TOP，JCR Q1）
- **代码**：[github.com/RyoSXu/ARPAT](https://github.com/RyoSXu/ARPAT)
- **技术栈**：Python · PyTorch · Transformer · Materials AI

---

## 实习经历

### ABB(中国)有限公司 - B&R工业自动化
**AI应用开发（实习）** | 上海 | 2026.04 — 至今
独立负责工业振动分析平台 MDoctor 的 Web 化重构与部署交付，并负责 PLC 侧诊断程序和数据处理链路的重构维护；参与 MCode 工业 Coding Agent 的测试与领域能力建设，以及 MHelp 工业语音助手的 PLC 数据联调、RAG 召回测试和本地模型测评。

### 安徽航展自动化科技有限公司
**自动化实习生** | 滁州 | 2023.12 — 2024.02
负责自动化系统设计、西门子 PLC 程序编写、传感器配置；参与工厂自动化生产线升级改造与智能仓储系统开发；具备工业现场调试与问题定位经验。

---

## 技术技能

- **编程语言**：Python · TypeScript · C/C++ · Go · Structured Text
- **机器学习**：PyTorch · Transformer · GNN
- **全栈开发**：Vue 3 · FastAPI · ECharts · SQLite · REST API
- **工业与部署**：PLC · OPC UA · FTP · Git · Windows/Linux · Docker
- **AI 工程**：RAG · Agent Skill · MCP · Coding Agent

---

## 开源贡献

- **[mm7894215/TokenTracker](https://github.com/mm7894215/TokenTracker)**
  - [![PR #311 status](https://img.shields.io/github/pulls/detail/state/mm7894215/TokenTracker/311?style=flat-square&label=PR%20%23311)](https://github.com/mm7894215/TokenTracker/pull/311) — 为 AnythingLLM Desktop 增加跨平台、隐私友好的增量 Token 用量采集，已随 v0.79.3 发布
- **[transmute-app/transmute](https://github.com/transmute-app/transmute)**
  - [![PR #222 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/222?style=flat-square&label=PR%20%23222)](https://github.com/transmute-app/transmute/pull/222) — 支持跟随系统并分别配置浅色、深色主题
  - [![PR #220 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/220?style=flat-square&label=PR%20%23220)](https://github.com/transmute-app/transmute/pull/220) — 为文件与任务历史增加 API 驱动的服务端分页
  - [![PR #214 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/214?style=flat-square&label=PR%20%23214)](https://github.com/transmute-app/transmute/pull/214) — 为 PDF 转换增加 Docker 友好的自定义 CSS 支持
- **[hmjz100/LinkSwift](https://github.com/hmjz100/LinkSwift)**
  - [![PR #431 status](https://img.shields.io/github/pulls/detail/state/hmjz100/LinkSwift/431?style=flat-square&label=PR%20%23431)](https://github.com/hmjz100/LinkSwift/pull/431) — 修复 `alipan.com` 域名兼容场景下的 Token 空值问题
- **[C4illin/ConvertX](https://github.com/C4illin/ConvertX)**
  - [![PR #571 status](https://img.shields.io/github/pulls/detail/state/C4illin/ConvertX/571?style=flat-square&label=PR%20%23571)](https://github.com/C4illin/ConvertX/pull/571) — 增加面向 PDF 转换的区域感知 CJK 字体支持
- **[glanceapp/glance](https://github.com/glanceapp/glance)**
  - [![PR #1033 status](https://img.shields.io/github/pulls/detail/state/glanceapp/glance/1033?style=flat-square&label=PR%20%231033)](https://github.com/glanceapp/glance/pull/1033) — 修复 `X-Forwarded-For` 解析导致的速率限制绕过
- **[imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)**
  - [![PR #141 status](https://img.shields.io/github/pulls/detail/state/imsyy/DailyHotApi/141?style=flat-square&label=PR%20%23141)](https://github.com/imsyy/DailyHotApi/pull/141) — 将快手热榜路由由 HTML 抓取切换至 GraphQL API
- **[iib0011/omni-tools](https://github.com/iib0011/omni-tools)**
  - [![PR #398 status](https://img.shields.io/github/pulls/detail/state/iib0011/omni-tools/398?style=flat-square&label=PR%20%23398)](https://github.com/iib0011/omni-tools/pull/398) — 提议使用密码学安全随机数生成密码；并行实现 [#401](https://github.com/iib0011/omni-tools/pull/401) 合并时，维护者公开致谢本贡献

---

## 教育背景

| 学校                               | 专业             | 学历 | 时间               |
| ---------------------------------- | ---------------- | ---- | ------------------ |
| 上海大学 · 材料基因组工程研究院   | 计算机科学与技术 | 硕士 | 2024.09 — 2027.06 |
| 安徽财经大学 · 管理科学与工程学院 | 计算机科学与技术 | 本科 | 2020.09 — 2024.06 |

---

Built with Vue 3 · Vite · Tailwind CSS · Lucide Vue
