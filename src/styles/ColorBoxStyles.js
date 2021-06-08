/* eslint-disable import/no-anonymous-default-export */

import sizes from '../Components/sizes';
import chroma from 'chroma-js';
export default {
   colorBox: {
      width: '20%',
      height: (props) => (props.showingFullPalette ? '25%' : '50.05%'),
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.99px',
      '&:hover button': {
         opacity: '1',
         transition: '0.3s all ease',
      },

      [sizes.down('lg')]: {
         width: '20%',
         height: (props) => (props.showingFullPalette ? '25%' : '50.05%'),
      },
      [sizes.down('md')]: {
         width: '50%',
         height: (props) => (props.showingFullPalette ? '10%' : '20%'),
      },
      [sizes.down('xs')]: {
         width: '100%',
         height: (props) => (props.showingFullPalette ? '10%' : '10%'),
      },
   },
   boxContent: {
      position: 'absolute',
      width: '100%',
      padding: '10px',
      bottom: '0',
      left: ' 0',
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
      outline: 'none',
      cursor: 'pointer',
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
      zIndex: '0',
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s ease-in-out',
      transform: 'scale(0.1)',
   },
   showOverlay: {
      opacity: '1',
      transform: 'scale(50)',
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
      flexDirection: 'column',
      fontSize: '2rem',
      transform: 'scale(0.1)',
      opacity: '0',
      color: 'white',
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
         verticalAlign: 'middle',
         marginBottom: '0',
         fontWeight: '400',
         textTransform: 'uppercase',
         textShadow: '1px 2px black',
         padding: '0.4rem',
         [sizes.down('xs')]: {
            fontSize: '3rem',
            width: '100vw',
         },
      },
      '& p': {
         marginTop: '0',
         fontWeight: '100',
         fontSize: '1.5rem',
      },
   },
};
