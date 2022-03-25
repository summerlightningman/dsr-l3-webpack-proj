import {Description, Result, ResultID} from "../types/result";
import {setQuestionText} from "./node-functions";
import getResultById from "./get-result-by-id";
import {fairyImgs} from "../constants";

const getFairyImg = (id: ResultID): HTMLImageElement => {
    const img = document.createElement('img');
    img.src = fairyImgs[id];
    return img;
};

const getDescription = (text: Description): HTMLParagraphElement => {
    const description = document.createElement('p');
    description.innerText = text;
    description.classList.add('winx-style-text');
    return description
}

const getResultPage = (resultId: ResultID): HTMLDivElement => {
    const result: Result = getResultById(resultId);
    setQuestionText(`Ты ${result.title} - ${result.subtitle}!`);

    const fairyImgNode = getFairyImg(result.id);

    const descriptionNode = getDescription(result.description);

    const finishPage = document.createElement('div');
    finishPage.appendChild(fairyImgNode);
    finishPage.appendChild(descriptionNode);
    finishPage.classList.add('result');

    return finishPage
};

export default getResultPage