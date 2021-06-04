import { makeStyles } from '@material-ui/core';

const drawerWidth = 350;

const styles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '60px',
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   button: {
      margin: theme.spacing(1),
   },
   headerBtn: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .MuiFormControl-root': {
         width: '100%',
      },
   },
   testDivSavePalette: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
   },
   navBtns: {
      display: 'flex',
   },
}));

export default styles;
