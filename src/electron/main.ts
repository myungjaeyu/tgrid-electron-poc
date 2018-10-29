import MainWindowService from './internal/MainWindowService'


import { WebConnector } from 'tgrid/protocol/web'
import { Driver } from 'tgrid/base'

import IExam from '../tgrid-exam/IExam'

async function main() : Promise<void> {

    const mainWindowService = new MainWindowService()

    mainWindowService.setHtmlPath('index.html')
    mainWindowService.run() // console.log('Symbol.iterator', Symbol.iterator)


    /* Hack
    */
    const connector = new WebConnector()

    await connector.connect('ws://127.0.0.1:10101')
    await connector.wait()

    const exam : Driver<IExam> = connector.getDriver<IExam>()

    console.log(await exam.send('u4bi'))

    await connector.close()

}

main()
.then(_ => console.log('🚀  Started'))