import '../Footer.css'
import gitHubMark from '../assets/github-mark-white.png'
import inWhite from '../assets/in-white.png'

export function Footer() {

    return (
        <div className='footer-content'>
            <footer>
            <ul>
                    <li>
                    <a href='https://github.com/RiverDave/RandomQuote'>
                    <img className='github-icon' src={gitHubMark} alt='Github-icon-src-code' />
                    </a>
                    </li>



                    <li>
                    <a href='https://www.linkedin.com/in/david-rivera-54a57a269/'>
                    <img className='in-icon' src={inWhite} alt='personal-linkedin-profile' />
                    </a>
                    </li>
            </ul>

            
            </footer>
        </div>

            
    )
}