import { ManShirt, WomanDress } from '../clothes';
import styles from './cloth.module.css';

interface Props {
    genre: string;
}

export const Cloth = ({ genre }: Props) => {
    return (
        <div className={ styles.cloth }>
            {
                genre === 'male'
                    ? <ManShirt />
                    : <WomanDress />
            }
        </div>
    );
};