import React, { useEffect, useState } from 'react'

const ChildComponent = ({Getcolour}) => {
  const [color, setColor] = useState();

  useEffect(() => {
    Getcolour(color);
  }, [Getcolour, color]);

  return (
    <div>
      <h2>Child Component</h2>
      <input className='child-input' onChange={(e)=>{setColor(e.target.value)}} type="text" name="colour-name" />
    </div>
  );
}

export default ChildComponent