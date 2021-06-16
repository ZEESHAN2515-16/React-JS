import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import styles from '../styles/PaletteListStyles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

class PaletteList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         openDelDialog: false,
         deletingId: '',
      };
   }

   openDialog = (id) => {
      this.setState({ openDelDialog: true, deletingId: id });
   };
   closeDialog = () => {
      this.setState({ openDelDialog: false, deletingId: '' });
   };
   handleDelete = () => {
      this.setState({ openDelDialog: false });
      this.closeDialog();
      this.props.handleDelete(this.state.deletingId);
   };

   gotoPalette = (id) => {
      this.props.history.push(`/palette/${id}`);
   };

   render() {
      const { paletteList, classes } = this.props;
      const { openDelDialog } = this.state;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h2>React Color</h2>
                  <Link to='/palette/new'>Create Palette</Link>
               </nav>

               <TransitionGroup className={classes.palettes}>
                  {paletteList.map((palette) => (
                     <CSSTransition key={palette.id} timeout={500} classNames='fade'>
                        <MiniPalette {...palette} key={palette.id} handleClick={this.gotoPalette} openDialog={this.openDialog} />
                     </CSSTransition>
                  ))}
               </TransitionGroup>
            </div>
            <Dialog open={openDelDialog} onClose={this.closeDialog} aria-labelledby='delete-dialog-title'>
               <DialogTitle id='delete-dialog-title'>Delete a palette</DialogTitle>
               <List>
                  <ListItem button onClick={this.handleDelete}>
                     <ListItemAvatar>
                        <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                           <CheckIcon />
                        </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='Delete' />
                  </ListItem>
                  <ListItem button>
                     <ListItemAvatar>
                        <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                           <CloseIcon />
                        </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='Cancel' onClick={this.closeDialog} />
                  </ListItem>
               </List>
            </Dialog>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
