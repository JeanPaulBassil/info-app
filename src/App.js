import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import React from 'react';
import "./App.css"

export default function App(){
    const [mode, setMode] = React.useState(false);

    function handleClick(){
        console.log("changed");
        setMode( mode => !mode);
    }
    
    return (
        <div className={`app ${mode ? "darkApp": "lightApp"}`}>
            <Navbar mode={mode} click={handleClick}/>
            <Main/>
        </div>  
    )
}