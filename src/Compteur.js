import { useState } from 'react';


function Compteur() {
  //Bien sur un compteur pour un test c'est toujours bien
  const [num, SetNum] = useState(0);

  //Fonction en minuscule et compenant en maj
  function add() {
    SetNum(num + 1);
  }
  return (
    <>
      <button onClick={() => SetNum(num - 1)}>-</button>
      {num}
      <button onClick={add}>+</button>
    </>
  )

}

export default Compteur;