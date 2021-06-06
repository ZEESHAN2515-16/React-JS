/* eslint-disable import/no-anonymous-default-export */

export default {
   root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'fixed',
      overflow: 'auto',
   },
   container: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
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
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30%)',
      gridGap: '5%',
   },
};
