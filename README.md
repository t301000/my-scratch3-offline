# Scratch3 非官方離線版

## Step 1
```bash
git clone https://github.com/LLK/scratch-gui.git
cd scratch-gui
npm install
npm build
cd ..
git clone https://github.com/t301000/my-scratch3-offline.git
cd my-scratch3-offline
npm install
```

## Step 2
複製 build 的結果到 app 目錄
```bash
npm run copy
```

## Step 3
若要打包 win32 版，則須先安裝 wine

安裝 wine
```bash
sudo apt install -y wine
```

打包
```bash
# 打包 linux and win32
npm run package
# 打包 linux
npm run package:linux
# 打包 win32
npm run package:win32
```

linux 版在 scratch3-linux-x64 目錄

win32 版在 scratch3-win32-x64 目錄

## Step 4
將打包產出的目錄以 7zip 壓縮

```bash
# 壓縮 linux and win32
npm run compress
# 壓縮 linux
npm run compress:linux
# 壓縮 win32
npm run compress:win32
```

## 其他

```bash
# 以 electron 開啟
npm start
# 清除 app and 打包產出的目錄
npm run clean
```
