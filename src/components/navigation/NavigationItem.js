import s from './NavigationItem.module.css';
const NavigationItem = ({ contentText }) => {
    return (
        <>
            {contentText.map((el, index) =>
                <li
                    key={`${el}-${index}`}
                    className={s.navigation_item}
                ><a href={`#${el}`}>{el}</a></li>)}
        </>
    )
}
export default NavigationItem;