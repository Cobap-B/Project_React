
import { useState, useEffect } from 'react';
import '../CSS/Game_2048.css'

function Game_2048(){

    const [table, SetTable] = useState(createTable());

    function createTable(){
        const tab = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ];

        for (let index = 0; index < Math.round(Math.random()+1); index++) {
            tab[Math.round(Math.random()*3)][Math.round(Math.random()*3)] = Math.round(Math.random()+1)*2;
        }

        return tab;
    }

    function add(newTable){

        let posibility = [];
        table.map((value, iX)=>{
            value.map((val, iY)=>{
                if (val===null) posibility.push([iX, iY]);
            })
        })
        if (posibility.length>0){
            let cas = Math.round(Math.random() * (posibility.length-1));

            let nb = Math.round(Math.random()+1)*2
            newTable[posibility[cas][0]][posibility[cas][1]] = nb;

            SetTable(newTable);
        }
    }

    function verif(newTable){
        //On ajoute en premier
        add(newTable);
    }
    function deplacer(row){
        let compact = row.filter((val)=>{
            return val !== null;
        })
        
        for (let index = 0; index < compact.length-1; index++) {
            if (compact[index] === compact[index + 1]) {
                compact[index] *= 2; 
                compact[index + 1] = null;
            }
        }

        compact = compact.filter((val)=>{
            return val !== null;
        })

        let res = [];
        for (let index = 0; index < 4; index++) {
            if(index<=compact.length-1){
                res[index]=compact[index];
            }else{
                res[index]=null;
            }
        }
        return res;      
    }


    function move(direction){
        const newTable = [...table];
        switch (direction) {
            case "ArrowLeft" || "Q":
                for (let index = 0; index < 4; index++) {
                    let col = newTable.map((c)=>{return c[index]});
                    col = deplacer(col);
                    col.forEach((val,r)=>{newTable[r][index]=val}); 
                }
                verif(newTable);
                break;
            case "ArrowRight" || "D":
                for (let index = 0; index < 4; index++) {
                    let col = newTable.map((c)=>{return c[index]});
                    col = deplacer(col.reverse()).reverse();
                    col.forEach((val,r)=>{newTable[r][index]=val}); 
                }
                verif(newTable);
                break;
            case "ArrowDown" || "S":
                for (let index = 0; index < 4; index++) {
                    let nt = deplacer(newTable[index].reverse()).reverse();
                    nt.forEach((val,r)=>{newTable[index][r]=val}); 
                }
                verif(newTable);
                break;
            case "ArrowUp" || "Z":
                for (let index = 0; index < 4; index++) {
                    let nt = deplacer(newTable[index]);
                    nt.forEach((val,r)=>{newTable[index][r]=val}); 
                }
                verif(newTable);
                break;
            default:
                break;
        }
        SetTable(newTable);
    }

    const handleKeyPress = (event) => {
        move(event.code);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress); // pour le détruire
        };
    }, []);

    return (
        <div className='controller2048'>
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
        backgroundColor: "#de0c0c",
        color: "black"  
    };
    if (Math.log2(props.val/2)%2===0){
        style.backgroundColor = "#000";
        style.color="white" ;       
    }

    return (
        <>
            <p style={style} >{props.val}</p>
        </>
    )

}




export default Game_2048;