import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../contexts/theme";
function App() {
   const [themeMode, setThemeMode] = useState('light');

   const lightTheme = () => {
      setThemeMode('light');
   }
   const darkTheme = () => {
      setThemeMode('dark');
   }
   useEffect(() => {
      document.querySelector('html').classList.remove("dark", "light");
      document.querySelector('html').classList.add(themeMode);
   }, [themeMode]);
   return (
      <ThemeProvider value={{ themeMode, setThemeMode, darkTheme }}>
         <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  
               </div>
               <div className="w-full max-w-sm mx-auto">
                  <p></p>
               </div>
            </div>
         </div>
      </ThemeProvider>
   );
}
export default App;