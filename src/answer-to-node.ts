const answerToNode = (text: string) => {
    const elem = document.createElement('li');
    elem.innerText = text;
    elem.classList.add('answer-list__item');
    elem.classList.add('winx-style-text');
    return elem
};

export default answerToNode;