import { useState } from 'react';


function Compteur() {
  //Bien sur un compteur pour un test c'est toujours bien
  const [num, SetNum] = useState(0);

  //Fonction en minuscule et compenant en maj
  function add() {
    SetNum(num + 1);
  }
  return (
    <div>
      <button className='btn' onClick={() => SetNum(num - 1)}>-</button>
      <p className='compteur'>{num}</p>
      <button className='btn' onClick={add}>+</button>
    </div>
  )

}

export default Compteur;