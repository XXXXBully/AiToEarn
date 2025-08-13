<!--
 * @Author: nevin
 * @Date: 2025-01-17 19:25:28
 * @LastEditTime: 2025-02-24 20:17:47
 * @LastEditors: nevin
 * @Description:
-->

# AiToEarn

![GitHub stars](https://img.shields.io/github/stars/yikart/AttAiToEarn?color=fa6470)
![GitHub issues](https://img.shields.io/github/issues/yikart/AttAiToEarn?color=d8b22d)
![GitHub license](https://img.shields.io/github/license/yikart/AttAiToEarn)
[![Required Node.JS 20.18.x](https://img.shields.io/static/v1?label=node&message=20.18.x%20&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

[简体中文](README.zh-CN.md) | English

## Overview

AI content production, distribution, and trade.

One stop social media management tools: Douyin, Red Note, wechat video channel, wechat official account, Kwai， bilibili、  Tiktok, Youtube, Facebook, Instagram, Threads, Twitter, Pinterest

## Supported Platforms

<div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap; margin: 20px 0;">
    <img src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico" title="抖音" alt="抖音" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico" title="B站" alt="B站" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://s1-111422.kwimgs.com/kos/nlav111422/ks-web/favicon.ico" title="快手" alt="快手" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico" title="微信公众号" alt="微信公众号" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://www.youtube.com/s/desktop/3ad23781/img/logos/favicon.ico" title="YouTube" alt="YouTube" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg" title="Twitter" alt="Twitter" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://www.tiktok.com/favicon.ico" title="TikTok" alt="TikTok" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/ay1hV6OlegS.ico" title="Facebook" alt="Facebook" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" title="Instagram" alt="Instagram" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://static.cdninstagram.com/rsrc.php/ye/r/lEu8iVizmNW.ico" title="Threads" alt="Threads" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://s.pinimg.com/webapp/logo_transparent_144x144-3da7a67b.png" title="Pinterest" alt="Pinterest" width="32" height="32" style="object-fit: contain; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
</div>

## Quick Start Web

1.  **Start the Backend Service Modules**

      - **Local Launch:** Create a `local.config.js` file in the `config` directory (copy and modify the `dev.config.js` file).
      - ```sh
        pnpm i
        pnpm run dev:local
        ```

2.  **Start the Frontend Project: `aitoearn-web`**

      - ```sh
        pnpm i
        pnpm run dev
        ```

-----

### Creating and Using a Workflow

3.  **Add Platform Accounts** on the frontend page.
<img src="./workflow/img/account.jpeg" alt="post" width="500"/>

4.  **Create an `skkey`** to link multiple accounts.
<img src="./workflow/img/skkey.jpg" alt="post" width="500"/>

5.  **Create a workflow** on the workflow platform (or import a template from the `workflow` folder).

6.  **Use the `skkey`** in the workflow's parameter settings to publish content.
<img src="./workflow/img/fl.jpg" alt="post" width="500"/>


## Quick Start Windows

```sh
# Clone the project
git clone https://github.com/yikart/AttAiToEarn.git

# Enter the project directory
cd AttAiToEarn

# Install dependencies
npm i

# To compile sqlite, better-sqlite3 depends on node-gyp and requires a local python environment. Please refer to the installation materials of node-gyp by yourself

npm run rebuild

# Start development
npm run dev
```

## Upper Frame

- vite [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
- Electron + react [electron-vite-react](https://github.com/electron-vite/electron-vite-react)

## Catalogue

\_🚨 By default, files in the 'electron' folder will be built to 'dis-electron'

```tree
├── build                                    Build-related files
│
├── common                                   Shared types/constants between renderer and main processes
│
├── electron                                Electron source code
│   ├── db                                  SQLite3 database
│   │   ├── migrations                      Database migration scripts
│   │   ├── models                          Database entities
│   │   ├── scripts                         Database scripts
│   │   └── index.ts                        Database entry
│   ├── global                              Renderer process globals
│   ├── main                                Main process source
│   │   ├── api                             Business APIs
│   │   ├── core                            Core modules (DI, decorators)
│   │   └── ...                             Others
│   ├── plat                                Third-party platforms
│   ├── preload                             Preload-scripts
│   ├── tray                                System tray
│   └── util                                Utilities
│
├── public                                  Public assets
│
├── scripts                                 Build scripts
│
├── release                                 Build output
│   └── {version}
│       ├── {os}-{os_arch}                  Unpacked binaries
│       └── {app_name}_{version}.{ext}      Installers
│
├── public                                  Same as Vite template's public
└── src                                     Renderer process source (React)
```

## Other explanations

Regarding the MAC package, as Apple has strict requirements for applications, this project is still in the trial stage. Please package it yourself or set the ignore security policy
