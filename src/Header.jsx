
import { FaGithub } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import NavLInks from './Components/NavLinks';

export default function Header() {
    const [openNav, setOpenNav] = useState(false)

    const toggleNav = () => {
        setOpenNav(!openNav);
    };
    return (
        <header className='flex w-full text-sm justify-between items-center py-5 mx-auto sm:px-6 max-w-screen-2xl'>
            <div className='flex items-center justify-center'>
                {/* <img className='w-12 h-12' src={logoUNJFS} alt='Logo' /> */}
                <span className='font-bold max-md:hidden text-white'>GPC UNJFSC</span>
                <button onClick={toggleNav}><RxHamburgerMenu className='w-4 h-4 hidden max-md:block cursor-pointer' /></button>
            </div>
            <nav id='navBar' className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto  md:pl-0  transition-all duration-500 ease-in ${openNav ? 'top-12' : 'top-[-490px]'}`}>
                <div className='flex flex-row gap-x-10 opacity-80 items-center max-md:flex-col py-2'>
                    <NavLInks />
                </div>
            </nav>
            <div className='flex flex-row gap-2 items-center justify-center text-white'>
                <a href='https://github.com/gpcunjfsc/gpcunjfsc.github.io'>
                    <FaGithub className='w-4 h-4' />
                </a>
            </div>
        </header>
    );
}
