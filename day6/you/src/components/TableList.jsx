import { TableDetail } from "./TableDetail";
// import data from "../db.json";
import { useEffect, useState } from "react";

export const TableList = ({details,setDetails}) => {
  const [asc, setAsc] = useState(false);
  const [depFilter, setDepFilter] = useState();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resData = await fetch("http://localhost:3001/User");
    const data = await resData.json();
    setDetails(data);
  }

  const sortingFunctionasc = (a, b) => {
    return a.Salary - b.Salary;
  }

  const sortingFunctiondesc = (a, b) => {
    return b.Salary - a.Salary;
  }

  return (
     <div>
      <br /><br />
      <table style={{margin:"auto"}}>
        <tr>
          <th>User Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Deparment</th>
          <th>Salary</th>
          <th>Married Status</th>
        </tr>
        {details &&
          details.sort(asc?sortingFunctionasc:sortingFunctiondesc) .map((item) => (
            <TableDetail key={item.id} values={item}></TableDetail>
          ))}
      </table>
    </div>
  );
};
