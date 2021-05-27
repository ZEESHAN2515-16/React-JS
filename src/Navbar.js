import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import './NavBar.css';

const styles = {
   navBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '6vh',
      flexDirection: 'row',
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
      '& rc-slider-track': {
         backgroundColor: 'transparent',
      },
      '& .rc-slider-rail': {
         height: '6px',
      },

      '& rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover': {
         backgroundColor: 'green',
         outline: 'none',
         border: '2px solid green',
         boxShadow: 'none',
         width: '13px',
         height: '13px',
         marginTop: '-3px',
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
class Navbar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         format: 'hex',
         open: false,
      };
   }
   handleFormatChange = (e) => {
      this.setState({ format: e.target.value, open: true });
      this.props.handleChange(e.target.value);
   };
   closeSnackBar = () => {
      this.setState({ open: false });
   };

   render() {
      const { level, changeLevel, showingAllColors, classes } = this.props;
      return (
         <header className={classes.navBar}>
            <div className={classes.logo}>
               <Link to='/'>React Color Picker</Link>
            </div>
            {showingAllColors === true && (
               <div className={classes.sliderContainer}>
                  <span>Level : {level}</span>
                  <div className={classes.slider}>
                     <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                  </div>
               </div>
            )}

            <div className={classes.selectContainer}>
               <Select value={this.state.format} onChange={this.handleFormatChange}>
                  <MenuItem value='hex'>HEX - #fffffff</MenuItem>
                  <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                  <MenuItem value='rgba'>RGBA - rgb(255,255,255,0.1)</MenuItem>
               </Select>
            </div>
            <Snackbar
               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
               open={this.state.open}
               autoHideDuration={2000}
               message={<span id='message-id'>Format Changed To {this.state.format.toUpperCase()}</span>}
               ContentProps={{ 'aria-describedby': 'message-id' }}
               onClose={this.closeSnackBar}
               action={[
                  <IconButton onClick={this.closeSnackBar} color='inherit' key='close' aria-label='close'>
                     <CloseIcon />
                  </IconButton>,
               ]}
            />
         </header>
      );
   }
}

export default withStyles(styles)(Navbar);
