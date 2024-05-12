import './App.css';

function UserInput({onComplete}){
    return <form onSubmit={(event)=>{
      event.preventDefault(); 
      const formElement = event.target;
      const inputElement =  formElement.search;
      const inputValue = inputElement.value;
      if(!inputValue) return
      onComplete(inputValue);
      console.log({formElement, inputElement});
    }}>
      <input id="search" type="text" placeholder="e.g. reduxjs"/>
      <button type="submit" >Go!</button>
    </form>
  }

  export default UserInput;