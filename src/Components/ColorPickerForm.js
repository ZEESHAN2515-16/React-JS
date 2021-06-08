import React from 'react';
import { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorPickerFormStyles';

function ColorPickerForm(props) {
   const { paletteFull, addNewColor, colors, classes } = props;
   const [selectColor, setSelectColor] = useState('#579DF8');
   const [newColorName, setNewColorName] = useState('');

   const updateColor = (newColor) => {
      setSelectColor(newColor.hex);
   };

   const addColor = () => {
      const newColor = {
         color: selectColor,
         name: newColorName,
      };
      addNewColor(newColor);
      setNewColorName('');
   };
   const handleNewColorName = (evt) => {
      setNewColorName(evt.target.value);
   };
   useEffect(() => {
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
         let isUnique = true;
         colors.forEach((color) => {
            if (color.name.toLowerCase() === value.toLowerCase())
               isUnique = false;
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
   });

   return (
      <div className={classes.root}>
         <ChromePicker
            color={selectColor}
            onChange={updateColor}
            className={classes.colorPicker}
         />
         <ValidatorForm onSubmit={addColor}>
            <TextValidator
               value={newColorName}
               className={classes.colorInput}
               onChange={handleNewColorName}
               label='Color Name'
               variant='filled'
               margin='normal'
               validators={['required', 'isColorNameUnique', 'isColorUnique']}
               errorMessages={[
                  'Color Name is required',
                  'Color name must be Unique',
                  'Color must be unique',
               ]}
            />
            <Button
               variant='contained'
               size='small'
               className={classes.addBtn}
               startIcon={<AddCircleOutlineIcon />}
               style={{
                  backgroundColor: paletteFull ? 'lightgrey' : selectColor,
               }}
               type='submit'
               disabled={paletteFull}>
               {paletteFull ? 'Palette Full' : 'Add Color'}
            </Button>
         </ValidatorForm>
      </div>
   );
}

export default withStyles(styles)(ColorPickerForm);
