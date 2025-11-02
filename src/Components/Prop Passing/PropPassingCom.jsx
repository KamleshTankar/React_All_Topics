import React, { useState } from 'react'
import ChildComponent from './component/ChildComponent';

const PropPassingCom = () => {
  const[color, setColor] = useState('');
  
  const getColour = (color) => {
    setColor(color);
  }

  return (
    <>
      <h1 className='proppassing-heading'>Prop Passing</h1>
      <div className='parent-box'>
        <h2>Parent Component</h2>
        <div data-testid="parent-component" style={{background:color}} className="parent"></div>
        <ChildComponent Getcolour={getColour} />
    </div>
    </>
  );
}

export default PropPassingCom