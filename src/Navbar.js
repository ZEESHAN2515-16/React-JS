import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

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
      const { level, changeLevel, showingAllColors } = this.props;
      return (
         <header className='NavBar'>
            <div className='logo'>
               <Link to='/'>React Color Picker</Link>
            </div>
            {showingAllColors === true && (
               <div className='slider-container'>
                  <span>Level : {level}</span>
                  <div className='slider'>
                     <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                  </div>
               </div>
            )}

            <div className='select-container'>
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

export default Navbar;
