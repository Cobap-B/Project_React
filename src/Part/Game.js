import { createContext, useState } from 'react';
import CardGame from '../Compenent/CardGame';

export const ThemeCard = createContext();


function Game(){
    const [theme, SetTheme] = useState("Classic");
  
    function ChangeTheme(event) {
      SetTheme(event.target.value);
    }
    
    return(
      <>
        <ThemeCard.Provider value={{ theme, ChangeTheme }}>
          <CardGame />
        </ThemeCard.Provider>
      </>
    )
  }

export default Game;