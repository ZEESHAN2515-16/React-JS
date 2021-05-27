import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';
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
      return (
         <CopyToClipboard text={background} onCopy={this.handleCopyState}>
            <div className={classes.colorBox} style={{ background }}>
               <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
               <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                  {/* <h1 className={isLightColor ? 'dark-text-bg' : ''}>Copied!</h1> */}
                  <h1>Copied!</h1>
                  <p className={classes.copyText}>{background}</p>
               </div>
               <div>
                  <div className={classes.boxContent}>
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
