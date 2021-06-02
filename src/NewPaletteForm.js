import React from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ChromePicker } from 'react-color';
import Divider from '@material-ui/core/Divider';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DragableColorList from './DragableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      '& .MuiAppBar-colorPrimary': {
         backgroundColor: '#dae1e4',
         color: 'black',
      },
   },

   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   hide: {
      display: 'none',
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   },
   content: {
      flexGrow: 1,
      height: 'calc(100vh - 10px)',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   },
   button: {
      margin: theme.spacing(1),
   },
   headerBtn: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .MuiFormControl-root': {
         width: '100%',
      },
   },
   testDivSavePalette: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
   },
}));

function NewPaletteForm(props) {
   const { palettes } = props;
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [colors, handleAddColor] = useState([{ color: '#ff0000', name: 'Red' }]);
   const [newColorName, setNewColorName] = useState('');
   const [newPaletteName, setNewPaletteName] = useState('');
   const [selectColor, setSelectColor] = useState('');
   const handleDrawerOpen = () => {
      setOpen(true);
   };
   const handleDrawerClose = () => {
      setOpen(false);
   };
   const updateColor = (newColor) => {
      setSelectColor(newColor.hex);
   };
   const addNewColor = () => {
      const newColor = {
         color: selectColor,
         name: newColorName,
      };
      handleAddColor([...colors, newColor]);
      setNewColorName('');
   };
   const handleNewColorName = (evt) => {
      setNewColorName(evt.target.value);
   };
   const handleNewPaletteName = (evt) => {
      setNewPaletteName(evt.target.value);
   };
   useEffect(() => {
      // custom rule will have name 'isPasswordMatch'
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
         let isUnique = true;
         colors.forEach((color) => {
            if (color.name.toLowerCase() === value.toLowerCase()) isUnique = false;
         });

         // if (colors.length !== 0)
         //    console.log(colors.every((name) => name.toString().toLowerCase() !== value.toString().toLowerCase()));
         // else return isUnique;
         return isUnique;
      });
      ValidatorForm.addValidationRule('isColorUnique', () => {
         let isUnique = true;
         colors.forEach((color) => {
            if (color.color === selectColor) isUnique = false;
         });
         return isUnique;
      });

      ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
         let isUnique = true;
         palettes.forEach((palette) => {
            if (palette.paletteName.toLowerCase() === newPaletteName.toLowerCase()) isUnique = false;
         });

         return isUnique;
      });
   });

   const handleSavePalette = () => {
      let paletteName = newPaletteName;
      let newPalette = {
         id: paletteName.toLowerCase().replace(/ /g, '-'),
         paletteName: paletteName,
         colors: colors,
      };
      props.savePalette(newPalette);
      props.history.push('/');
   };

   const handleDelete = (colorName) => {
      handleAddColor(colors.filter((color) => color.name !== colorName));
   };

   const onSortEnd = ({ oldIndex, newIndex }) => {
      handleAddColor(arrayMove(colors, oldIndex, newIndex));
      // this.setState(({ items }) => ({
      //    items: arrayMove(items, oldIndex, newIndex),
      // }));
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
                  onClick={handleDrawerOpen}
                  edge='start'
                  className={clsx(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
               </IconButton>
               <div className={classes.headerBtn}>
                  <div>
                     <Typography variant='h6' noWrap>
                        Create A Palette
                     </Typography>
                  </div>
                  <div>
                     <ValidatorForm onSubmit={handleSavePalette} style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <TextValidator
                           value={newPaletteName}
                           onChange={handleNewPaletteName}
                           validators={['required', 'isPaletteNameUnique']}
                           errorMessages={['Palette Name is required', 'Palette name must be Unique']}
                        />
                        <Button
                           variant='contained'
                           color='primary'
                           size='small'
                           className={classes.button}
                           startIcon={<SaveIcon />}
                           type='submit'>
                           Save Palette
                        </Button>
                     </ValidatorForm>
                  </div>
                  <div>
                     <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        className={classes.button}
                        startIcon={<ExitToAppIcon />}
                        onClick={() => props.history.push('/')}>
                        Go Back
                     </Button>
                  </div>
               </div>
            </Toolbar>
         </AppBar>
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
            <Typography variant='h5'>Create A Palette</Typography>
            <Button variant='contained' color='secondary' className={classes.button} startIcon={<ClearAllIcon />}>
               Clear Palette
            </Button>
            <Button variant='contained' color='primary' className={classes.button} startIcon={<ColorizeIcon />}>
               Random Color
            </Button>
            <ChromePicker color={selectColor} onChange={updateColor} />

            <ValidatorForm onSubmit={addNewColor}>
               <TextValidator
                  value={newColorName}
                  onChange={handleNewColorName}
                  validators={['required', 'isColorNameUnique', 'isColorUnique']}
                  errorMessages={['Color Name is required', 'Color name must be Unique', 'Color must be unique']}
               />
               <Button
                  variant='contained'
                  size='small'
                  className={classes.button}
                  startIcon={<AddCircleOutlineIcon />}
                  style={{ backgroundColor: selectColor }}
                  type='submit'>
                  Add Color
               </Button>
            </ValidatorForm>
         </Drawer>
         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open,
            })}>
            <div className={classes.drawerHeader} />
            <DragableColorList colors={colors} handleDelete={handleDelete} axis='xy' onSortEnd={onSortEnd} />
         </main>
      </div>
   );
}

export default NewPaletteForm;
