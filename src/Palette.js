import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import Footer from './Footer';
import './Palette.css';
class Palette extends Component {
   constructor(props) {
      super(props);

      this.state = {
         level: 400,
         format: 'hex',
      };
   }
   changeLevel = (level) => {
      this.setState({ level });
   };
   changeFormat = (val) => {
      this.setState({ format: val });
   };

   render() {
      const { colors, paletteName, emoji, id } = this.props.palette;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((color) => (
         <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${id}/${color.id}`}
            showingFullPalette={true}
         />
      ));
      return (
         <div className='Palette'>
            <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true} />
            <div className='Palette-colors'>{colorBoxes}</div>
            <Footer paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default Palette;
