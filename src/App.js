import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import seedColors from './seedColors';
import Routes from './Routes';

function App() {
   let initializePalette;
   try {
      initializePalette = JSON.parse(window.localStorage.getItem('palettes'));
      if (initializePalette === null || initializePalette.length === 0) initializePalette = seedColors;
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
      console.log('Delete Palette');
      let newPalette = palettes.filter((palette) => palette.id !== paletteId);
      saveNewPals(newPalette);
      console.log(palettes);
   };

   return (
      <Route
         render={({ location }) => (
            <TransitionGroup>
               <CSSTransition key={location.key} classNames='page' timeout={500}>
                  <Routes
                     location={location}
                     palettes={palettes}
                     savePalette={savePalette}
                     deletePalette={deletePalette}
                     findPalette={findPalette}
                  />
               </CSSTransition>
            </TransitionGroup>
         )}
      />
   );
}

export default App;
