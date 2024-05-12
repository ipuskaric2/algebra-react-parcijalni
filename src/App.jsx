import { useState } from 'react'
import './App.css'

//pronaći korisnika i ispisati podatke o njemu
//https://api.github.com/users/
//https://api.github.com/users/reduxjs

function App(){
  const [currentSearch, setCurrentSearch] = useState(null);
  return(
    <>
      <h3>GitHub username:</h3>
      <userInput 
      onComplete={(inputValue) =>{
        setCurrentSearch(inputValue)
      }}/>
      {currentSearch && <userInfo userName={currentSearch}/>} 
    </>
  )
}
export default App
