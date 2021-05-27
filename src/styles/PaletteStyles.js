/* eslint-disable import/no-anonymous-default-export */

export default {
   palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
   },
   paletteColors: {
      height: '88%',
   },
   goBackContainer: {
      backgroundColor: 'black',
      cursor: 'pointer',
      width: ' 20%',
      height: '50.05%',
      display: 'inline-block',
      margin: '0 auto',
      position: ' relative',
      marginBottom: '-3.6px',
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
