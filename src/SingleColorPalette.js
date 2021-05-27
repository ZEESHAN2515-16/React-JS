import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import Footer from './Footer';
import styles from './styles/PaletteStyles';

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
         <ColorBox key={color.name} background={color[this.state.format]} name={color.name} showingFullPalette={false} />
      ));
      const { paletteName, emoji, id } = this.props.palette;
      const { classes } = this.props;
      return (
         <div className={classes.palette}>
            <NavBar handleChange={this.changeFormat} showingAllColors={false} />
            <div className={classes.paletteColors}>
               {colorBox}
               <div className={classes.goBackContainer}>
                  <Link to={`/palette/${id}`}>Go Back</Link>
               </div>
            </div>
            <Footer paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default withStyles(styles)(SingleColorPalette);
