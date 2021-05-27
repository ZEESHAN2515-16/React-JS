import styles from './styles/PaletteStyles';
import React from 'react';
import './Palette.css';
import { withStyles } from '@material-ui/styles';

function Footer(props) {
   const { paletteName, emoji } = props;
   return (
      <footer className='Palette-footer'>
         {paletteName}
         <span className='emoji'>{emoji}</span>
      </footer>
   );
}
export default withStyles(styles)(Footer);
