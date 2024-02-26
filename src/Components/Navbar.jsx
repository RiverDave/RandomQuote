import '../Navbar.css'
import appLogo from '../assets/logo.jpeg'
import appText from '../assets/randFontsText.png'

export function Navbar(){


    //TODO:
    return (

        <div className='navbar-content'>
        <nav>

            <ul>
                <li>
                <a href=""></a>
                <img className='app-logo' src={appLogo} alt="randomQuotes ai generated logo" />
                </li>
            </ul>

            <div>
                <img className='app-text' src={appText} alt="randomQuotes ai text logo" />
            </div>


        </nav>
        </div>
        
    )
    
}