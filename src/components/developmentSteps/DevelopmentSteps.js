import s from './DevelopmentSteps.module.css';
import images from '../../images';
const {whiteSphere} = images;
const DevelopmentSteps = () => {
    return (
        <div className={s.developmentSteps}>
     <h1 className={s.developmentSteps_heading}>Этапы разработки интернет-магазина</h1>
     <img 
     src={whiteSphere}
     alt='sphere'
     className={s.whiteSphere}
     />
     <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
</div>
        </div>
    )
}
export default DevelopmentSteps;