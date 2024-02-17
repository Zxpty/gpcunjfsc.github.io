import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import logoUNJFS from './assets/images/logounjfsc.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';

export default function Header() {
    const [openNav, setOpenNav] = useState(false)
    useEffect(() => {

    }, [openNav])
    const toggleNav = () => {
        setOpenNav(!openNav);
    };
    return (
        <header className='flex w-full text-sm justify-between items-center py-5 mx-auto sm:px-6 max-w-screen-2xl'>

            <div className='flex items-center justify-center'>
                {/* <img className='w-12 h-12' src={logoUNJFS} alt='Logo' /> */}
                <span className='font-bold max-md:hidden'>UJFSC Coding</span>
                <RxHamburgerMenu onClick={toggleNav} className='w-4 h-4 hidden max-md:block cursor-pointer' />
            </div>
            <nav className='flex flex-row gap-x-10 opacity-80 items-center'>
                <div className='flex flex-row gap-x-10 opacity-80 items-center max-md:hidden'>
                    <Link to='/' >Inicio</Link>
                    <Link to='/about' >Nosotros</Link>
                    <Link to='/blog' >Blog</Link>
                    <Link to='/preparation' >Recursos</Link>
                    <Link to='/calendar' >Calendario</Link>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <a href='https://github.com'>
                        <FaGithub className='w-4 h-4' />
                    </a>
                </div>
            </nav>
        </header>
    );
}
