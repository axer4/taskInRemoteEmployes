import Media from 'react-media';
import images from '../../images/moreInfo';
import Button from '../../UI/Button';
import s from './MoreInfo.module.css';
const {
  lightBlueSphere,
  clocks,
  pinkCylinder,
  pinkSphere,
  purpleWave,
  taper,
  order
} = images;
const MoreInfo = () => {
  return (
    <div className={s.container}>
      <section className={s.moreInfo}>
        <Media query="(max-width:767.5px)" render={() => (
          <h2 className={s.moreInfo_heading}>Необходимо больше информации?</h2>
        )} />
        <div className={s.moreInfo_text}>
          <Media query="(min-width:768px)" render={() => (
            <h2 className={s.moreInfo_heading}>Необходимо больше информации?</h2>
          )} />
          <p className={s.moreInfo_description}>Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект.</p>
          <Button
            buttonText={'Оставить заявку'}
            className={s.moreInfo_button}
          />
        </div>
        <div className={s.moreInfo_images}>
          <img
            src={lightBlueSphere}
            alt='ligth-blue-sphere'
            className={s.lightBlueSphere_big}
            width='59px'
            height='58px'
          />
          <img
            src={clocks}
            alt='clocks'
            className={s.clocks}
            width='129px'
            height='137px'
          />
          <img
            src={pinkCylinder}
            alt='pink-cylinder'
            className={s.pinkCylinder}
            width='254px'
            height='135px'
          />
          <img
            src={pinkSphere}
            alt='pink-sphere'
            className={s.pinkSphere}
            width='50.5px'
            height='50.5px'
          />
          <img
            src={purpleWave}
            alt='purple-wave'
            className={s.purpleWave}
            width='171.5px'
            height='83.5px'
          />
          <img
            src={taper}
            alt='taper'
            className={s.taper}
            width='71px'
            height='78px'
          />
          <img
            src={order}
            alt='order'
            className={s.order}
            width='411.5px'
            height='381.5px'
          />
          <img
            src={lightBlueSphere}
            alt='ligth-blue-sphere'
            className={s.lightBlueSphere_small}
            width='24px'
            height='24px'
          />
        </div>
      </section>
    </div>

  )
}
export default MoreInfo;