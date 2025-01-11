import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <BasiqueText txt="Je suis étudiant en 2 ème année" />




        <Compteur /><br/>
        <TestListe/>
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

  //Fonction en minuscule et compenant en maj
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

function TestListe(){
  
  const [carte, SetCarte] = useState([]); //CamelCase toujours normalement?
  
  const colorPal = ["Pique", "Coeur", "Trefles", "Carreau"];
  

  function add(){
    let c = {
      val : Math.ceil(Math.random()*10),
      color : colorPal[Math.floor(Math.random()*4)]
    }
    SetCarte([...carte, c])
  }

  return(
    <div>
      <button onClick={add}>Add Random</button>
      {
      carte.map((val, key) => {
          return <>{val.val} : {val.color}</>
      }
      )}
    </div>
  )
}








export default App;
