import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
   colorBox: {
      width: '20%',
      // height: '25%',
      height: (props) => (props.showingFullPalette ? '25%' : '50.05%'),
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.6px',
      '&:hover button': {
         opacity: '1',
         transition: '0.5s',
         cursor: 'pointer',
      },
   },
   copyText: {
      color: (props) => (chroma(props.background).luminance() >= 0.5 ? 'black' : 'white'),
   },
   colorName: {
      color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'),
   },
   seeMore: {
      color: (props) => (chroma(props.background).luminance() >= 0.5 ? 'black' : 'white'),
      backgroundColor: (props) =>
         chroma(props.background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
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
         chroma(props.background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
      // background: 'rgba(255, 255, 255, 0.3)',
      color: (props) => (chroma(props.background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.7)' : 'white'),
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
};

class ColorBox extends Component {
   constructor(props) {
      super(props);

      this.state = {
         copied: false,
      };
   }
   handleOvrlay = () => {};
   handleCopyState = () => {
      // ? THe below function set state to true, then after 1.5s sets the state to false
      this.setState({ copied: true }, () => {
         setTimeout(() => {
            this.setState({ copied: false });
         }, 1500);
      });
   };

   render() {
      const { name, background, moreUrl, showingFullPalette, classes } = this.props;
      const { copied } = this.state;
      // const isDarkColor = chroma(background).luminance() <= 0.08;
      const isLightColor = chroma(background).luminance() >= 0.5;
      return (
         <CopyToClipboard text={background} onCopy={this.handleCopyState}>
            <div className={classes.colorBox} style={{ background }}>
               <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
               <div className={`copy-msg ${copied && 'show'}`}>
                  {/* <h1 className={isLightColor ? 'dark-text-bg' : ''}>Copied!</h1> */}
                  <h1 className={isLightColor ? 'dark-text-bg' : ''}>Copied!</h1>
                  <p className={classes.copyText}>{background}</p>
               </div>
               <div className='Container'>
                  <div className='box-content'>
                     <span className={classes.colorName}>{name}</span>
                  </div>
                  <button className={classes.copyButton}>Copy</button>
               </div>
               {showingFullPalette && (
                  <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
                     <span className={classes.seeMore}>More</span>
                  </Link>
               )}
            </div>
         </CopyToClipboard>
      );
   }
}

export default withStyles(styles)(ColorBox);
