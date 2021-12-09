import { useState } from "react";
import "./UserForm.css"
export const UserForm = ({details,setDetails}) => {
  const [formData, setFormData] = useState({
    UserName: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
   IsMarried: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
    console.log(e);
  };

    async function getData2() {
    const resData = await fetch("http://localhost:3001/User");
    const data = await resData.json();
    setDetails(data);
  }

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const addData = () => {
    try {
      fetch("http://localhost:3001/User", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        getData2();
      })
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div id="formdiv">
    <form onSubmit={handleSubmit}>
      Name:{" "}
      <input
        type="text"
        name="UserName"
        onChange={handleChange}
        placeholder="Enter Your Name"
      />{" "}
      <br />
      Age :{" "}
      <input
        type="number"
        name="Age"
        onChange={handleChange}
        placeholder="Enter Your Age"
      />{" "}
      <br />
      Address:{" "}
      <input
        type="text"
        name="Address"
        onChange={handleChange}
        placeholder="Address"
      /> <br />
      Department:{" "}
      <select name="Department" onChange={handleChange}>
        <option value="HR">HR</option>
        <option value="FrontEndDev"> Front End Developer</option>
        <option value="BackEndDev">Back End Developer</option>
        <option value="Network Enginner">Network Enginner</option>
        <option value="Civil Enginner">Civil Enginner</option>
      </select> <br />
      Salary:{" "}
      <input
        type="text"
        name="Salary"
        onChange={handleChange}
        placeholder="Enter your currnet salary"
      /> <br />
      Is Married{" "}
      <input type="checkbox" onChange={handleChange} name="IsMarried" /> <br />
      <input type="submit" value="submit" />
    </form>
            
    </div>        
  );
};
