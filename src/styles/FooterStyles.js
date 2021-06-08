import sizes from '../Components/sizes';
import bg from '../footerBg.svg';
export default {
   paletteFooter: {
      backgroundImage: `url(${bg})`,
      height: '5vh',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontWeight: 'bold',
      [sizes.down('xs')]: {
         height: '4vh',
         fontSize: '1rem',
         alignItems: 'center',
      },
   },
   emoji: {
      fontSize: '1.5rem',
      margin: '0 1rem',
      [sizes.down('xs')]: {
         fontSize: '1rem',
      },
   },
};
