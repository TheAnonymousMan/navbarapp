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
      selectLink: 'home'
    }
  }

  changeStyle = (selectedlink) =>
  {
    // e.preventDefault();
    this.setState({selectLink: selectedlink});
    // this.selectLink = selectedlink;
    console.log("Change should change. " + this.state.selectLink +" "+ typeof(this.state.selectLink));
  }

  render()
  {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar'>
            
            <Link to='/'>
              {/* Don't Panic! */}
              <div                  
                onClick={() => {this.changeStyle('home')}}
                className={(this.state.selectLink === 'home') ? 'path selected' :'path'}
                > Home </div></Link> | 

            <Link to='/about'>
              <div
                className={this.state.selectLink === 'about' ? 'path selected' :'path'}
                onClick={() => {this.changeStyle('about')}}
                > About </div></Link> | 

            <Link to='/topics'>
              <div
                className={this.state.selectLink === 'topics' ? 'path selected' :'path'}
                onClick={() => {this.changeStyle('topics')}}
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