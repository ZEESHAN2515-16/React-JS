import sizes from '../Components/sizes';
export default {
   list: {
      height: 'calc(100vh - 64px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      [sizes.down('xs')]: {
         height: 'calc(100vh - 64px)',
      },
   },
};
