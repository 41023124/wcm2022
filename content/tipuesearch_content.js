var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '俄羅斯方塊', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '俄羅斯方塊.html'}, {'title': 'midterm', 'text': '\n', 'tags': '', 'url': 'midterm.html'}, {'title': 'w14', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': '俄羅斯方塊2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '俄羅斯方塊2.html'}, {'title': 'Final 期末統整', 'text': '第1週 創建wcm2022倉儲 說明網路問題並且設定 IPv6 連接網路連線 \n 第2週 解釋python程序是如何執行的 \n 第3週 解釋用 putty wink 視頻添加 ssh  準備創建 Python 3.10.2 和 tcc 可攜帶的環境 學習建立可攜系統 \n 第4週 在 gist 加入能讀取網際檔案的範例程式 加入 Brython 程式環境 \n 第5週 全校運動會 \n 第6週 清明節放假 \n 第7週 安裝與使用 nginx 建立 Wink 教學影片 \n 第8週 加入各學員倉儲與網頁連結 添加數字線程頁面 加入 w8 虛擬主機 Wink 專案檔 整理課程主題, 並提出下半學期的課程教學要點 \n 第9週 \n 期中自評並且在wink影片添加註解並將影片放到個人網站 \n 第10週 加入電腦輔助設計室個人虛擬主機 IP 設定 \n 第11週 加入 w11_1a 網路對接 (更換IP) \n 第12週 建立 Virtualbox 虛擬主機及設定伺服器 \n 第13週 說明如何在個人動態與靜態網頁中配置 Brython 程式環境, 並啟動執行 Tetris 遊戲 說明 Brython 程式各行功能 \n 第14週 將舊資料中刪除沒有在註冊名單中的成員，加入俄羅斯方塊 \n 第15週 端午節放假 將俄羅斯方塊加入計分系統 \n 第16週 期末報告整理 \n 第17週 利用錄影方式呈現俄羅斯方塊計分系統獲得6分並增加說明 \n 第18週 修改俄羅斯方塊由下至上運行 \n', 'tags': '', 'url': 'Final 期末統整.html'}, {'title': 'w17', 'text': '\n 任務執行過程心得 : 在任務的過程中,需要完成俄羅斯方塊並且或的6分不減速 有點難,但會一次獲得16分是因為一次消除4排,所以獲得4的平方的分數,然後需要追加程式的說明,並且製作成影片的方式並且上傳至個人網站. \n \n', 'tags': '', 'url': 'w17.html'}, {'title': 'w18', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n 製作心得 : 剛開始在製作時，完全沒有頭緒，所以我去參考43號同學的程式，一行一行去比對， 發現多了ctx.translate(0,canvas.height)和ctx.scale(1,-1)，雖然剛開始不了解為什麼這兩行 可以讓整個程式倒轉，但之後上網搜尋後，發現一個是改變程式的原點，另一個是顛倒Y軸 正負值，所以才可以導致整個程式倒轉。 \n 只要利用scale()，我們可以建立著名的笛卡兒座標系；執行translate(0,canvas.height)先移動畫布原點到左下角，再執行scale(1,-1)顛倒Y軸正負值，一個笛卡兒座標系便完成了。 \n 參考網址 :  https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Transformations \n \n', 'tags': '', 'url': 'w18.html'}, {'title': '期末任務1', 'text': '\n 製作心得 : 剛開始在製作時，完全沒有頭緒，所以我去參考43號同學的程式，一行一行去比對， 發現多了ctx.translate(0,canvas.height)和ctx.scale(1,-1)，雖然剛開始不了解為什麼這兩行 可以讓整個程式倒轉，但之後上網搜尋後，發現一個是改變程式的原點，另一個是顛倒Y軸 正負值，所以才可以導致整個程式倒轉。 \n 只要利用scale()，我們可以建立著名的笛卡兒座標系；執行translate(0,canvas.height)先移動畫布原點到左下角，再執行scale(1,-1)顛倒Y軸正負值，一個笛卡兒座標系便完成了。 \n 參考網址 :  https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Transformations \n', 'tags': '', 'url': '期末任務1.html'}]};