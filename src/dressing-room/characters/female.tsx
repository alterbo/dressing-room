import styles from './characters.module.css';

interface Props {
  active: boolean;
}

export const Female = ({ active }: Props) => {
  return (
    <>
      <g className={ styles.female }>
          <path d="M26.275.152c-1.858-.414-8.929 1.331-8.84 5.05.076 3.168-1.147 7.378-.924 8.765.223 1.388-1.2 2.114-1.2 2.114s3.832 7.957 8.635 7.568c4.803-.389 9.367-7.082 9.367-7.082S29.395 1.919 28.001 1.505C26.607 1.091 26.275.152 26.275.152Z"/>
          <path d="M23.739 1.075s-5.738 2.047-4.711 6.758c1.028 4.712 3.799 7.358 4.404 7.373.605.015 4.558-2.467 4.505-5.939-.053-3.473.363-6.498-1.229-7.066-1.591-.568-1.592-1.466-2.969-1.126Z" />
          <path d="M21.763 13.775s-.427 2.623-1.71 2.865c-1.283.241-4.506-.715-6.657.511-2.151 1.227-3.253 1.994-2.969 3.789.284 1.796-.922 20.992-.922 20.992l4.198-3.891.615-14.848.717 7.578 1.741 3.277.307 7.168s-2.866 14.73-1.536 18.534c1.329 3.804 1.843 12.186 1.843 12.186l1.946 26.726 4.096-43.93 4.096 44.032 1.945-26.214s2.179-10.998 2.049-12.493c-.131-1.495 1.083-10.342-.513-13.209-1.596-2.868-.574-4.648-.921-5.325-.347-.678.102-8.192.102-8.192s1.708-1.305 1.843-3.482c.135-2.176.82-6.144.82-6.144l.307 14.131 3.891 4.096-.512-21.504s.207-3.272-3.277-3.584c-3.485-.312-5.427-.102-5.427-.102s-3.174-.871-2.048-2.867c1.126-1.997-.815 1.373-2.151 1.229-1.335-.145-1.873-1.329-1.873-1.329Z"/>
      </g>
      <g data-active={ active } className={ styles.armRight }>
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M10.058 42.432l11.064 14.292 2.951-.381L13.86 38.536"/>
      </g>
      <g data-active={ active } className={ styles.armLeft }>
        <path fill="#FFF" stroke="#000" strokeMiterlimit="10" d="M37.073 42.432L26.009 56.724l-2.951-.381 10.213-17.807"/>
      </g>
    </>
  );
};