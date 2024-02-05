import { MouseEventHandler } from 'react';
import styles from './icon-button.module.css';

interface Props {
    ariaLabel: string;
    children: JSX.Element;
    onClick: MouseEventHandler<HTMLButtonElement>;
    value: Genre;
}

export const IconButton = ({ ariaLabel, children, onClick, value }: Props) => {

    return (
        <button aria-label={ ariaLabel } className={ styles.button } onClick={ onClick } value={ value } >
            { children }
        </button>
    );
};