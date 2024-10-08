
import { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => { //! here we can have access of method so we can define functinality of method
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    let html = document.querySelector("html")
    html.classList.remove("dark", "light") //remove before adding
    html.classList.add(themeMode)

    console.log(html.classList)
  }, [themeMode])

  return (
    //! value nu acces bdha ne mlshe ThemeBtn and Card componenets ne pan Access mli jashe*/
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
