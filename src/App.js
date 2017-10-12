import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {battle, fetchPopularRepos} from './api-battle';
import {utils, Button} from 'react-bootstrap'
import { 
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'



const Home = () => {
  return(
    <div className="home-container">
      <h1>Github Battle: Battle your friends... and stuff.</h1>
      <NavLink to="/battle" className="btn">Battle</NavLink>
    </div>
  )
}
const Battle = () => {
  return(
    <div>
      <div className="row">
        <form className="column">
          <label className="header" for="username">Player One</label>
          <input type="text" id="username" placeholder="github username"/>
          <Button>Submit</Button>
        </form>
        <form className="column">
          <label className="header" for="username">Player One</label>
          <input type="text" id="username" placeholder="github username"/>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}
const NotFoundPage = (props) => {
  return (
     <div> <h2> Error 404! </h2> </div>
  );
}
const ALL = () => {
  return (
    <div> <h2> ALL </h2> </div>
    
  )
} 
const RUBY = () => {
  return (
    <div> <h2> RUBY </h2> </div>
    
  )
}
 const JAVASCRIPT = () => {
  return (
    <div> <h2> JAVASCRIPT </h2> </div>
    
  )
} 
const Popular = () => {
  return(
    <div>
      <ul className="languages">
        <li style={{color: 'rgb(208, 2, 27)'}}>
        <NavLink exact to="/popular/all"> All </NavLink>
        </li>
        <li> <NavLink exact to="/popular/javascript"> Javascript </NavLink></li>
        <li> <NavLink to="/popular/ruby"> Ruby </NavLink></li>
        {/* <li> <NavLink to="/popular/ruby"> Ruby </NavLink></li> */}
        {/* <li> <NavLink to="/popular/css"> Java </NavLink></li>
        <li> <NavLink to="/popular/css"> CSS </NavLink></li>
        <li> <NavLink to="/popular/css"> Python </NavLink></li>
        <li> <NavLink to="/popular/css"> CSS </NavLink></li> */}
      </ul>
      <Switch>
             {/* render={() =><Redirect to ="popular/all"/>}/> */}
        <Route path= "/popular/all" component= {ALL}/>   
        <Route path= "/popular/javascript" component= {JAVASCRIPT}/>     
        <Route path= "/popular/ruby" component= {RUBY}/>     
        {/* <Route path= "/popular/all" component= {ALL}/>      */}
  
      </Switch>
    </div>
  )
}
const lang = 'JavaScript';
fetchPopularRepos(lang).then( (repos) => {
   console.log ("repos:", repos);
  this.setState(
    function () {
    return {
      repos: repos
    }
  });
});

const lang = 'Ruby';
fetchPopularRepos(lang).then( (repos) => {
   console.log ("repos:", repos);
  this.setState(
    function () {
    return {
      repos: repos
    }
  });
});
battle([
   "ivanseidel", // https://github.com/ivanseidel
   "honcheng"]  // https://github.com/honcheng
 ).then((results) => {
   if (results === null){
      console.log ('Looks like there was an error!\nCheck that both users exist on github.');
   }
   console.log ("battle result:", results[0], results[1]);
});

const App = () => (
  <BrowserRouter>
  <div>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/battle">Battle</NavLink></li> 
      <li><NavLink to="/popular">Popular</NavLink></li>               
    </ul>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/battle" component={Battle}/> 
       <Route path="/popular" component={Popular}/>       
       <Route component={NotFoundPage}/>
    </Switch>
  </div>
</BrowserRouter>
)
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul className="nav">
//           <li>
//             <NavLink to="/home">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/battle">Battle</NavLink>
//           </li>
//           <li>
//             <NavLink to="/popular">Popular</NavLink>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
