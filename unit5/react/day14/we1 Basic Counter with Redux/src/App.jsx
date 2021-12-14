import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { addCount, subCount } from "./store/action";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  return (
    <div className="App">
      <h1>counter{count}</h1>
      <button onClick={() => dispatch(addCount(1))}>Add 1</button>
      <button onClick={()=>dispatch(subCount(1))}>Sub 1</button>
    </div>
  );
}

export default App;

//useDispatch is used to Dispatch the Action
// useSelector is used to get the store