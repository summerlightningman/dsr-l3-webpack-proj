const answerToNode = (text: string) => {
    const elem = document.createElement('li');
    elem.innerText = text;
    elem.classList.add('answer-list__item');
    return elem
};

export default answerToNode;