import { useContext, useState } from 'react';
import {ThemeCard} from './App';

function CardGame() {
    return (
        <>
            <ThemeButton theme="Classic" />
            <ThemeButton theme="Light" />

            <TestListe />
        </>
    )
}



function TestListe() {


  const [carte, SetCarte] = useState([]); //CamelCase toujours normalement?
  const colorPal = ["Pique", "Coeur", "Trefles", "Carreau"];

  const theme = useContext(ThemeCard);

  function add() {
    let c = {
      val: Math.ceil(Math.random() * 10),
      color: colorPal[Math.floor(Math.random() * 4)]
    }
    SetCarte([...carte, c])
  }


  return (
    <div className={theme.theme}>
      <button className='card-button' onClick={add}>Add Card</button>
      <ul className='card-container'>
        {
          carte.map((val, key) => {
            return <li className={'card ' + val.color + theme.theme} key={key}> {val.val} : {val.color} </li>
          })
        }
      </ul>
    </div>
  )
}



function ThemeButton(props) {

    const theme = useContext(ThemeCard);
  
    return (
      <>
        <button onClick={theme.ChangeTheme} value={props.theme}> {props.theme} </button>
      </>
    )
}


export default CardGame;
