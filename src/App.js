import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './ColorHelpers.js';
function App() {
   //    console.log(seedColors[1]);
   return (
      <div className='App'>
         <Palette palette={generatePalette(seedColors[4])} />
      </div>
   );
}

export default App;
