import s from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
const Header = () => {
    return (
        <div className={s.container}>
            <Logo/>
            <Navigation/>
        </div>
    )
}
export default Header;