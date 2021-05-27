import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import Footer from './Footer';
import './Palette.css';

class SingleColorPalette extends Component {
   constructor(props) {
      super(props);
      this.state = { format: 'hex' };
      this._shades = this.generateShades(this.props.palette, this.props.colorid);
   }
   generateShades(palette, colorToFilterby) {
      let shades = [];
      let allColors = palette.colors;
      for (let key in allColors) {
         shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterby));
      }
      return shades.slice(1);
   }
   changeFormat = (val) => {
      this.setState({ format: val });
   };

   render() {
      const colorBox = this._shades.map((color) => (
         <ColorBox key={color.name} background={color[this.state.format]} name={color.name} showLink={false} />
      ));
      const { paletteName, emoji, id } = this.props.palette;
      return (
         <div className='SingleColorPalette Palette'>
            <NavBar handleChange={this.changeFormat} showingAllColors={false} />
            <div className='Palette-colors'>
               {colorBox}
               <div className='ColorBox goBack'>
                  <Link to={`/palette/${id}`} className='goBackBtn'>
                     Go Back
                  </Link>
               </div>
            </div>
            <Footer paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default SingleColorPalette;
