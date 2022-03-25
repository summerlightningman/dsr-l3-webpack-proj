const answerToNode = (text: string, onClick: () => void) => {
    const elem = document.createElement('li');
    elem.innerText = text;
    elem.addEventListener('click', onClick);
    elem.classList.add('answer-list__item');
    elem.classList.add('winx-style-text');
    return elem
};

export default answerToNode;