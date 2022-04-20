import Button from "../../UI/Button";
import NavigationItem from "./NavigationItem";
import s from './Navigation.module.css';
const navigationText = ['Услуги', 'Портфолио', 'Этапы', 'Дизайнеры', <Button buttonText='ЗАКАЗАТЬ' className={s.navigation_button} />];
const Navigation = () => {
    return (
        <ul className={s.navigation_list}>
            <NavigationItem
                contentText={navigationText}
            />
        </ul>
    )
}
export default Navigation;