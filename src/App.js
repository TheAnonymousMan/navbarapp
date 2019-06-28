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
    this.state = {
      usualStyle: this.normal
    }

  }

  normal = {
    height : 36,
    width : 100
  };

  clicked = {
    height : 36,
    width : 100,
    background: '#'
  };

  changeStyle = () =>
  {
    //e.preventDefault();
    this.setState({usualStyle: this.clicked});
    console.log("Change should change." + this.state.usualStyle + typeof(this.state.usualStyle));
  }

  changeBackStyle = () =>
  {
    //e.preventDefault();
    this.setState({usualStyle: this.normal});
    console.log("Change should change back." + this.state.usualStyle + typeof(this.state.usualStyle))
  }

  render()
  {
    return (
      <Router>
        <div className='container'>
          
          <nav className='navbar'>
            <Link to='/' className={ this.props.selected === this.props.className ? 'selected ' :'' }>
              <div 
                style={this.state.usualStyle} 
                onMouseEnter={() => {this.changeStyle()}}
                onMouseLeave={this.changeBackStyle}> Home </div></Link> | 

            <Link to='/about' className={ this.props.selected === this.props.className ? 'selected ' :'' }><div style={this.normal}> About </div></Link> | 
            <Link to='/topics'><div style={this.normal}> Topics </div></Link>
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