const drawerWidth = 350;

export default {
   root: {
      display: 'flex',
   },
   '& .MuiAppBar-colorPrimary': {
      backgroundColor: '#dae1e4',
      color: 'black',
   },
   '& .headerBtn': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   // appBar: {
   //    transition: theme.transitions.create(['margin', 'width'], {
   //       easing: theme.transitions.easing.sharp,
   //       duration: theme.transitions.duration.leavingScreen,
   //    }),
   // },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      // transition: theme.transitions.create(['margin', 'width'], {
      //    easing: theme.transitions.easing.easeOut,
      //    duration: theme.transitions.duration.enteringScreen,
      // }),
   },
   // menuButton: {
   //    marginRight: theme.spacing(2),
   // },
   hide: {
      display: 'none',
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      // padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   },
   content: {
      flexGrow: 1,
      height: 'calc(100vh - 10px)',
      // padding: theme.spacing(3),
      // transition: theme.transitions.create('margin', {
      //    easing: theme.transitions.easing.sharp,
      //    duration: theme.transitions.duration.leavingScreen,
      // }),
      marginLeft: -drawerWidth,
   },
   contentShift: {
      // transition: theme.transitions.create('margin', {
      //    easing: theme.transitions.easing.easeOut,
      //    duration: theme.transitions.duration.enteringScreen,
      // }),
      marginLeft: 0,
   },
   // button: {
   //    margin: theme.spacing(1),
   // },
   // headerBtn: {
   //    display: 'flex',
   // },
};
