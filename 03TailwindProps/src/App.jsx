
import './App.css'
import Card from "./components/Card"

function App() {

  let myObj = {
    username: "RajDholakiya",
    networth: "200000000000000000000 dollar from raj dholakiya"
  }

  return (
    <>
      <h1 className='bg-green-900 text-white text-6xl p-6 rounded-full mb-6'>Tailwind test</h1>

      <Card name="AnshDholakiya" anotherObj={myObj} myArr={[1, 2, 3, 4, 5]} btnText="click me" />

      {/* here {} for varible anything can pass array also  */}



      <Card name="RajDholakiya" />
    </>
  )
}

export default App
