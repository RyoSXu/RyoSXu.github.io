# 徐尚个人简历信息库

本文档用于沉淀个人经历、项目事实、技能关键词和可复用简历表述。它不是最终投递简历，而是素材库；投递不同岗位时，可从中挑选最相关内容并压缩到 1-2 页。

当前简历文件：

- `resume.pdf`：新版 PDF 简历，当前对外投递主版本。
- `resume.html`：新版 HTML 简历，内容与 PDF 简历保持一致，适合在线浏览与打印。
- `index.html`：个人主页，展示简历中的核心经历、研究与项目入口。
- `resume_text.txt`：已删除。该文件是旧版 PDF 文本抽取残留，存在乱码且无独有信息。

## 1. 基础信息

- 姓名：徐尚
- 年龄：22 岁
- 性别：男
- 手机 / 微信：18701898786
- 邮箱：xushang@shu.edu.cn
- 个人主页：ryosxu.github.io
- GitHub：RyoSXu
- 期望地点：上海市

## 2. 当前求职定位

### 主要目标方向

- AI 应用开发
- 机器学习
- 工业软件开发

### 当前推荐简介

```text
上海大学 27 届计算机科学与技术硕士，研究方向为材料机器学习与深度学习建模。具备 Python/PyTorch、FastAPI、Vue3、C++、Linux 与工业自动化系统开发经验，曾在 ABB/B&R 负责振动分析软件 MDoctor 的 Web 化重构、工控机部署与故障诊断算法开发。
```

### 定位注意事项

- 新版简历已将“测试开发”从主求职方向中移除，避免与 AI 应用开发、机器学习、工业软件开发混写。
- 工业方向可以突出 PLC 数据采集、FTP/CSV 数据流、工控机部署、Electron 本地化应用和故障诊断算法。
- 不建议写“精通 PLC”或“熟悉工业软件全流程”；更稳妥的说法是“参与 PLC 通信联调 / PLC 数据接入 / 工控机部署相关开发”。

## 3. 教育背景

### 上海大学

- 学院：材料基因组工程研究院
- 专业：计算机科学与技术
- 学历：硕士
- 时间：2024-09 至 2027-06
- 研究方向：材料机器学习、AI for Science、晶体材料谱学性质预测、Transformer 建模

### 安徽财经大学

- 学院：管理科学与工程学院
- 专业：计算机科学与技术
- 学历：本科
- 时间：2020-09 至 2024-06

## 4. 工作与实习经历

### ABB（中国）有限公司 / B&R 贝加莱工业自动化

- 地点：上海
- 部门：研发部
- 岗位：AI 应用开发
- 时间：2026-04 至今
- 关键词：Vue3、Python、FastAPI、SQLite、Electron、PLC、FTP、CSV、工控机、振动分析、故障诊断

#### 经历事实

- 参与并独立负责 MDoctor 工业振动分析软件的工程化开发与部署。
- 在 mentor 与业务负责人给出方向后，完成需求拆解、技术方案设计、后端数据解析、PLC 通信联调、异常检测算法、前端状态展示及本地数据存储等核心模块开发。
- 项目目标是将原本需要工程师携带电脑到现场采集和分析振动数据的软件，改造为可部署在工控机上的本地化分析应用。
- 前端使用 Vue3，后端使用 Python FastAPI，本地数据库使用 SQLite，应用通过 Electron 封装。
- 客户现场由 PLC 采集传感器数据并处理为 CSV 文件，再通过 FTP 传输到工控机。

#### 可复用简历表述

```text
独立负责 MDoctor 工业振动分析软件工程化开发与部署，在 mentor 与业务负责人给出方向后，完成需求拆解、技术方案设计、后端数据解析、PLC 通信联调、异常检测算法、前端状态展示及本地数据存储等核心模块开发。
```

```text
将原桌面采集分析工具改造为部署于工控机的 Electron 应用：PLC 采集传感器数据并生成 CSV，经 FTP 传输至工控机；FastAPI 完成数据解析、特征分析与故障诊断，Vue3 提供状态监控、趋势展示和结果可视化，SQLite 管理本地数据。
```

### 安徽航展自动化科技有限公司

- 地点：滁州
- 岗位：自动化实习生
- 时间：2023-12 至 2024-02
- 关键词：PLC、传感器、自动化系统、现场调试

#### 可复用简历表述

```text
负责自动化系统设计、西门子 PLC 程序编写、传感器配置；参与工厂自动化生产线升级改造、智能仓储系统开发；具备工业现场调试与问题定位经验。
```

## 5. 核心项目经历

### B&R / MDoctor 振动分析软件重构

- 时间：2026-04 至今
- 推荐角色：AI 应用开发实习生 / 核心开发者
- 技术栈：Vue3、FastAPI、SQLite、Electron、PLC、FTP、CSV、工控机
- 推荐位置：AI 应用开发、工业软件开发方向简历第一项目

#### 项目背景

MDoctor 是机械设备振动分析软件。原流程依赖工程师携带电脑到客户现场采集与分析振动数据，使用成本较高，实时性与现场可用性不足。项目目标是将软件重构为可在工控机上运行的应用，使客户工厂员工能够实时监看设备运转情况。

#### 可复用简历表述

```text
将原桌面采集分析工具改造为部署于工控机的 Electron 应用：PLC 采集传感器数据并生成 CSV，经 FTP 传输至工控机；FastAPI 完成数据解析、特征分析与故障诊断，Vue3 提供状态监控、趋势展示和结果可视化，SQLite 管理本地数据。
```

### ARPAT / 晶体材料声子态密度预测

- 时间：2024-11 至 2025-08
- 推荐角色：第一作者 / 模型主要开发者
- 技术栈：Python、PyTorch、Transformer、材料机器学习、MAE、MSE、R2
- 论文：Phonon Density of States Prediction from Atomic Relative Position Encoding Attention Transformer
- 投稿状态：npj Computational Materials 审稿中
- 代码与数据：github.com/RyoSXu/ARPAT
- 推荐位置：AI、机器学习、算法方向简历第一或第二项目

#### 项目背景

声子态密度是理解晶体材料振动特性、热力学性质和热输运性质的重要物理量。传统 DFT 计算成本高，难以满足高通量材料筛选需求。项目使用深度学习模型从晶体结构端到端预测声子态密度，将小时级计算压缩到毫秒级推理。

#### 可复用简历表述

```text
基于 PyTorch 独立实现 ARPAT 模型，用于从晶体结构预测声子态密度。在 Transformer 注意力机制中引入原子相对位置/距离编码以捕获晶体几何关系，MAE 较原 SOTA 模型 Mat2Spec 降低 27.6%，将传统 DFT 小时级计算压缩至毫秒级推理。相关论文投稿至 npj Computational Materials，当前审稿中；代码与数据已开源。
```

#### 必须保留的关键词

- PyTorch / Transformer
- 原子相对位置 / 距离编码
- 声子态密度端到端预测
- 原 SOTA 模型 Mat2Spec
- MAE 降低 27.6%
- DFT 小时级计算到毫秒级推理
- npj Computational Materials 审稿中

### 基于 1D-CNN 的时间序列预测系统

- 时间：2023-11 至 2024-06
- 推荐角色：独立开发者 / 本科毕业设计
- 技术栈：Python、PyTorch、1D-CNN、Tkinter、Pandas、NumPy、Matplotlib、Scikit-learn

#### 可复用简历表述

```text
开发基于 1D-CNN 的时间序列预测桌面系统，支持 CSV 数据导入、字段选择、数据清洗、归一化、训练集划分、模型参数配置、训练过程可视化与预测结果展示。使用 PyTorch 实现 1D-CNN 预测模型，Tkinter 构建 GUI，Matplotlib 集成训练与预测曲线可视化。
```

### 七宝中学高中生科创项目

- 时间：2025-06 至 2025-12
- 推荐角色：课题指导 / 学术写作课程教师
- 关键词：APET、Materials Project、材料带隙、介电常数、科研写作、课题指导

#### 可复用简历表述

```text
负责一位学生的机器学习课题指导，辅导其完成“基于 APET 模型的材料带隙与介电常数的预测分析”课题并撰写论文，随后作为任课老师教学全体学生学术写作课程。
```

## 6. 个人技能素材

### 当前简洁版

```text
编程与环境：熟悉 Python、C++，了解 JavaScript，具备算法与数据结构基础；熟悉 Linux、Git 等常用开发环境与工具。
AI/算法：熟悉 PyTorch，具备 Transformer、GNN、CNN 等模型复现、结构改进与实验分析经验。
工程开发：具备 Web 与桌面端应用开发经验，了解 Vue3、FastAPI、SQLite、Electron，具备前后端分离、桌面端封装、本地数据存储经验。
工业软件：了解 PLC 数据采集、传感器数据处理、FTP 数据传输、工控机部署与工业现场调试流程。
AI Coding：熟练使用 Claude Code、Codex、Antigravity 等工具进行多任务的需求拆解、文档编写、代码生成、测试验收等。
```

### 更短关键词版

```text
Python / C++ / JavaScript / Linux / Git
PyTorch / Transformer / GNN / CNN / MAE / MSE / R2
Vue3 / FastAPI / SQLite / Electron / 数据可视化
PLC 数据采集 / 传感器数据处理 / FTP / CSV / 工控机部署
Claude Code / Codex / Antigravity / AI Coding 工作流
```

## 7. 论文与科研成果

### ARPAT 论文

- 标题：Phonon Density of States Prediction from Atomic Relative Position Encoding Attention Transformer
- 状态：npj Computational Materials 审稿中
- 方向：材料机器学习、声子态密度预测、Transformer
- 代码与数据：github.com/RyoSXu/ARPAT

#### 可复用表述

```text
Phonon Density of States Prediction from Atomic Relative Position Encoding Attention Transformer，npj Computational Materials 审稿中，代码与数据已开源。
```

### 硕士开题方向

- 题目：基于 Transformer 的晶体材料谱学统一预测基础模型研究
- 关键词：Transformer、晶体材料、谱学性质、PhDOS、EDOS、Raman、基础模型、预训练-微调、任务令牌
- 使用建议：如果投 AI for Science、材料 AI 或科研导向岗位，可在自我介绍或科研经历中提及。

## 8. 证书、竞赛与校园经历

### 证书

- 大学英语四级（CET-4），2021-03，永久有效

### 竞赛经历

- 全国大学生创新创业大赛，2025-06
- 安徽省大学生微电影大赛，2023-10，校级优秀奖
- “东方财富杯”全国大学生金融精英挑战赛，2022-05，校级三等奖
- 中国国际大学生创新大赛，2021-07，作为队长带队参赛，获得校级优秀奖

### 校园经历

- 棋牌协会，公关部干事，2020-11 至 2022-11
- 计算机爱好者协会，外联部副部长，2020-10 至 2022-11
- 升学深造奖，2024-05
- 社会实践：乡村振兴、生态文明等主题

### 使用建议

- AI / 机器学习 / 工业软件方向简历中，竞赛与校园经历应压缩。
- 社团和社会实践可删除，除非岗位强调组织协调或简历空间充足。
- 英语四级可保留，但不要挤占核心项目篇幅。

## 9. 不同岗位取舍建议

### AI 应用开发版

优先保留：

- ABB/B&R MDoctor
- ARPAT
- 1D-CNN 时间序列预测系统
- 技能区突出 PyTorch、FastAPI、Vue3、Electron、AI Coding

可压缩：

- 七宝中学课题指导
- 弱相关竞赛和校园经历

### 机器学习 / 算法工程版

优先保留：

- ARPAT
- 1D-CNN 时间序列预测系统
- 七宝中学 APET 指导项目
- 硕士开题方向

可压缩：

- MDoctor 写成 AI 应用 / 工程落地项目

### 工业软件开发版

优先保留：

- ABB/B&R MDoctor
- 安徽航展自动化实习
- 1D-CNN 时间序列预测系统
- ARPAT 作为算法能力证明

可补充：

- PLC、传感器配置、FTP、CSV、工控机、Electron、FastAPI、SQLite

注意：

- 技能区写“了解 PLC 数据采集、传感器数据处理、FTP 数据传输、工控机部署与工业现场调试流程”即可，不建议扩大成“精通工业现场全链路”。

## 10. 推荐简历结构

```text
基础信息
求职意向
个人简介
教育背景
工作经历
项目经历
  1. B&R / MDoctor 振动分析软件重构
  2. ARPAT / 晶体材料声子态密度预测
  3. 基于 1D-CNN 的时间序列预测系统
个人技能
资格证书
```

如需投 AI for Science 或科研导向岗位，可增加：

```text
科研 / 教学经历
  - 七宝中学高中生科创项目
论文发表 / 开源成果
```

## 11. 暂不建议写得过满的内容

- “精通 PLC”
- “精通 Vue3 / FastAPI / Electron”
- “熟悉工业软件全流程”
- “熟悉工控机部署全流程”
- “熟练掌握所有主流 AI Coding 工具”
- “测试开发”与当前三大方向混写

更稳妥的表达：

- “参与 PLC 通信联调 / PLC 数据接入”
- “具备 Web 与桌面端应用开发经验”
- “了解 Vue3、FastAPI、SQLite、Electron，可完成前后端分离应用和本地数据分析工具开发”
- “熟练使用 Claude Code、Codex、Antigravity 等 AI Coding 工具辅助工程开发”
