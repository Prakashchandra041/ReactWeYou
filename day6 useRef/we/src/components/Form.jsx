import { useState, useRef } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({});
    
    const fileRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        //  console.log("x", e.target.checked)
          console.log(fileRef.current.files[0])

        const { name, value, checked,type  } = e.target;
        setFormData({ ...formData, [name]: type==="checkbox"?checked: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter User Name"
                name="username"
            />{" "}
            <br />
            <input
                type="number"
                onChange={handleChange}
                placeholder="Enter Age"
                name="age"
            />{" "}
            <br />
            Is Married <input type="checkbox" onChange={handleChange} name="Is Married" /> <br />
            Country <select name="country" onChange={handleChange}>
                <option value="India">India</option>
                <option value="Japan">Janpan</option>
                <option value="Usa">Usa</option>
                <option value="Sri Lanka">Sri Lanka</option>    
            </select> <br />
            {/* learn about control and uncontrol element (any input filed which is handle by react is know as control element) file input is example of uncontrol we use useRef hook to handle this watch video at 2:06 hr */}
            
            <input type="file" onChange={handleChange} ref={fileRef} /> <br />
            
            <input type="submit" value="Submit" />
        </form>
    );
};
