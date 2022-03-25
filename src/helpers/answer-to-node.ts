import {AnswerText, Mark} from "../types";

const answerToNode = (text: AnswerText, mark: Mark, onClick: () => void) => {
    const node = document.createElement('li');
    const addMark = () => {
        const markTotal: string = window.localStorage.getItem('mark');
        window.localStorage.setItem('mark', String(mark + +markTotal));
    };

    node.innerText = text;
    node.addEventListener('click', onClick);
    node.addEventListener('click', addMark);

    node.classList.add('answer-list__item');
    node.classList.add('winx-style-text');
    return node
};

export default answerToNode;