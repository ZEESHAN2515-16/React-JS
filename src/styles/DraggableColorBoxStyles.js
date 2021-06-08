import sizes from '../Components/sizes';
import chroma from 'chroma-js';

const styles = {
   root: {
      width: '20%',
      height: '24.95%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.9px',

      '&:hover svg': {
         color: 'white',
         transform: 'scale(1.3)',
      },
      [sizes.down('md')]: {
         width: '20%',
         height: '24.95%',
      },
      [sizes.down('sm')]: {
         width: '50%',
         height: '12%',
      },
      [sizes.down('xs')]: {
         width: '100%',
         height: '6%',
         '& svg': {
            fontSize: '1.5rem',
         },
      },
   },
   boxContent: {
      bottom: '0',
      position: 'absolute',
      padding: '10px',
      left: ' 0px',
      width: '90%',
      fontSize: '12px',
      textTransform: ' uppercase',
      letterSpacing: '1px',
      color: (props) =>
         chroma(props.color).luminance() >= 0.4 ? 'rgba(0,0,0,0.5)' : 'white',
      // color: 'rgba(0,0,0,0.5)',
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [sizes.down('md')]: {
         width: '90%',
         padding: '9px',
      },
      [sizes.down('sm')]: {
         width: '94%',
         padding: '9px',
      },
      [sizes.down('xs')]: {
         width: '95%',
      },
   },
   deleteIcon: {
      transition: 'all 0.4s ease-in-out',
   },
};

export default styles;
