import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import Footer from './Footer';
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
      const { classes } = this.props;
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
         <div className={classes.palette}>
            <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true} />
            <div className={classes.paletteColors}>{colorBoxes}</div>
            <Footer paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}
export default withStyles(styles)(Palette);
