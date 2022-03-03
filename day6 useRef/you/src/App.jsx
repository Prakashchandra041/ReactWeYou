 // must watch video 5 from 1:39 hr to know what is stail state in useEffect
// json-server db.json --port 3001 --watch       --to run server

// USE THIS SRC FOLDER IN ATEMPLATEREACT IT CONTAI DB.JSON FILE


import { useState } from 'react';
import './App.css';
import { CounterRef } from './components/CounterRef';
import { TableDetail } from './components/TableDetail';
import { TableList } from './components/TableList';
import { UserForm } from './components/UserForm';

function App() {
  const [details, setDetails] = useState();


  return (
    <div className="App">
      {/* <Todo></Todo> */}
      {/* <CounterRef/> */}
      <h1>Employee Details</h1>
      <UserForm details={details} setDetails={setDetails}></UserForm>
      <TableList details={details} setDetails={setDetails}></TableList>
     
    </div>
  );
}

export default App;
