
import './App.css';
import { Route,Switch} from "react-router-dom"
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Userlist } from "./components/Userlist";
import { UserDetail } from './components/UserDetail';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>

      <Route exact path="/">
        <Home></Home>
      </Route>
      
      <Route exact path="/about">
        <About></About>
      </Route>
        
        <Route path="/contact">
          <h1>contact list</h1>
          <li>Benguluru </li>
      </Route>
        
       <Route  path="/users">
        <Userlist></Userlist> 
        </Route>

        <Route path="/user/:id">
          <UserDetail></UserDetail>
        </Route>
        

        <Route>
          <h1> enter valid path</h1>
        </Route>

      </Switch>
    
    </div>
  );
}

export default App;
