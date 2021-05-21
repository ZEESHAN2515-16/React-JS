import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
function App() {
   //    console.log(seedColors[1]);
   return (
      <div className='App'>
         <Palette {...seedColors[4]} />
      </div>
   );
}

export default App;
