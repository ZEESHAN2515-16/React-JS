/* eslint-disable import/no-anonymous-default-export */

export default {
   root: {
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: '0.5rem',
      border: '1px solid black',
      position: 'relative',
//       overflow: 'hidden',
      cursor: 'pointer',
      '&:hover svg': {
         opacity: '1',
      },
   },
   colors: {
      backgroundColor: '#dae1e4',
      height: '120px',
      borderRadius: '5px',
      overflow: 'hidden',
   },
   title: {
      display: 'flex',
      fontSize: '0.9rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '0.3rem',
      color: 'black',
      position: 'relative',
      margin: '0',
   },
   emoji: {
      marginLeft: '0.4rem',
      fontSize: '0.9rem',
   },
   miniColor: {
      height: '25%',
      width: '20%',
      display: 'inline-block',
      position: 'relative',
      margin: '0 auto',
      marginBottom: '-4px',
   },
   delete: {},
   deleteIcon: {
      color: 'white',
      backgroundColor: '#eb3d30',
      width: '20px',
      height: '20px',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: '10px',
      zIndex: '25',
      opacity: '0.5',
      paddding: '10px',
      borderBottomLeftRadius: '60%',
   },
};
