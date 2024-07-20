import React from 'react'

function Headline({span,div,id}) {
  return (
    <h1 className='head-line' id={id}><span>{span}</span> {div}</h1>
  )
}

export default Headline