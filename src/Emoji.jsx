import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Emoji(){
    function ChangeEmogi(){
        SetEmogi((newEmogi)=>[...newEmogi,{id:uuid(),emoji:randomEmoji()}]
        );
    }
    function randomEmoji(){
      const choices=["😎","🫣","🥺","😀","😏","🤣","😂","🫡","🧐","😤","😭","🤯","😨"]
      return choices[Math.floor(Math.random()*choices.length)];
    }
    function deleteEmoji(id){
      
      SetEmogi((prev)=> {return prev.filter(e=>e.id !==id)});
    }
    const ChangeHearts=()=>{
      SetEmogi((prev)=>{
        return prev.map((e)=>{return {...e,emoji:"💗"};}); 
      });
    };
    const [emogi,SetEmogi] = useState([{id:uuid(),emoji:randomEmoji()}]);
    return(
    <>
    {
      emogi.map((e)=>(<span key={e.id} onClick={()=>deleteEmoji(e.id)}>{e.emoji}</span>))
    }
    <button onClick={ChangeEmogi}>Add emogi</button>
    <button onClick={ChangeHearts}>Turn it a 💗</button>
    </>
  )
}