import React , {useEffect , useState} from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [theme, setTheme] = useState('null')

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])
    
    useEffect(() => {
        if(theme === 'dark') 
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')
    }, [theme])

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (

            <button onClick={toggleDarkMode} className="dark:bg-white bg-black fixed z-50 block right-6 bottom-6 rounded-xl px-3 py-3 ">
                {theme === 'light' ? (
        <MdDarkMode className="w-6 h-6 text-gray-300" />
      ) : (
        <MdLightMode className="w-6 h-6 text-gray-600" />
      )}
            </button>

    )
}
export default DarkMode