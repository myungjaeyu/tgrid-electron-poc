import MainWindowService from './internal/MainWindowService'

async function main() : Promise<void> {

    const mainWindowService = new MainWindowService()

    mainWindowService.setHtmlPath('index.html')
    mainWindowService.run()

}

main()
.then(_ => console.log('🚀  Started'))