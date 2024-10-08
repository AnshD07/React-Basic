import { useState } from 'react' 
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  /*
  ! The first value, counter, is our current state.
  ! The second value, setCounter, is the function that is used to update our state.
  */

  // let counter = 5

  let addvalue = () => {
    // console.log(counter);
    if (counter >= 20) {
      return;
    }
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((counter) => counter + 1)   
    //todo=>  we can set anything here counter and prevcounter is scop varible set take callback
    setCounter((prevCounter) => prevCounter + 1) 
    setCounter((prevCounter) => prevCounter + 1) 
    // setCounter(++counter) //! both are different
  }

  let decreaseValue = () => {
    // if (counter == 0) {
    //   return;
    // }
    // setCounter(counter - 1)
    // setCounter(--counter) // ! both are different

    setCounter((prev) => {
      if(prev>0){
        return prev - 1
      }
      return 0
    })
  }

  return (
    <>
      <h1>Chai Aur React      {counter}</h1>
      <h2>Counter value :  {counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button><br />
      <button onClick={decreaseValue}>Decrease value   {counter}</button>

      <h2>
        what i Learn today ?
      </h2>
      <p>
        why we use hook in react because if i need to update varible that i can do but when i want to update in ui like 10 position i need to update the value of notification so there react use
      </p>
      <p>
        hook or react interaction with UI (user interface ) bro so our work get easier

      </p>
      <h2>
        threw hooks we can update data of UI in react that have some methods
      </h2>
    </>
  )
}

export default App
