<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/puzzle-piece.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/magnifying-glass-tilted-left.webp">

<h1>搜索引擎<br/><sup>LobeChat Plugin</sup></h1>

该插件允许使用 Duckduckgo/Google/Baidu 搜索引擎

[![][🤯-🧩-lobehub-shield]][🤯-🧩-lobehub-link]
[![][github-license-shield]][github-license-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [🤯 Usage](#-usage)
- [📦 Plugin Ecosystem](#-plugin-ecosystem)
- [⌨️ Local Development](#️-local-development)
- [🔗 Links](#-links)

####

</details>

## 🤯 Usage

This is a function calling plugin for [Lobe Chat](https://github.com/lobehub/lobe-chat), you can install it in plugin setting page.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Plugin Ecosystem

Plugins provide a means to extend the Function Calling capabilities of LobeChat. They can be used to introduce new function calls and even new ways to render message results. If you are interested in plugin development, please refer to our [📘 Plugin Development Guide](https://github.com/lobehub/lobe-chat/wiki/Plugin-Development) in the Wiki.

- [lobe-chat-plugins][lobe-chat-plugins]: This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for LobeChat to the user.
- [chat-plugin-template][chat-plugin-template]: This is the plugin template for LobeChat plugin development.
- [@lobehub/chat-plugin-sdk][chat-plugin-sdk]: The LobeChat Plugin SDK assists you in creating exceptional chat plugins for Lobe Chat.
- [@lobehub/chat-plugins-gateway][chat-plugins-gateway]: The LobeChat Plugins Gateway is a backend service that provides a gateway for LobeChat plugins. We deploy this service using Vercel. The primary API POST /api/v1/runner is deployed as an Edge Function.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/MartialBE/chat-plugin-search-engine-other.git
$ cd chat-plugin-search-engine-other
$ bun install
$ bun run modules:build
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

- **[🤖 Lobe Chat](https://github.com/lobehub/lobe-chat)** - An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
- **[🧩 / 🏪 Plugin Index](https://github.com/lobehub/lobe-chat-plugins)** - This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for Function Calling to the user.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[🤯-🧩-lobehub-link]: https://github.com/lobehub/lobe-chat-plugins
[🤯-🧩-lobehub-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20%26%20%F0%9F%A7%A9%20LobeHub-Plugin-95f3d9?labelColor=black&style=flat-square
[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[chat-plugin-sdk]: https://github.com/lobehub/chat-plugin-sdk
[chat-plugin-template]: https://github.com/lobehub/chat-plugin-
[chat-plugins-gateway]: https://github.com/lobehub/chat-plugins-gateway
[github-codespace-link]: https://codespaces.new/MartialBE/chat-plugin-search-engine-other
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-license-link]: https://github.com/MartialBE/chat-plugin-search-engine-other/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/MartialBE/chat-plugin-search-engine-other?color=white&labelColor=black&style=flat-square
[lobe-chat-plugins]: https://github.com/lobehub/lobe-chat-plugins
