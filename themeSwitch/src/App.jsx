import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'
import { ThemeProvider } from './context/Theme.js'

function App() {
  
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () =>{
    setThemeMode('light')
  }

  const darkTheme = () =>{
    setThemeMode('dark');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
          {/* Cards */}
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
