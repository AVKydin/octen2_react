import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, increment100, reset} from "./slices/slice1";




const App = () => {

    const {value} = useAppSelector((state) => state.slice1);

    const dispatch = useAppDispatch();

  return (
      <div>
            <h2>{value}</h2>
            <button onClick={()=>{
                dispatch(increment())
            }}
            >increment
            </button>
            <button onClick={()=>{
                dispatch(increment100(100))
            }}
            >increment100</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>decrement</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>reset</button>
      </div>
  );
};


export default App;


