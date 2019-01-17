import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './Pages/Login'
import { Home2 } from './Pages/Home2'
import { Home3 } from './Pages/Home3'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/home2'>Home2</Link></li>
        <li><Link to='/home3'>Home3</Link></li>
      </ul>
     <br />
      <Route exact path='/' component={Login} />
      <Route path='/home2' component={Home2} />
      <Route path='/home3' component={Home3} />
    </div>
  </BrowserRouter>
)

export default App