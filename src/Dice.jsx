import Die from "./die"
export default function Dice({dice,c}){
    return (
        <section className="Dice">
            {
                dice.map((val,i)=> {return <Die key={i} val={val} col={c}></Die>})
            }

        </section>
    )

}