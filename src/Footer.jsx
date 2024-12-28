import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faFacebook, faInstagram, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    function handleRefresh(event){
        event.preventDefault();
    }
    return(
        <div className='flex bg-slate-950 items-center justify-evenly h-16 w-full text-white'>
            <div className='text-center'>
                <h1>KEEP IN TOUCH</h1>
                <div>
                    <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#" className='text-xl' onClick={handleRefresh}><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
            </div>
            <div className='text-center'>
            <h1>PAYMENT METHOD</h1>
                <div>
                    <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faPaypal}/></a>
                    <a href="#" className='text-xl mr-5' onClick={handleRefresh}><FontAwesomeIcon icon={faCcVisa}/></a>
                    <a href="#" className='text-xl' onClick={handleRefresh}><FontAwesomeIcon icon={faCreditCard}/></a>
                </div>
            </div>
        </div>
    )
}