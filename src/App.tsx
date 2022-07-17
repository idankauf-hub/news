import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Navbar} from './Comps/navbar/Navbar';
import Graph from './Comps/datesGraph/Graph';
function App() {
  const data = [
    {
      month: "MAR",
      frequency: 4000,
    },
    {
      month: "APR",
      frequency: 2000,

    },
    {
      month: "MAY",
      frequency: 3000,
    },
    {
      month: "JUN",
      frequency: 2780,
    },
    {
      month: "JUL",
      frequency: 1890,
    },
    {
      month: "AUG",
      frequency: 2390,
    },
    {
      month: "SEP",
      frequency: 3490,
    },
  ];
  return (<>
    <Navbar/>
    <Graph data={data as any}/>
    </>
  );
}

export default App;
