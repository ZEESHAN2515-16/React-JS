import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import DragableColorList from './DragableColorList';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { arrayMove } from 'react-sortable-hoc';
import ColorPickerForm from './ColorPickerForm';
import PaletteNav from './PaletteFormnav';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm(props) {
   const maxColors = 20;
   const { palettes } = props;
   const classes = styles();
   const [open, setOpen] = useState(false);
   const [colors, handleAddColor] = useState(palettes[0].colors);
   const paletteFull = colors.length >= maxColors;
   const handleDrawerOpen = () => {
      setOpen(true);
   };
   const handleDrawerClose = () => {
      setOpen(false);
   };

   const handleDelete = (colorName) => {
      handleAddColor(colors.filter((color) => color.name !== colorName));
   };

   const onSortEnd = ({ oldIndex, newIndex }) => {
      handleAddColor(arrayMove(colors, oldIndex, newIndex));
   };

   const clearPalette = () => {
      handleAddColor([]);
   };
   const randomColor = () => {
      const allColors = palettes.map((palette) => palette.colors).flat();
      const rand = Math.floor(Math.random() * allColors.length);
      handleAddColor([...colors, allColors[rand]]);
   };
   const handleSavePalette = (palette) => {
      const { paletteName, emoji } = palette;
      let newPalette = {
         id: paletteName.toLowerCase().replace(/ /g, '-'),
         paletteName: paletteName,
         colors: colors,
         emoji: emoji,
      };
      props.savePalette(newPalette);
      props.history.push('/');
   };

   const addColor = (newColor) => {
      handleAddColor([...colors, newColor]);
   };

   const nodeRef = React.useRef(null);

   return (
      <div className={classes.root}>
         <PaletteNav
            open={open}
            handleDrawer={handleDrawerOpen}
            {...props.history}
            palettes={palettes}
            handleSubmit={handleSavePalette}
         />
         <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
               paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
               <IconButton onClick={handleDrawerClose}>{<ChevronLeftIcon />}</IconButton>
            </div>
            <Divider />
            <div className={classes.drawerContainer}>
               <Typography variant='h5' gutterBottom>
                  Design A Palette
               </Typography>
               <div className={classes.buttons}>
                  <Button
                     variant='contained'
                     color='secondary'
                     size='small'
                     className={classes.button}
                     startIcon={<ClearAllIcon />}
                     onClick={clearPalette}>
                     Clear Palette
                  </Button>
                  <Button
                     variant='contained'
                     color='primary'
                     size='small'
                     className={classes.button}
                     startIcon={<ColorizeIcon />}
                     onClick={randomColor}
                     disabled={paletteFull}>
                     Random Color
                  </Button>
               </div>
               <ColorPickerForm paletteFull={paletteFull} addNewColor={addColor} colors={colors} />
            </div>
         </Drawer>
         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open,
            })}>
            <div className={classes.drawerHeader} />
            <DragableColorList colors={colors} handleDelete={handleDelete} axis='xy' onSortEnd={onSortEnd} nodeRef={nodeRef} />
         </main>
      </div>
   );
}

export default NewPaletteForm;
