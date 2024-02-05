import { useState } from 'react';
import { Pattern } from '.';
import styles from './clothes.module.css';

export const WomanDress = () => {
    const [ pattern, setPattern ] = useState('');

    const onSetPatternHandler = (pattern: string) => {
        setPattern(pattern);
    }

    return (
        <svg className={ styles.shirt } viewBox="0 0 48 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <Pattern onSetPattern={ onSetPatternHandler }/>
            </defs>
            <g fill={ `url(#${ pattern })`}>
                <path d="M14.386 17.351s1.782 8.42.758 10.239c-1.023 1.82.058 3.065.058 3.065l1.519 3.062.553 7.27-.98 4.203s-1.574 9.192-1.229 11.537c.344 2.345-.011 12.022-.023 12.022s9.711-1.121 11.878-.663c2.168.458 5.238 1.026 5.238 1.026s1.345-16.672-.299-20.532c-1.644-3.861-1.61-15.128-1.61-15.128s1.643-1.099 1.716-2.662c.072-1.563-.09-13.145-1.262-13.715-1.172-.569-1.935-.327-1.935-.327s.921 11.026-2.494 10.761c-3.414-.264-7.386-9.951-8.484-10.492-1.099-.54-3.404.334-3.404.334Z" />
            </g>
        </svg>
    );
};