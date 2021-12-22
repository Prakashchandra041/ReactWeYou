import './App.css';

import { Todos } from "./components/Todos"
 import {Counter} from "./components/Counter"
function App() {
  return (
    <div className="App">
      <Counter></Counter> 
      <hr />
      <Todos></Todos>
    </div>
  );
}

export default App;

//useDispatch is used to Dispatch the Action
// useSelector is used to get the store