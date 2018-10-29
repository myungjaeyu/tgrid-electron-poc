import IExam from './IExam'

export default class Exam implements IExam {

	public send(text : string) : string {

		return 'Hi, ' + text

	}

}