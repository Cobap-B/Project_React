import { useEffect} from 'react';
import Compteur from '../Compenent/Compteur';

function Test() {
  return (
    <>
      <BasiqueText txt="Je suis étudiant en 2 ème année" />
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
    useEffect(() => {
      console.log("Echo à la création")
    }, [])
  
    useEffect(() => {
      console.log("Echo à chaque update")
    })
  
    return <></>
  }
  

export default Test;