import styles from './spot.module.css';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Spot = ({ children }: Props) => {
    return (
        <div className={ styles.spot }>
            <div className={ styles.hole }></div>
            { children }
        </div>
    );
};