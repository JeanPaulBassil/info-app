import ReactLogo from '../../Photos/logo512.png';
import './Navbar.css';

export default function Navbar({mode, click}){
    
    
    
    return (
        <nav className={`container ${mode ? "darkNav" : "lightApp"}`}>
            <img src={ReactLogo} />
            <h3>ReactFacts</h3>
            <div className='on-off'>
                <p className={mode ? "light1" : "light2"}>light</p>
                <label className={`toggle ${mode ? "darkToggle" : "lightToggle"}`}>
                   
                    <div>
                        <input type="checkbox" onClick={click}/>
                        <div className="slider"></div>
                    </div>
                    
                </label>
            </div>
            <p className={mode ? "dark1" : "dark2"}>dark</p>
        </nav>
    )
}