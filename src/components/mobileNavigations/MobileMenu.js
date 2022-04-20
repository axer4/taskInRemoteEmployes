import s from './mobileMenu.module.css';
import menu from '../../images/mobile/menu.png';
import { useState } from 'react';
const MobileMenu = () => {
    const [isOpen, setMode] = useState(false);
    const toogleMode = () => {
        setMode(!isOpen);
    }
    return (
        <>
            <div
                className={s.openMenu}
                onClick={toogleMode}
            >
                <img
                    src={menu}
                    alt='menu'
                    className={s.ellipse_menu}
                />
                <img
                    src={menu}
                    alt='menu'
                    className={s.ellipse_menu}
                />
                <img
                    src={menu}
                    alt='menu'
                    className={s.ellipse_menu}
                />
            </div>
            {isOpen &&

                <div className={s.navigation}>
                    <div className={s.overlay}>
                        <span
                            className={s.closeMenu}
                            onClick={toogleMode}
                        >Close</span>
                        <ul className={s.list}>
                            <li className={s.item}>Услуги</li>
                            <li className={s.item}>Портфолио</li>
                            <li className={s.item}>Этапы</li>
                            <li className={s.item}>Дизайнеры</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
export default MobileMenu;