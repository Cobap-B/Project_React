import { useContext, useState } from 'react';
import {ThemeCard} from '../Part/Game';
import '../CSS/Card.css'

function CardGame() {
    return (
        <>  
            <div className='button-container'>
              <ThemeButton theme="Classic" />
              <ThemeButton theme="Light" />
            </div>
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
    SetCarte([c,...carte])
  }


  return (
    <div className='c'>
      <button className='card-button' onClick={add}>Add Card</button>
      {carte[0].val} : {carte[0].color}
      <ul className='card-container'>
        {
          carte.map((val, key) => {
            return <li className={'card ' + val.color + theme.theme} key={key}> {val.val} <br/> {val.color} </li>
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
        <button className={theme.theme === props.theme ? "select" : "nonSelect"}
          onClick={theme.ChangeTheme} value={props.theme}> {props.theme} </button>
      </>
    )
}


export default CardGame;
