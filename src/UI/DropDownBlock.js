import s from './DropDownBlock.module.css';
import images from '../images';
const {arrowDown} = images;
const DropDownBlock = ({content,closeBlock,boolean,method}) => {
    const {title,description} = content
    return (
        <div className={s.dropDownBlock}>
            <div className={s.dropDownBlock_headingBlock}>
            <h3 className={s.dropDownBlock_heading}>{title}</h3>
            <button 
            className = {s.dropDownBlock_button}
            onClick = {() => closeBlock(boolean,method)}
            ><img 
            src={arrowDown} 
            alt='arrow'
            className={s.arrowDown}
            /></button>
            </div>
            <p className={s.drowDownBlock_description}>{description}</p>
        </div>
    )
}
export default DropDownBlock;