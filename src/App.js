import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Dtl from './routes/Dtl'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/movie/dtl/:id' exact={true} component={Dtl} />
      <Redirect from='*' to='/' />
    </BrowserRouter>
  )
}

export default App;
