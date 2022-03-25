import {Result, ResultID} from "../types/result";
import results from '../../data/results.json';

const getResultById = (id: ResultID): Result | undefined => results.find((res: Result) => res.id === id);

export default getResultById