import React, { useState } from 'react'

export const Color = () => {
    const [col,setcolor] = useState('red')
    
    document.body.style.backgroundColor=col;
  return (
    <div>
        <button onClick={ () => {setcolor('blue')}}> BLIUE</button>
    </div>
  )
}
