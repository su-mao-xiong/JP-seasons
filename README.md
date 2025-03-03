# 日本四季物語網站

## 為何我們會選擇這個題目

為何我們會選擇這個主題？這是因為我們都很喜歡日本，所以我們便選擇製作出一個日本旅遊網站，這個網站可以讓我們方便的知道日本各地的景點，同時希望未來可以發展成一個類似社群平台的方式讓大家可以在裡面留言，這種類型的網站也可以展示我們在這次六角切版直播班所學到的技術

## 使用技術

1. html
2. CSS
3. JS
4. Vite
5. boostrap5(BS5)
6. React

## 專案操作

### 編輯方式

1. `git clone`:將專案複製下來
2. `npm install`:安裝套件

### 其他指令

- `npm run dev`:本機專案運行
- `cmd/ctrl + C`:終止專案運行，使用`npm run dev`運行專案後如果想要停止請透過這個指令
- `npm run build`:專案完成後講專案變成 html,css
- `npm run depoly`:自動化部署，將 dist 資料夾的內容上傳至 gh-pages

## git 團隊操作/分支管理

### 分支說明

main（主分支）：穩定版程式碼，不能直接開發，所有更改需透過 Pull Request（PR）。
gh-pages (Github page)：部署用，將要對外呈現的網頁(dist 資料夾)放到這裡
dev（開發分支）：從 main 分出來，作為開發時的基礎分支，大家的功能開發都從這裡開始。
feature/xxx（功能分支）：每個人負責的功能，都要從 dev 分支開一個新的功能分支來開發。

### 建立開發分支(組長已完成組員不必操作)

```
git checkout -b dev main  # 從 main 建立開發分支
git push origin dev       # 推送到遠端
```

### 組員開發時的流程

#### 1. 同步最新的 `dev` 分支

```
git checkout dev
git pull origin dev
```

#### 2. 開新的功能分支

```
git checkout -b feature/xxx dev
```

> `xxx`為功能名稱，請組員自行取名

#### 3. 編輯程式並提交

```
git add .
git commit -m "完成某功能"
```

#### 4. 推送到遠端

```
git push origin feature/xxx
```

> `xxx`為功能名稱，請推送到步驟 2 時所建立的分支

#### 5. 發送 Pull Request (PR)

- 到 GitHub 開 PR，請求合併 feature/xxx 到 dev
