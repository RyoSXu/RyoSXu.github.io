# Shang Xu · Ryo Xu — Personal Homepage

[中文](./README.md) ｜ **English**

**🌐 Website**: [ryosxu.github.io](https://ryosxu.github.io)　｜　**📧 Email**: [xushang@shu.edu.cn](mailto:xushang@shu.edu.cn)　｜　**💻 GitHub**: [RyoSXu](https://github.com/RyoSXu)

**Career Objective**: AI Application Engineer / Industrial Software Engineer | Shanghai

---

## Profile

M.S. candidate in Computer Science and Technology at Shanghai University (Class of 2027), with hands-on experience in AI applications, full-stack industrial software development, and PLC engineering. At ABB/B&R, independently led the web-based reengineering and Windows deployment of MDoctor, an industrial vibration analysis platform covering data acquisition, signal processing, fault diagnostics, visualization, and industrial PC deployment. Published a first-author materials machine learning paper in *npj Computational Materials* (CAS Q1 Top, JCR Q1, IF 13.1).

---

## Projects

### MDoctor — Industrial Vibration Analysis Platform

- Reengineered a legacy PyQt vibration analysis tool into a decoupled FastAPI + Vue 3 / TypeScript platform, independently delivering requirements analysis, architecture design, core development, Windows deployment, and handover.
- Integrated PLC, FTP, CSV, SQLite, feature extraction, and diagnostic visualization into an end-to-end workflow supporting online monitoring, offline import, automatic retries, configuration management, and report archiving.
- Implemented time-domain features, FFT, envelope demodulation, velocity spectra, and anomaly detection with NumPy / SciPy; built waveform, spectrum, waterfall, and health-trend visualizations with ECharts.
- Refactored PLC-side acquisition and diagnostic programs in Structured Text and C, aligning controller-to-host data interfaces and diagnostic workflows.
- Established pytest + Vitest automated testing and historical-sample regression, covering critical workflows with 1,200+ backend and 69 frontend tests; verified reengineering consistency against 720 historical samples.

### MCode — Industrial AI Coding Tool

- Independently designed 3 scenario categories and 80+ test cases for code editing, context management, and compilation diagnostics; reported 20+ valid defects and completed multiple regression cycles.
- Helped evolve AGENTS.md, Agent Skills, and MCP configurations to integrate coding standards, engineering constraints, knowledge retrieval, and build feedback into the agent workflow.

---

## Research

### Phonon Transformer — Atomic Relative Position Encoding Attention Transformer

Proposed the Phonon Transformer (Atomic Relative Position Encoding Attention Transformer) to address the high computational cost and low throughput of conventional phonon density-of-states prediction. The model incorporates radial-basis-encoded relative distances and spherical-harmonic directional features into the attention mechanism, strengthening its representation of three-dimensional lattice geometry and long-range atomic interactions.

- Built and validated a large-scale phonon density-of-states dataset with over 24,000 samples spanning 86 elements.
- Significantly outperformed E3NN, GATGNN, M3GNet, and the previous state-of-the-art model Mat2Spec in predictive accuracy.
- Achieved orders-of-magnitude speedup over conventional methods while maintaining strong generalization to complex material systems, enabling high-throughput materials screening.

- **Paper**: *Phonon Density of States Prediction from the Atomic Relative Position Encoding Attention Transformer*, published in *npj Computational Materials* (first author, CAS Q1 Top, JCR Q1, IF 13.1)
- **Code**: [github.com/RyoSXu/ARPAT](https://github.com/RyoSXu/ARPAT)
- **Tech Stack**: Python · PyTorch · Transformer · Materials AI

---

## Experience

### ABB (China) Ltd. — B&R Industrial Automation
**AI Application Development Intern** | Shanghai | Apr 2026 — Present

Independently responsible for the web-based reengineering and deployment of MDoctor, including maintenance of PLC-side diagnostic programs and data pipelines. Contributed to industrial Coding Agent evaluation and domain capability development for MCode, and supported PLC integration, RAG retrieval testing, and local-model evaluation for the MHelp industrial voice assistant.

### Anhui Hangzhan Automation Technology Co., Ltd.
**Automation Intern** | Chuzhou | Dec 2023 — Feb 2024

Supported automation system design, Siemens PLC programming, and sensor configuration; contributed to factory production-line upgrades and smart warehousing development; gained hands-on experience in industrial commissioning and troubleshooting.

---

## Technical Skills

- **Programming Languages**: Python · TypeScript · C/C++ · Go · Structured Text
- **Machine Learning**: PyTorch · Transformer · GNN
- **Full-Stack Development**: Vue 3 · FastAPI · ECharts · SQLite · REST API
- **Industrial & Deployment**: PLC · OPC UA · FTP · Git · Windows/Linux · Docker
- **AI Engineering**: RAG · Agent Skills · MCP · Coding Agents

---

## Open-Source Contributions

- **[mm7894215/TokenTracker](https://github.com/mm7894215/TokenTracker)**
  - [![PR #311 status](https://img.shields.io/github/pulls/detail/state/mm7894215/TokenTracker/311?style=flat-square&label=PR%20%23311)](https://github.com/mm7894215/TokenTracker/pull/311) — Added cross-platform, privacy-friendly incremental token usage collection for AnythingLLM Desktop; released in v0.79.3
- **[transmute-app/transmute](https://github.com/transmute-app/transmute)**
  - [![PR #222 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/222?style=flat-square&label=PR%20%23222)](https://github.com/transmute-app/transmute/pull/222) — Added system-aware light and dark theme configuration
  - [![PR #220 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/220?style=flat-square&label=PR%20%23220)](https://github.com/transmute-app/transmute/pull/220) — Added API-driven server-side pagination for file and task history
  - [![PR #214 status](https://img.shields.io/github/pulls/detail/state/transmute-app/transmute/214?style=flat-square&label=PR%20%23214)](https://github.com/transmute-app/transmute/pull/214) — Added Docker-friendly custom CSS support for PDF conversion
- **[hmjz100/LinkSwift](https://github.com/hmjz100/LinkSwift)**
  - [![PR #431 status](https://img.shields.io/github/pulls/detail/state/hmjz100/LinkSwift/431?style=flat-square&label=PR%20%23431)](https://github.com/hmjz100/LinkSwift/pull/431) — Fixed a null-token issue in `alipan.com` compatibility handling
- **[C4illin/ConvertX](https://github.com/C4illin/ConvertX)**
  - [![PR #571 status](https://img.shields.io/github/pulls/detail/state/C4illin/ConvertX/571?style=flat-square&label=PR%20%23571)](https://github.com/C4illin/ConvertX/pull/571) — Added locale-aware CJK font support for PDF conversion
- **[glanceapp/glance](https://github.com/glanceapp/glance)**
  - [![PR #1033 status](https://img.shields.io/github/pulls/detail/state/glanceapp/glance/1033?style=flat-square&label=PR%20%231033)](https://github.com/glanceapp/glance/pull/1033) — Fixed a rate-limit bypass caused by `X-Forwarded-For` parsing
- **[imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)**
  - [![PR #141 status](https://img.shields.io/github/pulls/detail/state/imsyy/DailyHotApi/141?style=flat-square&label=PR%20%23141)](https://github.com/imsyy/DailyHotApi/pull/141) — Migrated the Kuaishou trending route from HTML scraping to a GraphQL API
- **[iib0011/omni-tools](https://github.com/iib0011/omni-tools)**
  - [![PR #398 status](https://img.shields.io/github/pulls/detail/state/iib0011/omni-tools/398?style=flat-square&label=PR%20%23398)](https://github.com/iib0011/omni-tools/pull/398) — Proposed cryptographically secure random password generation; acknowledged by the maintainer when parallel implementation [#401](https://github.com/iib0011/omni-tools/pull/401) was merged

---

## Education

| University | Program | Degree | Dates |
| ---------- | ------- | ------ | ----- |
| Shanghai University · Institute of Materials Genome Engineering | Computer Science and Technology | M.S. | Sep 2024 — Jun 2027 |
| Anhui University of Finance and Economics · School of Management Science and Engineering | Computer Science and Technology | B.S. | Sep 2020 — Jun 2024 |

---

Built with Vue 3 · Vite · Tailwind CSS · Lucide Vue
