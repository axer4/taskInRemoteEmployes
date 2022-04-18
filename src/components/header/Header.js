import s from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
const Header = () => {
    return (
        <div className={s.container}>
            <Logo className={s.logo}/>
            <Navigation/>
        </div>
    )
}
export default Header;