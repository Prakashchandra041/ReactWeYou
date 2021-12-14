import { useEffect, useState } from "react";
import { useParams } from "react-router"


export const UserDetail = () => {
    const [user,setUser]=useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((d) => d.json())
            .then((x) => {
                setUser(x.data);
            })
    }, [id])

    return <>
        <div>
            <h1>User Detail</h1>
            <img src={user.avatar} alt="pic" />
            <h2>Name : {user.first_name} {user.last_name}</h2>
            <p>Email : {user.email }</p>
        </div>
       
        </>
}
