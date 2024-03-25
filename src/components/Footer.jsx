import linkedin from '../../public/images/linkedin.png'
import github from '../../public/images/github.png'
import email from '../../public/images/email.png'

export default function Footer() {
    return (
    <footer>
        <div className="footer-icon-container">
            <a href="https://www.linkedin.com/in/camillebagnani/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn logo" className="footer-icon"/>
            </a>
            <a href="https://github.com/camillebagnani" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub logo"  className="footer-icon"/>
            </a>
            <a href="mailto:camillebagnani@gmail.com">
            <img src={email} alt="email icon"  className="footer-icon"/>
            </a>
        </div>
    </footer>)
};