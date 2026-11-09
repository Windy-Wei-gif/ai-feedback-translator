# AI Feedback Translator

A lightweight AI-powered batch translation tool for multilingual user feedback, featuring Excel import, customizable terminology, and OpenAI-compatible API integration.

一款轻量级 AI 批量翻译工具，支持 Excel 导入、自定义术语表、批量处理和结果导出，适用于海外用户运营、客服反馈整理等多语言文本处理场景。

## Overview | 项目简介

在处理大量英文用户反馈时，传统翻译流程容易出现重复操作多、专业术语不统一、结果整理耗时等问题。

AI Feedback Translator 将 Excel 数据导入、AI 翻译、术语管理与结果导出整合在同一个网页中，提高批量文本处理效率。

## Features | 功能特点

- **Excel Import**：上传 Excel 文件，自由选择需要翻译的文本列。
- **AI Translation**：通过 OpenAI 兼容接口调用大语言模型进行翻译。
- **Custom Terminology**：支持自定义术语表、指定译法及禁译词保护。
- **Batch Processing**：自动分批处理文本，默认每批 30 条。
- **Progress Tracking**：实时显示翻译任务进度。
- **TSV Export**：一键复制翻译结果，方便粘贴到 Excel。
- **Configurable API**：支持配置 API 地址、模型名称及 API Key。

## Tech Stack | 技术栈

- HTML5
- CSS3
- JavaScript
- OpenAI-compatible API
- Excel parsing library

## Project Structure | 项目结构

```text
AI-Feedback-Translator/
├── src/                  # 核心源代码
├── tests/                # 测试文件
├── vendor/               # 第三方依赖
├── build.js              # 构建脚本
├── VIP_Translator.html   # 网页入口
```

## Getting Started | 快速开始

### 1. 获取项目

下载本仓库 ZIP 文件并解压，或通过 Git 克隆：

```bash
git clone <repository-url>
```

### 2. 打开网页

使用现代浏览器打开 `VIP_Translator.html`。

如需构建或运行测试，请参考项目中的 `使用说明.md`。

### 3. 配置 API

在工具的 API 配置界面填写：

- API Base URL
- API Key
- Model Name

支持使用兼容 OpenAI API 格式的模型服务。

### 4. 导入并翻译

1. 上传 Excel 文件。
2. 选择需要翻译的列。
3. 根据需要编辑术语表。
4. 点击开始翻译，查看处理进度。
5. 完成后复制 TSV 结果，粘贴至 Excel。

## Use Cases | 适用场景

- 海外游戏用户反馈翻译
- 多语言客服工单整理
- 用户评价与评论分析
- 海外市场调研文本处理
- 其他批量文本翻译需求

## Notes | 注意事项

- 使用前需自行配置有效的 AI API Key。
- API 调用可能产生费用，具体取决于模型服务商。
- 翻译效果受模型能力、提示词和术语配置影响。
- 处理真实用户数据时，请遵守相关隐私与数据安全要求。
- 不要将 API Key 或敏感业务数据提交至公开仓库。

## License | 许可证

本项目包含第三方依赖。相关组件的授权信息以其各自的许可证文件为准。

项目自身暂未指定开源许可证。

---

**AI Feedback Translator** — Simplifying multilingual feedback processing with AI.
