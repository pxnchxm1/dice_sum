import { useState } from "react";
import Dice from "./Dice.jsx";
import { getroll, sum } from "./utils";


export default function LuckyN({number=3,goal=15}){
    const [dice,setNumber]=useState(getroll(number));
    const winner = (sum(dice)===goal);
    const roll=()=> {setNumber(getroll(number))};

    return (
    <div>
        <h1 style={{color:'blueviolet',fontWeight:'bold'}}>Lucky {goal} 🎲</h1>
        <h4 style={{color:'blueviolet',fontWeight:'normal'}}>If the sum adds up to {goal}..You win!</h4>
        <Dice dice={dice}></Dice>
        <button onClick={roll}>Roll Again</button>
        {winner?<h3 style={{color:'blueviolet',fontWeight:'bold'}}>You Win</h3>:"  "}
    </div>);

}