# 《棺材板下》（工作名）

H5（Three.js / WebGL2）弹射构筑肉鸽。

- 玩法、界面布局、算法、数值 1:1 复刻《Ricochet Abyss》Demo。
- 美术全部程序化生成：3D 像素（960×540）。世界是一个被腐蚀的菌类世界。
- 主角是甲壳虫骑士。

- 版权：据制作方说明，公司已取得《Ricochet Abyss》的版权授权（合同编号：待补）。
- 方案：`方案-v3-自动化工作室.md`（取代 v1、v2 的美术与流程部分）
- 制作规范：`studio/AGENT_GUIDE.md`；美术标准：`studio/ART_BIBLE.md` + `studio/golden/`；文件归属：`studio/OWNERSHIP.md`

## 开发

需要 Node 24。在本目录执行一次 `npm install`（任务工作树共用这里的 `node_modules`）。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器，打开 `/?scene=hello` |
| `npm run check` | 类型检查（含不带 DOM 的 `src/core` 检查）+ 单元测试 |
| `npm run shots -- --scene hello` | 在本机 Chrome（GPU）里定时截图，输出 PNG 路径的 JSON |
| `npm run perf -- --scene hello` | 帧时间、绘制调用、三角形数 |
| `npm run build` / `npm run package [-- --scene play --out <目录>]` | `dist/`；`delivery/棺材板下.html` 单文件包（`--out` 时写 `<目录>/index.html`） |
| `npm run review -- --scene play --stills 1.38,2.58 --clip 4.1` | 审核包：定格图、MP4、GIF |
| `npm run golden` | 对照 `studio/golden/` 的视觉回归 |
| `npm run data:import` / `npm run data:check` | 从 Demo 解包数据重新生成 `src/content/demo/` / 校验是否一致 |
| `npm run bot` | 无头规则模拟（P2 前为占位） |

调试路由：`?scene=<名>&seed=&t=<秒>&frames=&paused=&view=<缓冲>&stats=1`，见 `src/debug/README.md`；
渲染约定（G-buffer、光照、Pass、灯光、材质、打击感钩子）见 `src/render/README.md`；工具见 `tools/README.md`。
