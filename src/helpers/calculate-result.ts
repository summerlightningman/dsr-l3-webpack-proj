import {Mark} from "../types";
import {Fairy} from "../types/fairy";

const calculateResult = (mark: Mark) => {
    if (mark >= 5 && mark < 9)
        return Fairy.BLOOM
    else if (mark >= 9 && mark < 13)
        return Fairy.STELLA
    else if (mark >= 13 && mark < 17)
        return Fairy.MUSA
    else if (mark >= 17 && mark < 21)
        return Fairy.FLORA
    else if (mark >= 21 && mark < 25)
        return Fairy.TECNA
    else
        return Fairy.AISHA
}

export default calculateResult