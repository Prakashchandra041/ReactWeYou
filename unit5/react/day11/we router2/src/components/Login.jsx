import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import{useHistory} from "react-router-dom"
export const Login = () => {
    const {handleToken} = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const history=useHistory()
    return <div>
        <input type="text"
            placeholder="Enter name"
             onChange={(e)=> setName(e.target.value)}
        />
        <input type="password"
            placeholder="Enter Password"
            onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={() => {
            fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: name, password }),
            })
                .then((d) => d.json())
                .then(({ token }) => {
                    handleToken(token)
                    history.push("/users")
                    // console.log(token);
                });
            
        }}>
            Login
        </button>

    </div>
}


// both useHistory and redirect are same but <redirect> is happend when component is rerender , on other hand  usehistory
// is used on contion like button click  (must watch video route 2 from 1:31 hr)

// fetch("https://reqres.in/api/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: name, password }),
//           })
//             .then((d) => d.json())
//             .then(({ token }) => {
//               handleToken(token);
//             });
