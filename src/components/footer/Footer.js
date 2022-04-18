import s from './Footer.module.css';
import images from '../../images/footer';
import Logo from '../logo/Logo';
const {
    facebook,
    viber,
    whatsApp,
    instagram,
    telegram
} = images;
const Footer = () => {
    return (
          <div className={s.container}>
              <footer className={s.footer}>
                  <div className={s.footer_flexBox}>
                <div>
            <div><Logo className={s.footer_logo}/></div>
            <div>
                <ul className={s.social_list}>
                    <li className={s.item}>
                        <img
                        src={instagram}
                        alt='instagram'
                        className={s.social_icon}
                        />
                    </li>
                    <li className={s.item}>
                        <img
                        src={facebook}
                        alt='facebook'
                        className={s.social_icon}
                        />
                    </li>
                    <li className={s.item}>
                        <img
                        src={telegram}
                        alt='telegram'
                        className={s.social_icon}
                        />
                    </li>
                    <li className={s.item}>
                        <img
                        src={viber}
                        alt='viber'
                        className={s.social_icon}
                        />
                    </li>
                    <li className={s.item}>
                        <img
                        src={whatsApp}
                        alt='whatsApp'
                        className={s.social_icon}
                        />
                    </li>
                </ul>
            </div>
             </div>
             <div className={s.contacts}>
                 <ul className={s.contacts_list}>
                     <li className={s.list_item}>
                         <img 
                         src={viber}
                         alt='viber'
                         className={s.contacts_icon}
                         />
                         Валерия: <a href='tel:+79805585949'>+79805585949</a> 
                     </li>
                     <li className={s.list_item}>
                         <img 
                         src={viber}
                         alt='viber'
                         className={s.contacts_icon}
                         />
                         Анна: <a href='tel:+79805585949'>+79805585949</a> 
                     </li>
                     <li className={s.list_item}>
                         <img 
                         src={viber}
                         alt='viber'
                         className={s.contacts_icon}
                         />
                         Валерия: <a href='tel:+79805585949'>+79805585949</a> 
                     </li>
                 </ul>
             </div>
             <a href='mailto:hr@dv-s.com'>hr@dv-s.com</a>
             </div>
             <p className={s.footer_license}>Developers 2018-2021 © All rights reserved</p>
              </footer>
          </div>
    )

}
export default Footer;