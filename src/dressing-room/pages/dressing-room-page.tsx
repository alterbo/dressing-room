import { useState } from 'react';
import { Genre, Shop } from '../components';
import styles from './dressing-room-page.module.css';

const DressingRoomPage = () => {
    const [ genre, setGenre ] = useState<Genre>('male');

    const onSetGenreHandler = (genre: Genre) => {
        setGenre(genre);
    }

    return (
        <div className={ styles.dressing }>
            <h1>Dressing room</h1>
            <h2>Alberto Ferrero. 2024</h2>
            <Genre setGenreHandler={ onSetGenreHandler } />
            <Shop genre={ genre } />
        </div>
    );
};

export default DressingRoomPage;