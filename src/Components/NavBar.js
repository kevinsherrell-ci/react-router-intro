import {Link} from 'react-router-dom';


export default function NavBar() {
    return (
        <div className={'nav-bar'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}