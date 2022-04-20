import s from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Media from 'react-media';
import MobileMenu from '../mobileNavigations/MobileMenu';
const Header = () => {
    return (
        <div className={s.container}>
            <Logo className={s.logo} />
            <Media query="(min-width:767.8px)" render={() => (
                <Navigation />
            )} />
            <Media query="(max-width:767.5px)" render={() => (
                <MobileMenu />
            )} />
        </div>
    )
}
export default Header;