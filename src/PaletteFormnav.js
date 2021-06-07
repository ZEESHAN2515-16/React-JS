import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import AddIcon from '@material-ui/icons/LibraryAdd';
=======
>>>>>>> 1490295c39874ea60924c370f84298fbfe05e850
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/icons/LibraryAdd';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

function PaletteFormnav(props) {
   const { open, handleDrawer, push, palettes, handleSubmit } = props;
   const [formShowing, toggleForm] = useState(false);
   const classes = styles();

   const handleShow = () => {
      toggleForm(!formShowing);
   };

   return (
      <div className={classes.root}>
         <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
               [classes.appBarShift]: open,
            })}>
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handleDrawer}
                  edge='start'
                  className={clsx(classes.menuButton, open && classes.hide)}>
<<<<<<< HEAD
                  <AddIcon />
=======
                  <Drawer />
>>>>>>> 1490295c39874ea60924c370f84298fbfe05e850
               </IconButton>
            </Toolbar>
            <div className={classes.headerBtn}>
               <div>
                  <Typography variant='h6' noWrap>
                     Create A Palette
                  </Typography>
               </div>
               <div className={classes.navBtns}>
                  <Button
                     variant='contained'
                     color='secondary'
                     size='small'
                     className={classes.button}
                     startIcon={<ExitToAppIcon />}
                     onClick={() => push('/')}>
                     Go Back
                  </Button>
                  <Button
                     variant='contained'
                     color='primary'
                     size='small'
                     startIcon={<BookmarkIcon />}
                     className={classes.button}
                     onClick={handleShow}>
                     Save Palette
                  </Button>
               </div>
            </div>
         </AppBar>
         {formShowing && (
            <PaletteMetaForm handleSubmit={handleSubmit} palettes={palettes} gotoHome={push} toggleShow={handleShow} />
         )}
      </div>
   );
}

export default PaletteFormnav;
