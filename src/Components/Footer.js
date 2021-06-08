import styles from '../styles/FooterStyles';
import React from 'react';
import { withStyles } from '@material-ui/styles';

function Footer(props) {
   const { paletteName, emoji, classes } = props;
   return (
      <footer className={classes.paletteFooter}>
         {paletteName}
         <span className={classes.emoji}>{emoji}</span>
      </footer>
   );
}
export default withStyles(styles)(Footer);
