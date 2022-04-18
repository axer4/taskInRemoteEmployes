import s from './contactForm.module.css';
import images from '../../images/contactForm';
import Button from '../../UI/Button'
const {phone,purpleWave,whiteSphere} = images;
const ContactForm = () => {
    return (
        <div className={s.container}>
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