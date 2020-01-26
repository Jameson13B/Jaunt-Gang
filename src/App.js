import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './views/Home'
import JauntList from './views/JauntList'

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/jaunts' component={JauntList} />
      {/* <Route path='/about' component={About} /> */}
    </div>
  )
}

export default App
