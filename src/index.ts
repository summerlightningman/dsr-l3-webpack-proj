import {Question} from "./types/question";

import questions from '../data/questions.json';

import '../style/index.scss';
import {setAnswerList, setQuestionText} from "./node-functions";

let currQuestionIdx = 0;
const currQuestion: Question = questions[currQuestionIdx];
const answerTextList = currQuestion.answerList.map(_ => _.text)

setQuestionText(currQuestion.title);
setAnswerList(answerTextList);
