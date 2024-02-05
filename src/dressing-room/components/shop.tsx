import { useEffect, useState } from 'react';
import { Character, Cloth, RichardButton, Spot } from '.';
import { spots } from '../data/spots';
import styles from './shop.module.css';
import { ActiveContext } from '../context/active';

interface Props {
    genre: Genre;
}

export const Shop = ({ genre }: Props ) => {
    const [ activeSpot, setActiveSpot ] = useState(1);

    const onClickHandler = (value: number): void => {
        setActiveSpot(value);
    }

    useEffect(() => {
        setActiveSpot(1);
    }, [ genre ]);

    return (
        <div className={ styles.shop }>
            {
                spots.map((spot, index) =>
                    <div className={ index === 0 ? `${ styles.large }` : '' } key={ spot.id }>
                        <div>
                            <Spot>
                                <ActiveContext.Provider value={ spot.id === activeSpot }>
                                    <Character main={ spot.main } genre={ genre } />
                                    {
                                        spot.main
                                            ? <></>
                                            : <Cloth genre={ genre } />
                                    }
                                </ActiveContext.Provider>
                            </Spot>
                            <RichardButton active={ spot.id === activeSpot } clickHandler={ () => onClickHandler(spot.id) } main={ spot.main } />
                        </div>
                    </div>
                )
            }
        </div>
    );
};