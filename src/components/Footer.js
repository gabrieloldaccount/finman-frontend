import { Link } from 'react-router-dom'
import '../index.css'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p>Copyright &copy; 2021</p>
            <Link to='/about'>About</Link>
            <p></p>

        </footer>
    );
}

export default Footer
