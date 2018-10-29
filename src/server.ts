import { WebServer, WebAcceptor } from 'tgrid/protocol/web'

import Exam from './tgrid-exam/Exam'

async function main() : Promise<void> {

    const server = new WebServer()

    server.open(10101, async (acceptor : WebAcceptor) => {

        await acceptor.accept()
        await acceptor.listen(new Exam())
    })

}

main().then(_ => console.log('🚀  Started'))