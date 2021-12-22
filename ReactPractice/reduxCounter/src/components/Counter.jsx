import { useDispatch, useSelector } from "react-redux"; 
import { addCount, subCount } from "../store/action";



export const Counter = () => {
    const dispatch = useDispatch();
    const count=useSelector(store=>store.count)
  console.log(count);
  return ( 
    <>
          <h1>Counter{ count}</h1>
          <button onClick={() => { dispatch(addCount(1))}}>Add </button>
      <button onClick={() => { dispatch(subCount(1))}} >Sub</button>
    </>
  );
};
