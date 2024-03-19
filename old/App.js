// import logo from './logo.svg';
import './App.css';
import {db} from '../src/fireBase'
import { useEffect, useState} from 'react';
import Header from './Header'

function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
  console.log(db)
  },[])

  return (
    <div className="App">
        <Header user={user}></Header>
    </div> 
  );
}

export default App;
