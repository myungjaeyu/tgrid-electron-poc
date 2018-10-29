import { WorkerServer } from 'tgrid/protocol/worker'
import Exam from './tgrid-exam/Exam'

export default new WorkerServer(new Exam())