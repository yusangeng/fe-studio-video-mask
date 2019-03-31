import React from 'react'
import './Panel.css'

export default function Panel ({ children }) {
  return <div className='panel'>
    <div className='panel-client-area'>
      {
        children
      }
    </div>
  </div>
}
