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
  const head = ["Valet", "Reine", "Roi"];

  const theme = useContext(ThemeCard);

  function add() {
    let v = Math.ceil(Math.random() * 13);
    if (v>10){
      v = head[v-11];
    }
    let c = {
      val: v,
      color: colorPal[Math.floor(Math.random() * 4)]
    }

    if (Math.round(Math.random()*100) === 1){
      c = {val : "Joker", color : "Gold"};
    }
    SetCarte([c,...carte])
  }

 

  //{carte[0].val} : {carte[0].color}
  return (
    <div className='c'>
      <button className='card-button' onClick={add}>Add Card</button>
      
      <ul className='card-container'>
        {
          carte.map((val, key) => {
            let style = 'card ' + val.color + theme.theme;
            return <li className={style} key={key}> {val.val} <br/> {val.color} </li>
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
