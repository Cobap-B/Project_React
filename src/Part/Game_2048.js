
import { useState, useEffect } from 'react';
import '../CSS/Game_2048.css'

function Game_2048(){

    const [table, SetTable] = useState([
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);

    function add(){
        const newTable = [...table];

        let posibility = [];
        table.map((value, iX)=>{
            value.map((val, iY)=>{
                if (val===null) posibility.push([iX, iY]);
            })
        })
        console.log(posibility);

        if (posibility.length>0){
            let cas = Math.round(Math.random() * (posibility.length-1));

            newTable[posibility[cas][0]][posibility[cas][1]] = 2;

            SetTable(newTable);
        }
    }

    const handleKeyPress = (event) => {
        if (event.code === "Space") { // Vérifie si la touche pressée est "Espace"
            add();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress); // pour le détruire
        };
    }, []);

    return (
        <div className='controller'>
            {table.map((value, iX)=>{
                return value.map((val, iY)=>{
                    if (val!==null){
                        return <Number key={iX+iY} val={val} iX={iX} iY={iY} />
                    }
                })
            })}
        </div>
    )
}



function Number(props){
    const style = {
        gridColumn: props.iX+1,
        gridRow: props.iY+1,
        backgroundColor: "red",
        color: "black"  
    };

    if (props.val%4===0){
        style.backgroundColor = "black";
        style.color="white" ;       
    }

    return (
        <>
            <p style={style} >{props.val}</p>
        </>
    )

}




export default Game_2048;