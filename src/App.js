import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './ColorHelpers.js';
import PaletteList from './PaletteList';
function App() {
   // console.log(seedColors);
   const findPalette = (id) => {
      return seedColors.find((palette) => {
         return palette.id === id;
      });
   };
   return (
      <div className='App'>
         <Switch>
            <Route exact path='/' render={() => <PaletteList paletteList={seedColors} />} />
            <Route
               exact
               path='/palette/:id'
               render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
            />
         </Switch>
         {/* <Palette palette={generatePalette(seedColors[0])} /> */}
      </div>
   );
}

export default App;
