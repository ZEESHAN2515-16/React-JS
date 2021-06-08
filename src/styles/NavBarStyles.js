import sizes from '../Components/sizes';

const styles = {
   navBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '6vh',
      flexDirection: 'row',
      [sizes.down('xs')]: {
         justifyContent: 'space-between',
         alignItems: 'center',
      },
   },
   logo: {
      marginRight: '15px',
      padding: '0 13px',
      fontWeight: '600',
      fontSize: ' 1.2rem',
      height: '100%',
      backgroundColor: ' #eceff1',
      display: 'flex',
      alignItems: 'center',
      '& a': {
         textDecoration: 'none',
         color: 'black',
         fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      },
      [sizes.down('xs')]: {
         display: 'none',
      },
   },

   sliderContainer: {
      '& span': {
         fontSize: '0.9rem',
         fontWeight: '500',
      },
   },
   slider: {
      width: '280px',
      display: 'inline-block',
      margin: '0 15px',
      '& .rc-slider-track': {
         backgroundColor: 'transparent',
      },
      '& .rc-slider-rail': {
         height: '6px',
      },

      '& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover':
         {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginTop: '-3px',
         },
      [sizes.down('md')]: {
         width: '150px',
      },
   },

   selectContainer: {
      marginLeft: 'auto',
      marginRight: '1rem',
      '& .MuiInputBase-root': {
         fontSize: '0.9rem',
      },
   },
};

export default styles;
