// import logo from './logo.svg';
import './App.css';
import {db} from '../src/firebase'
import { useEffect, useState} from 'react';
import Header from './Header'

function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
        <Header user={user}></Header>
    </div> 
  );
}

export default App;
