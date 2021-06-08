// /* eslint-disable import/no-anonymous-default-export */
import sizes from '../Components/sizes';

export default {
   palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
   },
   paletteColors: {
      height: '89%',
      [sizes.down('xs')]: {
         overflowY: 'scroll',
         overflowX: 'hidden',
         height: '90%',
      },
   },
   goBackContainer: {
      backgroundColor: 'black',
      cursor: 'pointer',
      width: ' 20%',
      height: '50.05%',
      display: 'inline-block',
      margin: '0 auto',
      position: ' relative',
      marginBottom: '-3.99px',
      [sizes.down('lg')]: {
         height: '50.05%',
         width: '20%',
      },
      [sizes.down('md')]: {
         height: '20%',
         width: '50%',
      },
      [sizes.down('xs')]: {
         height: '10%',
         width: '100%',
      },
      '& a': {
         backgroundColor: 'rgba(255, 255, 255, 0.3)',
         color: 'white',
         width: '100px',
         height: '30px',
         position: 'absolute',
         display: 'inline-block',
         top: '50%',
         left: '50%',
         marginLeft: '-50px',
         marginTop: '-15px',
         textAlign: 'center',
         outline: 'none',
         lineHeight: '30px',
         fontSize: '1rem',
         border: 'none',
         textTransform: 'uppercase',
         cursor: 'pointer',
         textDecoration: 'none',
      },
   },
};
