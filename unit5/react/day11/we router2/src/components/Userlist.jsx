import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((x) => x.json())
      .then((d) => {
        setUsers(d.data);
      });
  }, []);
  return (

      <div>
          {users.map((ele) => (
              <h1>
                  user : {ele.first_name}
                  <br />
                  <Link to={`user/${ele.id}`} >
                      <button>Detail</button>
                 </Link>
              </h1>
          ))}
    </div>
  );
};
