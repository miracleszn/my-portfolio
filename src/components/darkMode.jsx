import { Moon, Sun } from "lucide-react"
import { React, useEffect, useState } from 'react'

const DarkMode = () => {

const [ theme, setTheme ] = useState('light');

const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme)
};

useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle(
        "dark",
         storedTheme === "dark");

}, [])

  return (
    <button onClick={toggleTheme}>{theme === 'light' ? <Moon size={28} color="#262626"/> : <Sun size={28}/>}</button>
  )
}

export default DarkMode