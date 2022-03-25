import {AnswerText, QuestionTitle} from "../types";
import answerToNode from "./answer-to-node";
import {$answerList, $questionTitle} from "../constants";


export const setQuestionText = (text: QuestionTitle) => $questionTitle.innerText = text;
export const setAnswerList = (answersText: AnswerText[], onClick: () => void) => {
    $answerList.innerHTML = '';
    return answersText
        .map(text => answerToNode(text, onClick))
        .forEach(node => $answerList.appendChild(node));
};
