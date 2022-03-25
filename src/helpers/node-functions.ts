import {Answer, AnswerList, QuestionTitle} from "../types";
import answerToNode from "./answer-to-node";
import {$answerList, $questionTitle} from "../constants";


export const setQuestionText = (text: QuestionTitle) => $questionTitle.innerText = text;
export const setAnswerList = (answerList: AnswerList, onClick: () => void) => {
    $answerList.innerHTML = '';
    return answerList
        .map(({text, mark}: Answer) => answerToNode(text, mark, onClick))
        .forEach(node => $answerList.appendChild(node));
};
