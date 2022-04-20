import s from './contactForm.module.css';
import images from '../../images/contactForm';
import Button from '../../UI/Button';
import lightBlueSphere from '../../images/mobile/lightBlueSphere.png';
import mobile from '../../images/mobile/mobile.png';
import purpleSphere from '../../images/mobile/purpleSphere.png';
import mobilePhone from '../../images/mobile/mobilePhone.png';
import Media from 'react-media';
const { phone, purpleWave, whiteSphere } = images;
const ContactForm = () => {
    return (
        <div className={s.container}>
            <Media query="(max-width:767.5px)" render={() => (
                <>
                    <img
                        src={mobile}
                        alt='mobile'
                        className={s.mobile}
                    />
                    <img
                        src={lightBlueSphere}
                        alt='lightBlueSphere'
                        className={s.lightBlueSphere}
                    />
                    <img
                        src={purpleSphere}
                        alt='purpleSphere'
                        className={s.purpleSphere}
                    />
                    <img
                        src={mobilePhone}
                        alt='mobilePhone'
                        className={s.mobilePhone}
                    />
                </>
            )} />
            <img
                src={phone}
                alt='phone'
                className={s.contactForm_phone}
            />
            <img
                src={purpleWave}
                alt='purpleWave'
                className={s.contactForm_purpleWave}
            />
            <img
                src={whiteSphere}
                alt='whiteSphere'
                className={s.contactForm_whiteSphere}
            />
            <section className={s.contactForm}>
                <div className={s.contactForm_centerBlock}>
                    <h2 className={s.form_heading}>Обсудить проект</h2>
                    <p className={s.form_description}>Расскажите о своих бизнес-целях и мы поможем вам в их достижении</p>
                    <form
                        className={s.form}
                    >
                        <input
                            placeholder='Имя'
                            className={s.form_input}
                            type='text'
                        />
                        <input
                            placeholder='Telegram/viber'
                            className={s.form_input}
                            type='tel'
                        />
                        <input
                            placeholder='Email'
                            className={s.form_input}
                            type='email'
                        />
                        <Button
                            buttonText={'Отправить'}
                            className={s.contactForm_button}
                        />
                    </form>
                </div>
            </section>
        </div>
    )
}
export default ContactForm;