import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: 'blue',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
   },
   container: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-betweeen',
      color: 'white',
   },
   palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30%)',
      gridGap: '5%',
   },
};
class PaletteList extends Component {
   gotoPalette(id) {
      console.log('In mini palette');
      this.props.history.push(`/palette/${id}`);
   }
   render() {
      const { paletteList, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h2>React Color</h2>
               </nav>
               <div className={classes.palettes}>
                  {paletteList.map((palette) => (
                     <MiniPalette {...palette} key={palette.id} handleClick={() => this.gotoPalette(palette.id)} />
                  ))}
               </div>
            </div>
         </div>
      );
      // <p>
      //    <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      // </p>
   }
}

export default withStyles(styles)(PaletteList);
