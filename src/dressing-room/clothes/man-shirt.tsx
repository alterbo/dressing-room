import { useState } from 'react';
import { Pattern } from '.';
import styles from './clothes.module.css';

export const ManShirt = () => {
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
                <path d="m7.24 30.655 5.665.077.219-7.523 2.908 29.637 16.055.119 3.017-29.983.31 7.88 5.274.056.318-9.444s-.643-3.66-2.971-3.894c-2.328-.233-8.909-.711-8.909-.711l-.893-1.632-1.73 1.222-2.436 5.399-2.38-5.715-2.492-.957-1.448 1.311-6.591 1.084s-3.504.085-3.874 2.913c-.37 2.828-.042 10.161-.042 10.161Z"/>
            </g>
        </svg>
    );
};