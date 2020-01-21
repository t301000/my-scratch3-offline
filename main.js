const {app, BrowserWindow, dialog} = require('electron')
  
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win
  
  function createWindow () {
    // 建立瀏覽器視窗。
    win = new BrowserWindow({icon:'favicon.png' ,width: 1280, height: 720})
  
    // 並載入應用程式的 index.html。
    win.loadFile('app/index.html')
  
    // Open the DevTools.
    // win.webContents.openDevTools()
  
    // 視窗關閉時會觸發。
    win.on('closed', () => {
      // 拿掉 window 物件的參照。如果你的應用程式支援多個視窗，
      // 你可能會將它們存成陣列，現在該是時候清除相關的物件了。
      win = null
    })

    // 參考 https://www.brainbell.com/javascript/dialog-show-message-box.html
    win.on('close', (event) => {
      event.preventDefault()

      let options = {}
      //Can be "none", "info", "error", "question" or "warning".
      options.type = "question"
      //Array of texts for buttons.
      options.buttons = ["&是","&否","&取消"]

      //Index of the button in the buttons array which will be selected by default when the message box opens.
      options.defaultId = 2

      //Title of the message box
      options.title = "是否要關閉 Scratch3 ？"
      
      //More information of the message
      // options.detail = "Press Yes button to quit"
      
      //Content of the message box
      options.message = "系統可能不會儲存您所做的變更。"

      //options.icon = "/path/image.png"

      //The index of the button to be used to cancel the dialog, via the Esc key
      options.cancelId = 2

      //Prevent Electron on Windows to figure out which one of the buttons are common buttons (like "Cancel" or "Yes")
      options.noLink = true

      //Normalize the keyboard access keys
      options.normalizeAccessKeys = true

      /*Syntax:
       dialog.showMessageBox(BrowserWindow, options, callback);
      */
      dialog.showMessageBox(win, options, (res, checked) => {
        if (res === 0){
          //Yes button pressed
          win.destroy()
        }
        else if (res === 1) {
          //No button pressed
        }
        else if (res === 2){
          //Cancel button pressed
        }
      })
    })
  }
  
  
  // 當 Electron 完成初始化，並且準備好建立瀏覽器視窗時
  // 會呼叫這的方法
  // 有些 API 只能在這個事件發生後才能用。
  app.on('ready', createWindow)
  
  // 在所有視窗都關閉時結束程式。
  app.on('window-all-closed', () => {
    // 在 macOS 中，一般會讓應用程式及選單列繼續留著，
    // 除非使用者按了 Cmd + Q 確定終止它們
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // 在 macOS 中，一般會在使用者按了 Dock 圖示
    // 且沒有其他視窗開啟的情況下，
    // 重新在應用程式裡建立視窗。
    if (win === null) {
      createWindow()
    }
  })
  
  // 你可以在這個檔案中繼續寫應用程式主程序要執行的程式碼。 
  // 你也可以將它們放在別的檔案裡，再由這裡 require 進來。