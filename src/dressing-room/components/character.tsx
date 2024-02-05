import { useContext } from 'react';
import { Female, FemaleCensored, Male, MaleCensored } from '../characters';
import { CharacterConfig, Characters } from '../interfaces/characters';
import { ActiveContext } from '../context/active';
import styles from './character.module.css';

interface Props {
    main: boolean;
    genre: string;
}

export const Character = ({ main, genre  }: Props) => {
    const active = useContext(ActiveContext);

    const characterConfigs: Record<Characters, CharacterConfig> = {
        [Characters.FEMALE]: {
            content: <Female active={ active } />
        },
        [Characters.FEMALE_CENSORED]: {
            content: <FemaleCensored />
        },
        [Characters.MALE]: {
            content: <Male active={ active } />
        },
        [Characters.MALE_CENSORED]: {
            content: <MaleCensored />
        }
    }

    const getCharacterConfig = (): Characters => {
        if (genre === Characters.MALE) {
            return main ? Characters.MALE_CENSORED : Characters.MALE;
        } else {
            return main ? Characters.FEMALE_CENSORED : Characters.FEMALE;
        }
    }

    const mainCharacter = getCharacterConfig();

    const mainCharacterConfig = characterConfigs[mainCharacter];

    return (
        <div data-active={ active } className={ styles.character }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 100">
                { mainCharacterConfig.content }
            </svg>
            <div className={ styles.mask }></div>
        </div>
    );
};