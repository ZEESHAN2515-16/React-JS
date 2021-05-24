import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './ColorHelpers.js';
function App() {
   // console.log(seedColors);
   const findPalette = (id) => {
      return seedColors.find((palette) => {
         return palette.id === id;
      });
   };
   console.log(findPalette('material-ui-colors'));
   return (
      <div className='App'>
         <Switch>
            <Route exact path='/' render={() => <h1>Palette List Goes Here </h1>} />
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
