import React, { useState } from 'react'

export const Cont = () => {
    const [data,setdata] = useState(0)
  return (
    <div>
        <h1>counr {data}</h1>
        <button onClick={()=> {setdata(data+1)}}></button>
    </div>
  )
}
