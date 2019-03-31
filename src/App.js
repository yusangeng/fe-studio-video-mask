import React, { Component } from 'react'
import Panel from './components/Panel'
import PanelContent from './components/PanelContent'
import './App.css'

class App extends Component {
  render () {
    return <div className='app'>
      <Panel>
        <PanelContent />
      </Panel>
    </div>
  }
}

export default App
