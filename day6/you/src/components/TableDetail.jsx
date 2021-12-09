// import data from "../db.json";
// json-server --watch db.json --port 3001
export const TableDetail = ({ values }) => {
  const { UserName, Age, Address, Department, Salary, IsMarried } = values;
  return (
      <tr>
        <td>{UserName}</td>
        <td>{Age}</td>
        <td>{Address}</td>
        <td>{Department}</td>
        <td>{Salary}</td>
        <td>{IsMarried ? "Married" : "Unmarried"}</td>
      </tr>
  );
};
