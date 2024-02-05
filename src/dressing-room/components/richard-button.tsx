
interface Props {
    active: boolean;
    clickHandler: () => void;
    main: boolean;
}

export const RichardButton = ({ active, clickHandler, main }: Props) => {
    return (
        <button onClick={ clickHandler }>
            {
                main
                    ? active
                        ? ('censored')
                        : ('censor')
                    : active
                        ? ('dressed')
                        :  ('dress')
            }
        </button>
    );
}