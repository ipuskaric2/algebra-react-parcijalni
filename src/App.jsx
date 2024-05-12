import { useState } from 'react';
import './App.css';
import UserInput from './userInput';
import UserInfo from './userInfo';

//pronaći korisnika i ispisati podatke o njemu
//https://api.github.com/users/
//https://api.github.com/users/reduxjs

function App(){
  const [currentSearch, setCurrentSearch] = useState(null);
  return(
    <>
      <h3>GitHub username:</h3>
      <UserInput onComplete={(inputValue) =>{
        setCurrentSearch(inputValue)
      }}/>
      {currentSearch && <UserInfo userName={currentSearch}/>} 
    </>
  );
}
export default App;
