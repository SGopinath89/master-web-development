import {animals} from "./AnimalsDb";
import '../assets/css/game.css'
import {useState} from "react";

export default function Game(){
    const getRandomName=animals[Math.floor(Math.random() * 16) + 1].name;
    const [status,setStatus]=useState('');
    function onGameClick(e){
        ( e.target.name === getRandomName)? setStatus('WIN'):setStatus('LOSE')
     }
    return(
        <>
            <div className="item1">
                <h1>ANIMAL MATCHING GAME</h1>
            </div>
            <div className="item2">
                <h3>Result</h3>
                <h5 className="animal-name">{status}</h5>
            </div>
            <div className="item3">
                <h3>Animal Name</h3>
                <h5 className="animal-name">{getRandomName}</h5>
            </div>
            <div className="item4">
                <h3>Select the Animal</h3>
                <div className="grid-container">
                    {
                        animals.map(animal=>
                            <div className="grid-item">
                                <img className="animal-img" src={require('../assets/img/'+animal.img)} alt={animal.name} name={animal.name} onClick={onGameClick}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}