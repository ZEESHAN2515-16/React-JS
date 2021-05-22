import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
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
      const { colors } = this.props.palette;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((color) => <ColorBox background={color[format]} name={color.name} />);
      return (
         <div className='Palette'>
            {/* navber goes here */}
            <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
            <div className='Palette-colors'>{colorBoxes}</div>
            {/* footer goes here */}
            {/* Something also goes here */}
         </div>
      );
   }
}

export default Palette;
