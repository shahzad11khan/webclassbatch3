import {Link} from 'react-router-dom'
export const Header = () =>{
    return(
        <div className="flex px-10 bg-slate-200 py-4 justify-between">
        <div>Logo</div>
        <div>
            <ul className="flex gap-4">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
        </div>
        </div>
    );
}
