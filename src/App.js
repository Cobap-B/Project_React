import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <BasiqueText txt="Je suis étudiant en 2 ème année" />




        <Compteur />
    </div>
  );
}





function BasiqueText(props){
  return (
    <>
      <p>{props.txt}</p>
    </>
  )
}



function Compteur(){
  //Bien sur un compteur pour un test c'est toujours bien
  const [num, SetNum] = useState(0);

  function add(){
      SetNum(num + 1);
  }
  return(
    <>
      <button onClick={() => SetNum(num-1)}>-</button>
      {num}
      <button onClick={add}>+</button>
    </>
  )
  
}

export default App;
