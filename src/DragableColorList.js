import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DragableColorBox from './DragableColorBox';

const DragableColorList = SortableContainer(({ colors, handleDelete }) => {
   return (
      <div style={{ height: '100%' }}>
         {colors.map((color, i) => (
            <DragableColorBox
               index={i}
               key={color.name}
               color={color.color}
               name={color.name}
               handleDelete={() => handleDelete(color.name)}
            />
         ))}
      </div>
   );
});

export default DragableColorList;
