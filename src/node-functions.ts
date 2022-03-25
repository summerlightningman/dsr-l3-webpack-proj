import {QuestionTitle} from "./types/question";
import {AnswerText} from "./types/answer";
import answerToNode from "./answer-to-node";

const $questionTitle: HTMLHeadingElement = document.querySelector('#question');
const $answerList: HTMLUListElement = document.querySelector('#answer-list');

export const setQuestionText = (text: QuestionTitle) => $questionTitle.innerText = text;
export const setAnswerList = (answersText: AnswerText[]) => {
    $answerList.innerHTML = '';
    return answersText.map(answerToNode).forEach(node => $answerList.appendChild(node));
};
