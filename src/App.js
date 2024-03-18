// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {db} from './firedb'

function App() {

  useEffect(()=>{
    console.log(db)
  },[])

  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
