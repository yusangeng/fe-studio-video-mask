import React from 'react'
import PropTypes from 'prop-types'
import './Icon.css'

export default function Icon ({ backgroundColor, children }) {
  return <div className='icon' style={{ backgroundColor }}>
    {
      children
    }
  </div>
}

Icon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backgroundColor: PropTypes.string
}

Icon.defaultProps = {
  children: '空',
  backgroundColor: '#FFF'
}
