import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


class Home extends React.Component 
{  
  render () 
  {      
    return ( <p>Some home content</p> );
  }    
};

class About extends React.Component 
{  
  render () 
  {      
    return ( <p>Some about content</p> );
  }    
};

class About2 extends React.Component 
{  
  render () 
  {      
    return ( <p>Some other about content in a different component. </p> );
  }    
};

class Contact extends React.Component 
{  
  render () 
  {      
    return ( <p>Some contact content</p> );
  }    
};

class TableComp extends React.Component 
{
  render ()
  {
    return (
      <table>
        <tbody>
          <tr><td>1</td><td>2</td><td>3</td></tr>
          <tr><td>4</td><td>5</td><td>6</td></tr>
          <tr><td>7</td><td>2</td><td>3</td></tr>
        </tbody>
      </table>
    )
  }
}

class ListComp extends React.Component 
{
  render ()
  {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>                
      </ul>
    )
  }
}

class LinkPage extends React.Component 
{  
  render () 
  {      
    return ( 
      <div>
        <h2>Link Page</h2>
        <p>A page with regular React Router links...</p>
        <Router>
          <div>
             <Link to="/linkpage/table">About</Link> <br />
             <Link to="/linkpage/list">List</Link>
 
             <Route path="/linkpage/table" component={TableComp}/>
             <Route path="/linkpage/list" component={ListComp}/>
          </div>
        </Router>
      </div>
    );
  }    
};

// We can get at the url parameter with this.props.match.params 
// followed by the url parameter name defined in the route.  
class URLParmExample extends React.Component 
{
  render()
  {
    return ( <p>URL parm: {this.props.match.params.someid} </p> );
  }
}


class App extends React.Component 
{
  render ()
  {
    return (

      <Router>
        <div>
          <h1>Single Page Application</h1>
          <ul>
            {
              // Our NavLinks create navigiation links that React Router 
              // will associate with our routes.  NavLinks will use the 
              // active css class to style themselves when they are the 
              // active link.  See the active css class in App.css.  We
              // need to use the exact property for our root/home path 
              // otherwise home will always be considered active.
            }
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/linkpage">LinkPage</NavLink></li>
            <li><NavLink to="/urlparm/34">URL Parm Example</NavLink></li>
          </ul>

          <hr/>
  
          {
            // Render a different component depending on the path, "/" is the 
            // "no path" case.  We add the property exact to have it render 
            // only on exact matches, otherwise "/" would also match for 
            // things like "/about".
          } 
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/linkpage" component={LinkPage}/>
          
          { 
            // A route with a url parameter in it, :someid after /urlparm 
          }
          <Route path="/urlparm/:someid" component={URLParmExample}/>

          {
            // We can have multiple components render in multiple areas by 
            // including multiple Route components.
          }
          <Route path="/about" component={About2} />

        </div>
      </Router>
    );
  }
}

export default App;
