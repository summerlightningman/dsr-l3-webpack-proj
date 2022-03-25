import {Question, QuestionList} from "./types/question";

import questions from '../data/questions.json';
import {setAnswerList, setQuestionText} from "./node-functions";

import '../style/index.scss';


const start = (questionList: QuestionList) => {
    const update = (currStep: number = 0) => {
        const currQuestion: Question = questionList[currStep];
        const answerTextList = currQuestion.answerList.map(_ => _.text);
        const onAnswerClick = () => update(currStep + 1);
        setQuestionText(currQuestion.title);
        setAnswerList(answerTextList, onAnswerClick);
    }

    return update()
};

start(questions);
