import { Link } from 'react-router-dom';
export default function NavLInks() {
    return (
        <>
            <Link className='max-md:hover:border-b-2 max-md:hover:border-blue-500 text-white' to='/' >Inicio</Link>
            <Link className='max-md:hover:border-b-2 max-md:hover:border-blue-500 text-white' to='/about' >Nosotros</Link>
            <Link className='max-md:hover:border-b-2 max-md:hover:border-blue-500 text-white' to='/blog' >Blog</Link>
            <Link className='max-md:hover:border-b-2 max-md:hover:border-blue-500 text-white' to='/preparation' >Recursos</Link>
            <Link className='max-md:hover:border-b-2 max-md:hover:border-blue-500 text-white' to='/calendar' >Calendario</Link>
        </>
    )
}