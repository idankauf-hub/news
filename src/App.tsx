import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Navbar} from './Comps/navbar/Navbar';
import Graph from './Comps/datesGraph/Graph';
function App() {
  return (<>
    <Navbar/>
    <Graph/>
    </>
  );
}

export default App;
