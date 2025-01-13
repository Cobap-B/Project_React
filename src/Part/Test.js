import { useEffect, useState } from 'react';
import Compteur from '../Compenent/Compteur';

function Test() {

  return (
    <>
      <BasiqueText txt="Ca marche : ♥️ ♦️ ♣️ ♠️" />
      <Compteur /><br />
      <TestEffect />


    </>
  )
}



function BasiqueText(props) {
  return (
    <>
      <p>{props.txt}</p>
    </>
  )
}



function TestEffect() {

  const [joke, SetJoke] = useState({});

  function generate() {

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => SetJoke(data));

  }


  useEffect(() => {
    generate();
  }, [])

  useEffect(() => {
    console.log("Echo à chaque update")
  })

  return (<div className='joke'>
    <h1>{joke.setup}</h1>
    <h2>{joke.punchline}</h2>
    <button className='btn' onClick={generate}>Generate JOKE</button>
  </div>)
}


export default Test;