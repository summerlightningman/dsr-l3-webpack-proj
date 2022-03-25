import {Answer} from "./answer";

export type QuestionTitle = string;
export type AnswerList = Answer[];

export interface Question {
    title: QuestionTitle,
    answerList: AnswerList
}

export type QuestionList = Question[];