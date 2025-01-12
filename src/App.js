import { createContext, useEffect, useState } from 'react';
import CardGame from './CardGame';
import Compteur from './Compteur';
import './App.css';

export const ThemeCard = createContext();

function App() {

  const [theme, SetTheme] = useState("Classic");

  function ChangeTheme(event) {
    SetTheme(event.target.value);
  }

  return (
    <div className="App">

      <BasiqueText txt="Je suis étudiant en 2 ème année" />

      <Compteur /><br />

      <ThemeCard.Provider value={{ theme, ChangeTheme }}>
        <CardGame />
      </ThemeCard.Provider>


      <TestEffect />
    </div>
  );
}




function BasiqueText(props) {
  return (
    <>
      <p>{props.txt}</p>
    </>
  )
}




function TestEffect() {
  useEffect(() => {
    console.log("Echo à la création")
  }, [])

  useEffect(() => {
    console.log("Echo à chaque update")
  })

  return <></>
}




export default App;
