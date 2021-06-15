import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';
function MiniPalette(props) {
   const { classes, paletteName, emoji, colors, handleClick, id } = props;
   const miniColorBoxes = colors.map((color) => (
      <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>
   ));

   const handleDelete = (e) => {
      e.stopPropagation();
      props.openDialog(id);
   };

   return (
      <div className={classes.root} onClick={handleClick}>
         <div className={classes.delete}>
            <DeleteIcon className={classes.deleteIcon} style={{ transition: 'all 0.5s ease-in-out' }} onClick={handleDelete} />
         </div>
         <div className={classes.colors}>{miniColorBoxes}</div>
         <h5 className={classes.title}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
         </h5>
      </div>
   );
}

export default withStyles(styles)(MiniPalette);
