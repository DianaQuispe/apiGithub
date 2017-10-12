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
class Body extends Component {
  constructor() {
    super()
    this.playerOne = null;
    this.playerTwo  = 'honcheng';
  }

  render() {
    const Battle = () => {
      return(
        <div>
          <div className="row">
            <form className="column">
              <label className="header" for="username">Player One</label>
              <input onChange = {(e) =>e.target.value  } value=''  type="text" id="username" placeholder="github username"/>
              <Button>Submit</Button>
            </form>
            <form className="column">
              <label className="header" for="username">Player Two</label>
              <input type="text" id="username" placeholder="github username"/>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      )
    }
    
    return(
    <div className="row">
      <div>
        <h1 className="header">as</h1>
        <h3>Score :</h3>
        <div>
          <div className="column">
            <img className="avatar" src="" alt=""/>
            <h2 className="usernames">as</h2>

          </div>
        </div>
      </div> 
    </div>
    )
  }
}

battle(["ivanseidel","honcheng"]).then((results) => {
  if (results === null){
     console.log ('Looks like there was an error!\nCheck that both users exist on github.');
  }
  console.log ("battle result:", results[0], results[1]);
});


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
          <label className="header" for="username">Player Two</label>
          <input type="text" id="username" placeholder="github username"/>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}
// const bodyBattle = () => {
//   return (
  
//     <div className="row">
//       <div>
//         <h1 className="header">as</h1>
//         <h3>Score :</h3>
//         <div>
//           <div className="column">
//             <img className="avatar" src="" alt=""/>
//             <h2 className="usernames">as</h2>

//           </div>
//         </div>
//       </div> 
//     </div>
//   )
// }

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
// const lang = 'JavaScript';
// fetchPopularRepos(lang).then( (repos) => {
//    console.log ("repos:", repos);
//   this.setState(
//     function () {
//     return {
//       repos: repos
//     }
//   });
// });
// const getList = content => {
//   return content.map(item => (
//     <JAVASCRIPT
//     key ={item.id}
//     id = {item.id}
//     avatar = {item.owner.avatar_url}
//     url= {item.svn_url}
//     login= {item.owner.login}
//     stars = {item.stargazers_count }

    
//     />
//   ))
// }
//  const javaSCRIPT = ({id, avatar, url, login, stars}) => {
//   return (
//     <div> 
//       <ul className="popular-list">
//         <li className="popular-item">
//           <div className="popular-rank">

//           </div>
//           <ul className="space-list-items">
//             <li>
//               <img className="avatar" src={avatar} alt = ""/>
//             </li>
//             <li>
//               <a href={url}></a>
//             </li>
//             <li>
//               <label>"@"{login}</label>
//             </li>
//             <li>
//               {stars}
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
    
//   )
// } 
const JAVASCRIPT = () => {
  return(
    <div>
      {/* {fetchPopularRepos("Javascript")} */}
    </div>
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
