/* eslint-disable import/no-anonymous-default-export */
import chroma from 'chroma-js';

export default {
   colorBox: {
      width: '20%',
      // height: '25%',
      height: (props) => (props.showingFullPalette ? '25%' : '50.05%'),
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.99px',
      '&:hover button': {
         opacity: '1',
         transition: '0.5s',
         cursor: 'pointer',
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
      color: 'black',
      fontWeight: '500',
   },
   copyText: {
      color: (props) =>
         chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
   },
   colorName: {
      color: (props) =>
         chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
   },
   seeMore: {
      color: (props) =>
         chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
      backgroundColor: (props) =>
         chroma(props.background).luminance() >= 0.5
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.3)',
      position: 'absolute',
      bottom: '0',
      right: '0',
      border: 'none',
      width: '60px',
      height: '30px',
      textTransform: 'uppercase',
      lineHeight: '30px',
      textAlign: 'center',
   },
   copyButton: {
      backgroundColor: (props) =>
         chroma(props.background).luminance() >= 0.5
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.3)',
      // background: 'rgba(255, 255, 255, 0.3)',
      color: (props) =>
         chroma(props.background).luminance() >= 0.5
            ? 'rgba(0, 0, 0, 0.7)'
            : 'white',
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
      opacity: '0',
   },
   copyOverlay: {
      opacity: '0',
      zIndex: '-99',
      width: '100%',
      height: '100vh',
      transition: 'transform 0.6s ease-in-out',
      transform: 'scale(0.1)',
   },
   showOverlay: {
      opacity: '1',
      height: '100vh',
      transform: 'scale(10)',
      zIndex: 10,
      position: 'absolute',
   },
   copyMsg: {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      transform: 'scale(0.1)',
      opacity: '0',
      color: 'white',
      flexDirection: 'column',
   },
   showMsg: {
      transform: ' scale(1)',
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.3s',
      opacity: '1',
      zIndex: '20',
      '& h1': {
         width: '100%',
         textAlign: 'center',
         background: (props) =>
            chroma(props.background).luminance() >= 0.5
               ? 'rgba(0, 0, 0, 0.1)'
               : 'rgba(255, 255, 255, 0.3)',
         // background: 'rgba(255, 255, 255, 0.3)',
         verticalAlign: 'middle',
         marginBottom: '0',
         fontWeight: '400',
         textTransform: 'uppercase',
         textShadow: '1px 2px black',
         padding: '0.4rem',
      },
      '& p': {
         marginTop: '0',
         fontWeight: '100',
         fontSize: '1.5rem',
      },
   },
};
