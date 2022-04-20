import s from './Hero.module.css';
import images from '../../images/hero/index';
import Button from '../../UI/Button.js'
import Media from 'react-media';
import ellipse from '../../images/mobile/ellipse.png';
const {
    cylinder,
    goToMarket,
    leftEllipse,
    lightBlueSphere,
    pinkCylinder,
    purpleSphere,
    rightBlueWave,
    rightEllipse,
    rightWave } = images;
const Hero = () => {
    return (
        <div className={s.hero}>
            <img
                src={lightBlueSphere}
                alt='sphere'
                className={s.leftLightBlueSphere}
            />
            <img
                src={leftEllipse}
                alt='ellipse'
                className={s.leftEllipse}
            />
            <img
                src={rightWave}
                alt='wave'
                className={s.leftWave}
            />
            <img
                src={cylinder}
                alt='cylinder'
                className={s.cylinder}
            />
            <img
                src={goToMarket}
                alt='goToMarket'
                className={s.goToMarket}
            />
            <img
                src={rightBlueWave}
                alt='wave'
                className={s.rightBlueWave}
            />
            <img
                src={rightWave}
                alt='wave'
                className={s.rightWave}
            />
            <img
                src={lightBlueSphere}
                alt='sphere'
                className={s.rightLightBlueSphere}
            />
            <img
                src={purpleSphere}
                alt='sphere'
                className={s.purpleSphere}
            />
            <img
                src={pinkCylinder}
                alt='cylinder'
                className={s.pinkCylinder}
            />
            <img
                src={rightEllipse}
                alt='ellipse'
                className={s.rightEllipse}
            />
            <Media query="(max-width: 767.5px)" render={() => (
                <>
                    <img
                        src={rightWave}
                        alt='wave'
                        className={s.rightWave_big}
                    />
                    <img
                        src={ellipse}
                        alt='ellpise'
                        className={s.ellipse}
                    />
                </>
            )} />
            <div className={s.hero_content}>
                <h1 className={s.hero_heading}>
                    Разработка<br />
                    интернет-магазина <br />
                    с нуля за неделю</h1>
                <p className={s.hero_description}>
                    Дизайн интернет магазина, элементов микро UX,<br />
                    корзин, личного кабинета - от фирменного стиля <br />
                    до пользовательского интерфейса в сжатые сроки <br />
                    с командой Virtual Designers
                </p>
                <Button buttonText={'ЗАКАЗАТЬ'}
                    className={s.hero_button}
                />
            </div>
        </div>
    )
}
export default Hero;