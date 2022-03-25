import {Question, QuestionList} from "./types";

import questions from '../data/questions.json';
import {setAnswerList, setQuestionText} from "./helpers";

import {$answerList} from "./constants";
import getResultPage from "./helpers/get-result-page";

import '../style/index.scss';


const start = (questionList: QuestionList) => {
    const update = (currStep: number = 0) => {
        const currQuestion: Question = questionList[currStep];
        const answerTextList = currQuestion.answerList.map(_ => _.text);
        const onAnswerClick = currStep < questionList.length - 1 ? () => update(currStep + 1) : finish;
        setQuestionText(currQuestion.title);
        setAnswerList(answerTextList, onAnswerClick);
    }

    return update()
};

const finish = () => {
    const finishPage: HTMLDivElement = getResultPage('flora');
    $answerList.replaceWith(finishPage);
}

start(questions);
