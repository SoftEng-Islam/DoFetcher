# DoFetcher

A Cross Platform Downloader Application.


![image](https://github.com/user-attachments/assets/7856ed13-bac7-4ff1-80c2-1d94141a7881)
![image](https://github.com/user-attachments/assets/539cf33d-41e0-4878-8e4d-b37c7e5b12b9)
![image](https://github.com/user-attachments/assets/47a2b700-190f-4e7c-80dd-7dea5c172b1d)
![image](https://github.com/user-attachments/assets/401fdf22-dc50-44be-a363-c901749a5b86)



## Tools & languages & frameworks that used

- Rust - Programming Language
- Typescript
- Tauri
- yt-dlp
- Vue
- Sass
- TailwindCss

## Installation for Developers

### Install these tools on your system

- pnpm: <https://pnpm.io/installation>

```shell
    pnpm install
    pnpm run tauri dev
```

## Tauri + Vue + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Errors

error when starting dev server:
Error: Port 1420 is already in use

lsof -i :1420
kill -9 [PID of the process]
kill -9 44612
lsof -i :1420
pnpm run tauri dev
