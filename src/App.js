import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './ColorHelpers.js';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
function App() {
   const [newPal, saveNewPals] = useState(seedColors);
   const findPalette = (id) => {
      return newPal.find((palette) => {
         return palette.id === id;
      });
   };
   const savePalette = (newPalette) => {
      saveNewPals([...newPal, newPalette]);
   };
   return (
      <div className='App'>
         <Switch>
            <Route
               exact
               path='/'
               render={(routeProps) => (
                  <PaletteList paletteList={newPal} {...routeProps} />
               )}
            />
            <Route
               exact
               path='/palette/new'
               render={(routeProps) => (
                  <NewPaletteForm
                     savePalette={savePalette}
                     {...routeProps}
                     palettes={newPal}
                  />
               )}
            />

            <Route
               exact
               path='/palette/:id'
               render={(routeProps) => (
                  <Palette
                     palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                     )}
                  />
               )}
            />
            <Route
               exact
               path='/palette/:paletteId/:colorId'
               render={(routeProps) => (
                  <SingleColorPalette
                     colorid={routeProps.match.params.colorId}
                     palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                     )}
                  />
               )}
            />
         </Switch>
         {/* <Palette palette={generatePalette(seedColors[0])} /> */}
      </div>
   );
}

export default App;
