import { useState } from "react";
import './score.css';
export default function Score({num=10,target=5}){
    const [score,setscore]=useState(new Array(num).fill(0));
    function addscore(idx){
        setscore((prev)=>{
            return prev.map((score,i)=>{
                if(i===idx) return score+1;
                return score;
            })
        })
    }

    function reset(){
        setscore(new Array(num).fill(0));
    }
    return(
        <div>
            <h1>Score Keeper</h1>
            <ul className="list">
                {score.map((score,idx)=>
                    {return <li key={idx}>
                        Player {idx+1} :   {score}
                        <button onClick={()=>addscore(idx)}>+1</button>
                        {(score>target)&&"Winner"}
                        </li>}
                )}
                <button onClick={reset}>RESET </button>
            </ul>
        </div>
    );

}