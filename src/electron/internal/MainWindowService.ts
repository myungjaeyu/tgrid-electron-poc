import { app, BrowserWindow } from 'electron'

import IMainWindowService from './interface/IMainWindowService'

export default class MainWindowService implements IMainWindowService {

    private app : any
    private htmlPath : string = ''
    private browserWindow : BrowserWindow

    constructor() {

        this.app = app

    }

    setHtmlPath(path : string) : void {

        this.htmlPath = path

    }

    run() {

        this.app.on('ready', () : any => this.createWindow())

        this.app.on('window-all-closed', () : any => process.platform !== 'darwin' && this.app.quit())
        this.app.on('activate', () : any => this.browserWindow === null && this.createWindow())
    }

    createWindow() : void {

        if (!this.htmlPath) throw 'invalid htmlPath'

        this.browserWindow = new BrowserWindow({width: 800, height: 600})

        this.browserWindow.loadFile(this.htmlPath)
        this.browserWindow.webContents.openDevTools() /* 개발자 도구 활성화 */
    

        this.browserWindow.on('closed',  () : any => this.browserWindow = null)
    }

}