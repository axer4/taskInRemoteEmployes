import images from '../../images/index';
import s from './Logo.module.css';
const {logo} = images;
const Logo = () => {
    return (
        <img 
        src={logo} 
        alt='logo'
        className={s.logo}
        />
    )
}
export default Logo;