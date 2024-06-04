
import './App.css';
import Counter from './Counter';
import LuckyN from './LuckyN';
Counter
export default function App() {
  const col=["orange","pink","green","yellow","red","brown"];
  return (
    <div >
    {/* <Counter></Counter>
    <Emoji></Emoji> */}
    {/* <Score num={6} target={5}></Score> */}
    <LuckyN number={4} goal={16}/>
    </div>
  )
}
