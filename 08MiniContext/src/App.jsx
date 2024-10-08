import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

//! 1. Create a Context
//! 2. Provide the Context to the component tree threw provider
//! 3. Consume the Context in the components that need the data

//todo=>  for learning what is happing ===> https://chatgpt.com/share/82096baf-532e-4b08-9c98-211b84775ba1



function App() {
  return (
    <UserContextProvider  > //! work like wrapper

      <h1>React with AnshDholakiya</h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
