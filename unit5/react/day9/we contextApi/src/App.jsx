import './App.css';
import { First } from "./components/First"
import { useContext } from "react"
import {AuthContext} from "./contexts/AuthContext"
function App() {
  const { token, handleTokenChange } = useContext(AuthContext);
  if (!token) {
    return (
      <div className="App">
        <input type="text" placeholder ="Enter your user name" />
        <input type="passwor" placeholder="Password" />
        <button
        onClick={()=>handleTokenChange("abdc")}
        >Enter </button>
      </div>
    )
  }
  return (
    <div className="App">
      <First></First>
      
    </div>
  );
}

export default App;
