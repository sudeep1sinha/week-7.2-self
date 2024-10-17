import { useState } from 'react'

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecoilRoot>
     <Count />
     </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
} 

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even " : null}
  </div>
}

function Buttons() {
  const [count , setCount]=useRecoilState(countAtom)

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
