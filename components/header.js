import Link from 'next/link';
import { HiTruck } from 'react-icons/hi'

const Header = () => {
    return (
        <header>
            <div>
                <HiTruck />
            </div>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/burgers'>Burgers</Link>
                <Link href='/review'>Review</Link>
                <Link href='/trucks'>Trucks</Link>
            </nav>
        </header>
    )
}

export default Header;