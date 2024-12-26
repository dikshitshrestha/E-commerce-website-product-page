import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return(
        <nav className='flex bg-slate-950 items-center justify-evenly h-16 fixed w-full'>
            <a href="#"><img src={logo} alt="Logo" className='h-9'/></a>
            <a href="#" className='text-white text-xl'><b>Products</b></a>
            <a href="#" className='text-white text-xl'><b>Cart</b><FontAwesomeIcon icon={faCartShopping} size="base" className='ml-2'/></a>
            <a href="#" className='text-white text-xl'><b>Wishlist</b><FontAwesomeIcon icon={faClipboardList} size="base" className='ml-2'/></a>
            <a href="#" className='text-white text-xl'><b>Profile</b><FontAwesomeIcon icon={faUser} size="base" className='ml-2'/></a>
            <div className='flex justify-center items-center'>
                <input type="text" className='outline-none text-center p-1' placeholder='Search for product'/>
                <button className='bg-white w-7 h-8'><FontAwesomeIcon icon={faMagnifyingGlass} size="base" className='ml-1 text-black'/></button>
            </div>
        </nav>
    );
}