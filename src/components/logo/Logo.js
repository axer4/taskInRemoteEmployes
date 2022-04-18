import images from '../../images/header/index';
import s from './Logo.module.css';
const {logo} = images;
const Logo = ({className}) => {
    return (
        <img 
        src={logo} 
        alt='logo'
        className={className}
        />
    )
}
export default Logo;