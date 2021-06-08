import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DragableColorBox from './DragableColorBox';
import styles from '../styles/DraggableColorList';
import { withStyles } from '@material-ui/styles';

const DragableColorList = SortableContainer(
   ({ colors, handleDelete, nodeRef, classes }) => {
      return (
         <div className={classes.list}>
            {colors.map((color, i) => (
               <DragableColorBox
                  index={i}
                  key={color.name}
                  color={color.color}
                  name={color.name}
                  nodeRef={nodeRef}
                  handleDelete={() => handleDelete(color.name)}
               />
            ))}
         </div>
      );
   }
);
// export default DragableColorList;
export default withStyles(styles)(DragableColorList);
