import styles from './genre.module.css';
import { IconButton } from '.';
import { MouseEvent } from 'react';
import { WCFemale, WCMale } from '../characters';

interface Props {
    setGenreHandler: (genre: Genre) => void;
}

export const Genre = ({ setGenreHandler }: Props) => {
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        setGenreHandler(event.currentTarget.value as Genre);
    }

    return (
        <div className={ styles.container }>
            <IconButton ariaLabel='Select Male gender' onClick={ onClick } value='male'>
                <WCMale />
            </IconButton>
            <IconButton ariaLabel='Select female gender' onClick={ onClick } value='female'>
                <WCFemale />
            </IconButton>
        </div>
    );
};