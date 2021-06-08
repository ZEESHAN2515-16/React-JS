import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import seedColors from './seedColors';
import './styles/Page.css';
import { generatePalette } from './ColorHelpers.js';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import Page from './Components/Page';

function App() {
   // const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

   let initializePalette;

   try {
      initializePalette = JSON.parse(window.localStorage.getItem('palettes'));
      if (initializePalette === null || initializePalette.length === 0)
         initializePalette = seedColors;
   } catch (er) {
      initializePalette = seedColors;
   }

   const [palettes, saveNewPals] = useState(initializePalette);
   useEffect(() => {
      window.localStorage.setItem('palettes', JSON.stringify(palettes));
   }, [palettes]);

   const savePalette = (newPalette) => {
      saveNewPals([...palettes, newPalette]);
   };

   const findPalette = (id) => {
      return palettes.find((palette) => {
         return palette.id === id;
      });
   };

   const deletePalette = (paletteId) => {
      let newPalette = palettes.filter((palette) => palette.id !== paletteId);
      saveNewPals(newPalette);
   };

   return (
      <Switch>
         <Route
            exact
            path='/'
            render={(routeProps) => (
               <Page>
                  <PaletteList
                     paletteList={palettes}
                     {...routeProps}
                     handleDelete={deletePalette}
                  />
               </Page>
            )}
         />
         <Route
            exact
            path='/palette/new'
            render={(routeProps) => (
               <Page>
                  <NewPaletteForm
                     savePalette={savePalette}
                     {...routeProps}
                     palettes={palettes}
                  />
               </Page>
            )}
         />

         <Route
            exact
            path='/palette/:id'
            render={(routeProps) => (
               <Page>
                  <Palette
                     palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                     )}
                  />
               </Page>
            )}
         />
         <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={(routeProps) => (
               <Page>
                  <SingleColorPalette
                     colorid={routeProps.match.params.colorId}
                     palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                     )}
                  />
               </Page>
            )}
         />
      </Switch>
   );
}

export default App;
