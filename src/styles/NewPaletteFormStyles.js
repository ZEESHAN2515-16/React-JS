import { DRAWER_WIDTH } from './Constants';
import { makeStyles } from '@material-ui/core/styles';
import sizes from '../Components/sizes';

const styles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      '& .MuiAppBar-colorPrimary': {
         backgroundColor: '#dae1e4',
         color: 'black',
      },
   },

   drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      height: '100vh',
   },
   drawerPaper: {
      width: DRAWER_WIDTH,
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      [sizes.down('xs')]: {
         width: '100%',
         '& h6': {
            display: 'none',
         },
         '& span': {
            fontSize: '0.6rem',
         },
      },
   },
   drawerHeader: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      height: '66px',
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
      [sizes.down('sm')]: {
         height: '63px',
      },
      [sizes.down('xs')]: {
         height: '58px',
      },
   },
   content: {
      flexGrow: 1,
      // height: '100vh',
      height: 'calc(100vh - 10px)',
      padding: '0',
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -DRAWER_WIDTH,
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   },
   button: {
      margin: theme.spacing(1),
      width: '50%',
   },
   drawerContainer: {
      width: '90%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      '& h5': {
         fontWeight: '600',
         letterSpacing: '2px',
         fontFamily: 'Bahnschrift',
      },
   },
   buttons: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      margin: '2rem 0',
   },
}));

export default styles;
