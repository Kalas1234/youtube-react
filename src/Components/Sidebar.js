import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    const isMenuOpen = useSelector(store => store?.app?.isMenuOpen)

    return !isMenuOpen ? null : (  //conditional rendering
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li>shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Akshay saini</li>
                <li>Tmkoc</li>
                <li>Tech Viser</li>
                <li>SonyLiv</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Tmkoc</li>
                <li>Cricket</li>
                <li>CID</li>
                <li>SonyLiv</li>
            </ul>
        </div>
    )
}

export default Sidebar;