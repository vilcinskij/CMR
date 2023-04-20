import { HiTruck } from 'react-icons/hi'

const Header = () => {
    return (
        <header>
            <div>
                <HiTruck />
            </div>
            <nav>
                <a>Home</a>
                <a>About</a>
                <a>Burgers</a>
                <a>Trucks</a>
            </nav>
        </header>
    )
}

export default Header;