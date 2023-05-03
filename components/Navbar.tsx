
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

interface Props {
    image: string,
    
}

const Navbar = () => {
  return (
    <nav>
        <div>
            <div className='nav__container'>
                <Link href="/">
                    <div className='nav__logo'>
                        <Image src="/logo.jpg" width={60} height={60} alt='logo'/>
                        <h1>AMOPTECH</h1>
                    </div>
                </Link>
                
                <div className='search__bar'>
                    <input type="search" placeholder='Start typing'/>
                </div>
                <div className="right__nav">
                    <button>Login</button>
                </div>
            </div>
            <NavLinks />
        </div>
    </nav>
  )
}

export default Navbar