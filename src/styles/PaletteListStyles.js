/* eslint-disable import/no-anonymous-default-export */
import sizes from '../Components/sizes';
import bg from '../bg.svg';
export default {
   '@global': {
      '.fade-exit': {
         opacity: 1,
      },
      '.fade-exit-active': {
         transition: 'opacity 500ms ease-out',
         opacity: 0,
      },
   },
   root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundImage: `url(${bg})`,
      position: 'fixed',
      overflowY: 'auto',
   },
   container: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      [sizes.down('xl')]: {
         width: '60%',
      },
      [sizes.down('xs')]: {
         width: '70%',
      },
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      color: 'white',
      '& a': {
         color: 'white',
         textDecoration: 'underline',
         marginRight: '5px',
      },
   },
   palettes: {
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30.5%)',
      gridGap: '4%',
      [sizes.down('md')]: {
         gridTemplateColumns: 'repeat(2, 48%)',
      },
      [sizes.down('xs')]: {
         gridTemplateColumns: 'repeat(1, 100%)',
      },
   },
};
