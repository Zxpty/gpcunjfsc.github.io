import { Link } from 'react-router-dom';
export default function NavLInks() {
    return (
        <>
            <Link to='/' >Inicio</Link>
            <Link to='/about' >Nosotros</Link>
            <Link to='/blog' >Blog</Link>
            <Link to='/preparation' >Recursos</Link>
            <Link to='/calendar' >Calendario</Link>
        </>
    )
}