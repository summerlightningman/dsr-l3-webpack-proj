export type ResultID = string;
export type ResultTitle = string;
export type Subtitle = string;
export type Description = string;
export type ImgSrc = string;

export interface Result {
    id: ResultID,
    title: ResultTitle,
    subtitle: Subtitle,
    description: Description,
    img: ImgSrc
}

export type ResultList = Result[];