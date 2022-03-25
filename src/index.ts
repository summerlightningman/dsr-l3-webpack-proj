import {Question, QuestionList} from "./types";

import questions from '../data/questions.json';
import {setAnswerList, setQuestionText} from "./helpers";
import getResultPage from "./helpers/get-result-page";
import calculateResult from "./helpers/calculate-result";

import {$answerList} from "./constants";
import '../style/index.scss';

const start = (questionList: QuestionList) => {
    window.localStorage.setItem('mark', '0');

    const update = (currStep: number = 0) => {
        const currQuestion: Question = questionList[currStep];
        const onAnswerClick = currStep < questionList.length - 1 ? () => update(currStep + 1) : finish;
        setQuestionText(currQuestion.title);
        setAnswerList(currQuestion.answerList, onAnswerClick);
    }

    return update()
};

const finish = () => {
    const mark = +window.localStorage.getItem('mark');
    const result = calculateResult(mark);
    const finishPage: HTMLDivElement = getResultPage(result);
    $answerList.replaceWith(finishPage);
}

start(questions);
