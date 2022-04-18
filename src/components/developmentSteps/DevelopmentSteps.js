import s from './DevelopmentSteps.module.css';
import images from '../../images/developmentSteps/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../slider/Slider';
const {whiteSphere,rightBlueWave} = images;
const DevelopmentSteps = () => {
    return (
        <div className={s.developmentSteps}>
     <h1 className={s.developmentSteps_heading}>Этапы разработки интернет-магазина</h1>
     <img 
     src={whiteSphere}
     alt='sphere'
     className={s.whiteSphere}
     /> 
     <SimpleSlider/>
     <img 
     src={rightBlueWave}
     alt='wave'
     className={s.blueWave}
     />
        </div>
    )
}
export default DevelopmentSteps;