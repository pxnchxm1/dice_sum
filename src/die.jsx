import './Die.css';

export default function Die({val,col}){
    const values=["·","··","⁖","⁛"," ⁙","⁝ ⁝"];
    return <div className="Die" style={{color:col}}>
        {values[val-1]}
    </div>
}