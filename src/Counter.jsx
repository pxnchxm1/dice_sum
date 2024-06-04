import { useState } from "react";
export default function Counter(){
   function AddCount1(){
    SetCount((newcount)=>{
        return {...newcount,count1: newcount.count1+1};
    });   
    }
    function AddCount2(){
        SetCount((newcount2)=>{
            return {...newcount2,count2: newcount2.count2+1};
        });   
        }
    
    const [count,SetCount] = useState({count1:0,count2:0});
    return(
        <div>
            <h2> Count1 : {count.count1}</h2>
            <h2> Count2 : {count.count2}</h2>
            <button onClick={AddCount1}>+1</button>
            <button onClick={AddCount2}>+1</button>
        </div>
    )
}