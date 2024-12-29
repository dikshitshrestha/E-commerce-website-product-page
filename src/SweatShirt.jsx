import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faFacebook, faInstagram, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SweatShirt() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(index){
        setActiveButton(activeButton === index ? null : index);
    }
    function handleRefresh(event){
        event.preventDefault();
    }
    return(
        <div className='h-full bg-black'>
            <nav className='flex bg-slate-950 items-center justify-evenly h-16 w-full'>
            <Link to="/"><img src={logo} alt="Logo" className='h-9'/></Link>
                        <a href="#" className='text-white text-xl hover:text-slate-400'><b>Products</b></a>
                        <a href="#" className='text-white text-xl hover:text-slate-400'><b>Cart</b><FontAwesomeIcon icon={faCartShopping} size="sm" className='ml-2'/></a>
                        <a href="#" className='text-white text-xl hover:text-slate-400'><b>Wishlist</b><FontAwesomeIcon icon={faClipboardList} size="sm" className='ml-2'/></a>
                        <a href="#" className='text-white text-xl hover:text-slate-400'><b>Profile</b><FontAwesomeIcon icon={faUser} size="sm" className='ml-2'/></a>
                    <div className='flex justify-center items-center'>
                        <input type="text" className='outline-none text-center p-1 rounded-l-lg' placeholder='Search for product'/>
                        <button className='bg-white w-9 h-8 rounded-r-lg'><FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className='ml-1 text-black'/></button>
                    </div>
            </nav>
            <div className='h-screen bg-white p-16 pr-0 flex'>
                <div className='flex justify-center w-3/6'>
                    <img src="https://i.pinimg.com/736x/54/73/a8/5473a8a512aac6accf0be09228b49e70.jpg" alt="hoodie" className='h-96 w-64'/>
                    <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F07%2F16078dd12ba9d2acccc4662341cf2b50e2a75ae5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="hoodie" className='h-96 w-64'/>
                    <img src= "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30154366/2024/7/8/667dcfc2-5891-4c27-a07f-39334a166b3c1720455396532HMLoose-FitHoodieSweatshirts1.jpg" alt="hoodie" className='h-96 w-68'/>
                </div>
                <div className=' w-3/6 text-center bg-white p-5'>
                    <h1 className='text-4xl'><b>Stylish Sweat-shirt For Men</b></h1>
                    <p className='mt-5 text-2xl text-green-900'><b>Choose your size:</b></p>
                    <div className='mt-3'>
                        {["S","M","L","XL","XXL","XXL"].map((label,index)=>(<button className='mr-4 h-14 w-14 border-2 rounded-full text-xl' onClick={()=>handleClick(index)} style={{backgroundColor: activeButton=== index ? 'red':'white'}}>
                            {label}
                        </button>))}
                    </div>
                    <p className='text-2xl mt-5 text-red-900'><b>Price: Rs 1500</b></p>
                    <div className='mt-5'>
                        <button className='mr-8 text-xl border-2 h-12 w-48 text-white bg-slate-800 rounded-lg hover:bg-slate-950'>Add to Cart<FontAwesomeIcon icon={faCartShopping} size="sm" className='ml-2'/></button>
                        <button className='text-xl border-2 h-12 w-48 text-white bg-slate-800 rounded-lg hover:bg-slate-950'>Add to Wishlist<FontAwesomeIcon icon={faClipboardList} size="sm" className='ml-2'/></button>
                    </div>
                    <h1 className='text-xl mt-8 text-black text-justify'><b>Description:</b></h1>
                    <p className='text-xl mt-1 text-black text-justify'>The Inside Out Sweat-shirt redefines casual wear with its effortlessly stylish design and premium comfort. Crafted with meticulous attention to detail, this hoodie combines a modern aesthetic with a unique inside-out stitching pattern that sets it apart from the ordinary. Perfect for any occasion, it's made from high-quality, breathable fabric that ensures a cozy fit while making a bold fashion statement. Elevate your wardrobe with this trendy yet versatile piece, designed for those who dare to be different.</p>
                </div>
            </div>
            <div className='flex bg-slate-950 items-center justify-evenly h-16 w-full text-white'>
                <div className='text-center'>
                    <h1>KEEP IN TOUCH</h1>
                        <div>
                            <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                            <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
                            <a href="#" className='text-xl' onClick={handleRefresh}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                        </div>
                </div>
                    <div className='text-center'>
                        <h1>PAYMENT METHOD</h1>
                            <div>
                                <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faPaypal} size="lg"/></a>
                                <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faCcVisa} size="lg"/></a>
                                <a href="#" className='text-xl' onClick={handleRefresh}><FontAwesomeIcon icon={faCreditCard} size="lg"/></a>
                            </div>
                    </div>
            </div>
        </div>
    );
}