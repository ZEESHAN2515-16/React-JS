import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelpers.js';
import PaletteList from './Components/PaletteList';
import Palette from './Components/Palette';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import Page from './Components/Page';
class Routes extends Component {
   render() {
      const { location, palettes, savePalette, deletePalette, findPalette } = this.props;
      return (
         <Switch location={location}>
            <Route
               exact
               path='/'
               render={(routeProps) => (
                  <Page>
                     <PaletteList paletteList={palettes} {...routeProps} handleDelete={deletePalette} />
                  </Page>
               )}
            />
            <Route
               exact
               path='/palette/new'
               render={(routeProps) => (
                  <Page>
                     <NewPaletteForm savePalette={savePalette} {...routeProps} palettes={palettes} />
                  </Page>
               )}
            />

            <Route
               exact
               path='/palette/:id'
               render={(routeProps) => (
                  <Page>
                     <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
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
                        palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                     />
                  </Page>
               )}
            />

            <Redirect to='/' />
         </Switch>
      );
   }
}

export default Routes;
