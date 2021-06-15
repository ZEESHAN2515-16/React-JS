import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/styles';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const styles = {
   title: {
      '& h2': {
         fontWeight: '700',
         userSelect: 'none',
      },
   },
};

function PaletteMetaForm(props) {
   const { handleSubmit, palettes, classes, toggleShow } = props;
   const [newPaletteName, setNewPaletteName] = useState('');
   const [stage, setStageName] = useState('palette');
   const handleNewPaletteName = (evt) => {
      setNewPaletteName(evt.target.value);
   };

   useEffect(() => {
      ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
         let isUnique = true;
         palettes.forEach((palette) => {
            if (palette.paletteName.toLowerCase() === newPaletteName.toLowerCase()) isUnique = false;
         });
         return isUnique;
      });
   });

   const showEmojiPicker = () => {
      setStageName('emoji');
   };
   const selectEmoji = (mys) => {
      const newPalette = {
         paletteName: newPaletteName,
         emoji: mys.native,
      };
      handleSubmit(newPalette);
      setStageName('');
   };

   return (
      <div>
         <Dialog open={stage === 'emoji'} onClose={toggleShow}>
            <DialogTitle id='form-dialog-title' className={classes.title}>
               Choose a Emoji{' '}
               <span role='img' aria-label='palette emoji'>
                  🙂
               </span>
            </DialogTitle>
            <Picker onSelect={selectEmoji} title='Pick your emoji…' emoji='point_up' />
         </Dialog>
         <Dialog open={stage === 'palette'} onClose={toggleShow} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title' className={classes.title}>
               Choose a Palette Name{' '}
               <span role='img' aria-label='palette emoji'>
                  🎨
               </span>
            </DialogTitle>

            <ValidatorForm onSubmit={showEmojiPicker}>
               <DialogContent>
                  <DialogContentText>Please enter a name for your palette. Make sure it's unique!</DialogContentText>

                  <TextValidator
                     value={newPaletteName}
                     placeholder='Palette Name'
                     onChange={handleNewPaletteName}
                     validators={['required', 'isPaletteNameUnique']}
                     errorMessages={['Palette Name is required', 'Palette name must be Unique']}
                     fullWidth
                     margin='normal'
                  />
               </DialogContent>
               <DialogActions>
                  <Button onClick={toggleShow} color='primary'>
                     Cancel
                  </Button>
                  <Button
                     variant='contained'
                     color='primary'
                     size='small'
                     //  className={classes.button}
                     startIcon={<SaveIcon />}
                     type='submit'>
                     Proceed
                  </Button>
               </DialogActions>
            </ValidatorForm>
         </Dialog>
      </div>
   );
}

export default withStyles(styles)(PaletteMetaForm);
