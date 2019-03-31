import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Icon from '../Icon'
import Name from '../Name'
import './PanelContent.css'

let currId = 0

function Content () {
  return <div className='panel-content'>
    <div className='icon-list'>
      <div className='icon-wrap'>
        <Icon backgroundColor='#0C6BFE'>知</Icon>
      </div>
      <div className='icon-wrap'>
        <Icon backgroundColor='#EF3F7B'>B</Icon>
      </div>
      <div className='icon-wrap'>
        <Icon backgroundColor='#DC0023'>博</Icon>
      </div>
      <div className='icon-wrap'>
        <Icon backgroundColor='#FEE012'>J</Icon>
      </div>
    </div>
    <Name />
  </div>
}

export default class PanelContent extends Component {
  constructor (props) {
    super(props)

    const wrap = this.wrap = document.createElement('div')

    wrap.setAttribute('id', currId++)
    wrap.setAttribute('class', 'panel-content-wrap')
    document.body.appendChild(wrap)
  }

  render () {
    return createPortal(<Content />, this.wrap)
  }
}
