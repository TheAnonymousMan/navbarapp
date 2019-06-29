// Don't Panic.

import React from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class NavBar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      selectLink: false
    };
  }
  changeStyle = () =>
  {
    this.setState({selectLink: !this.state.selectLink});
    // Forcefully making a state change to cause the components to rerender.
    console.log("Class should change. " + this.state.selectLink +" "+ typeof(this.state.selectLink));
  }

  render()
  {
    return ( 
      <Router>
        <div className='container'>
          <nav className='navbar'>
            
            <Link to='/'>
              <div
                className={(window.location.pathname === '/') ? 'path selected' :'path'}
                // window.location.pathname seems to return only the url entered.
                onClick={this.changeStyle} 
                // The onClick seems useless, if we remove it, the colour stops changing on clicking.
                // The setState method needs to be called so as to reset the location name. Why?
                // React component won't rerender when you change window.location.pathname. 
                // Only state changes will cause component to rerender. 
                // Hence, we make a forceful change in the states.
                > Home </div></Link> |                    

            <Link to='/about'>
              <div
                className={(window.location.pathname === '/about') ? 'path selected' :'path'}
                onClick={this.changeStyle}
                > About </div></Link> | 

            <Link to='/topics'>
              <div
                className={(window.location.pathname === '/topics') ? 'path selected' :'path'}
                onClick={this.changeStyle} 
                > Topics </div></Link>
          </nav>
          
          <hr/>

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/topics' component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default NavBar;
