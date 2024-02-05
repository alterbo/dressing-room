export enum Characters {
    FEMALE = 'female',
    FEMALE_CENSORED = 'female-censored',
    MALE = 'male',
    MALE_CENSORED = 'male_censored',
}

export interface CharacterConfig {
    content: JSX.Element;
}