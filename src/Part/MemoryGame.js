import { useEffect, useState } from 'react';
import '../CSS/Memory.css'


function MemoryGame() {

    const [memory, SetMemory] = useState([]);
    const [input, SetInput] = useState([]);
    const [coup, SetCoup] = useState(0);
    const [theme, SetTheme] = useState(["", "", "", ""]);
    const [isDisabled, SetIsDisabled] = useState(false);

    useEffect(() =>{
        restart();
    }, []); 

    function restart() {
        let nb = Math.ceil(Math.random() * 4);
        SetMemory([nb]);
        SetInput([]);
        SetCoup(0);
        show([nb]);
    }

    function show(list) {
        SetIsDisabled(true);
        list.map((val, index)=>{
            setTimeout(()=>{
                const d = [...theme];
                d[val-1] = "Visible";
                SetTheme(d);
            }, index*1000 + 1000);

            setTimeout(()=>{
                const d = [...theme];
                d[val-1] = "";
                SetTheme(d);
            }, index*1000 + 1250);
        })

        setTimeout(()=>{
            SetIsDisabled(false);
        }, list.length*1000+1000)
        
    }
    

    
    
    return (
        <>
            <div className='controller'>
                <Boutton value="Carreau" restart={restart} coup={coup} SetCoup={SetCoup} isDisabled={isDisabled} className={theme[1]} memory={memory} SetMemory={SetMemory} input={input} SetInput={SetInput} show={show}/>
                <Boutton value="Pique" restart={restart} coup={coup} SetCoup={SetCoup} isDisabled={isDisabled} className={theme[0]} memory={memory} SetMemory={SetMemory} input={input} SetInput={SetInput} show={show}/>
                <Boutton value="Trefles" restart={restart} coup={coup} SetCoup={SetCoup} isDisabled={isDisabled} className={theme[2]} memory={memory} SetMemory={SetMemory} input={input} SetInput={SetInput} show={show}/>
                <Boutton value="Coeur" restart={restart} coup={coup} SetCoup={SetCoup} isDisabled={isDisabled} className={theme[3]} memory={memory} SetMemory={SetMemory} input={input} SetInput={SetInput} show={show}/>
                <Affichage coup={coup}/>
            </div>
        </>
    )
}


function Boutton(props) {

    const icon = {
        "Pique": "♠️",
        "Carreau": "♦️",
        "Trefles": "♣️",
        "Coeur": "♥️"
    }
    const nombre = {
        "Pique": 1,
        "Carreau": 2,
        "Trefles": 3,
        "Coeur": 4
    }

    function addGame() {
        let nb = Math.ceil(Math.random() * 4);
        props.SetMemory([...props.memory, nb]);
        props.SetCoup(props.coup+1)
        props.SetInput([]);
        props.show([...props.memory, nb]);
    }


    function verif(list) {
        for (let index = 0; index < list.length; index++) {
            if (list[index] !== props.memory[index]) return -1;
        }
        if (list.length !== props.memory.length) return 0;
        return 1;
    }

    function play() {
        let list = [...props.input, nombre[props.value]]
        props.SetInput(list);

        let etat = verif(list);
        if (etat === 0) {
            //Attend le prochain
        } else if (etat === -1) {
            //Mauvais
            props.restart();
        } else {
            //WIN
            addGame();
        }
    }

    return (
        <>
            <button disabled={props.isDisabled} className={'bout ' + props.value +' '+ props.className} onClick={play}>{icon[props.value]}</button>
        </>
    )
}

function Affichage(props) {

    const [topCoup, SetTopCoup] = useState(0);


    useEffect(() => {
        const savedTopCoup = localStorage.getItem("topCoup"); 
        if (savedTopCoup) {
            SetTopCoup(Number(savedTopCoup));
        }
    }, []);

    useEffect(()=>{
        if(props.coup > topCoup) {
            SetTopCoup(props.coup);
            localStorage.setItem("topCoup", props.coup);
        }
    },[props.coup])
    
    return (
        <div className='stat'>
            <p>Score = {props.coup}</p>
            <p>High Score = {topCoup}</p>
        </div>
    )
}

export default MemoryGame;