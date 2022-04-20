import s from './OurService.module.css';
import images from '../../images/ourService/index';
import { useState } from 'react';
import DropDownBlock from '../../UI/DropDownBlock';
import Media from 'react-media';
const { arrowDown, bag } = images;
const designPortalContent = {
    title: 'Дизайн портала',
    description: 'Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.',
}
const designMobileContent = {
    title: 'Дизайн адаптивной мобильной версии',
    description: 'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.',
}
const designMobileContentSmall = {
    title: 'Дизайн адаптивной мобильной версии',
    description: 'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.'
}
const designDesktopContent = {
    title: 'Дизайн десктопной версии',
    description: 'Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.'
}
const userInterfaceContent = {
    title: 'Пользовательский интерфейс',
    description: 'Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания. '
}
const microUxContent = {
    title: 'Микро UX',
    description: 'Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.'
}
const OurService = () => {
    const [designPortal, setDesignPortal] = useState(false);
    const [designMobile, setDesignMobile] = useState(false);
    const [designDesktop, setDesignDesktop] = useState(false);
    const [userInterface, setUserInterface] = useState(false);
    const [microUX, setMicroUX] = useState(false);
    const toogleDropDownBlock = (boolean, method) => {
        return method(!boolean)
    }
    return (
        <div
            className={s.ourService}
        >
            <a name='Услуги'></a>
            <h2 className={s.ourService_heading}>Что входит в услугу по созданию дизайна интернет-магазина?</h2>
            <ul className={s.ourService_list}>
                <li className={s.ourService_item}>
                    <p className={s.ourService_description}>Дизайн портала</p>
                    <button
                        className={s.ourService_arrowButton}
                        onClick={() => toogleDropDownBlock(designPortal, setDesignPortal)}
                    >
                        <img
                            src={arrowDown}
                            alt='arrow' /></button>
                </li>
                {designPortal &&
                    <DropDownBlock
                        content={designPortalContent}
                        closeBlock={toogleDropDownBlock}
                        boolean={designPortal}
                        method={setDesignPortal}
                    />}
                <li className={s.ourService_item}>
                    <p className={s.ourService_description}>Дизайн адаптивной мобильной версии</p>
                    <button
                        className={s.ourService_arrowButton}
                        onClick={() => toogleDropDownBlock(designMobile, setDesignMobile)}>
                        <img
                            src={arrowDown}
                            alt='arrow' /></button>
                </li>
                <Media query="(min-width: 768px)" render={() => (
                    <>
                        {designMobile &&
                            <DropDownBlock
                                content={designMobileContent}
                                closeBlock={toogleDropDownBlock}
                                boolean={designMobile}
                                method={setDesignMobile}
                            />}
                    </>
                )} />
                <Media query="(max-width: 767.5px)" render={() => (
                    <>
                        {designMobile &&
                            <DropDownBlock
                                content={designMobileContentSmall}
                                closeBlock={toogleDropDownBlock}
                                boolean={designMobile}
                                method={setDesignMobile}
                            />}
                    </>
                )} />
                <li className={s.ourService_item}>
                    <p className={s.ourService_description}>Дизайн десктопной версии</p>
                    <button
                        className={s.ourService_arrowButton}
                        onClick={() => toogleDropDownBlock(designDesktop, setDesignDesktop)}>
                        <img
                            src={arrowDown}
                            alt='arrow' /></button>
                </li>
                {designDesktop &&
                    <DropDownBlock
                        content={designDesktopContent}
                        closeBlock={toogleDropDownBlock}
                        boolean={designDesktop}
                        method={setDesignDesktop}
                    />}
                <li className={s.ourService_item}>
                    <p className={s.ourService_description}>Пользовательский интерфейс</p>
                    <button
                        className={s.ourService_arrowButton}
                        onClick={() => toogleDropDownBlock(userInterface, setUserInterface)}
                    >
                        <img
                            src={arrowDown}
                            alt='arrow' /></button>
                </li>
                {userInterface &&
                    <DropDownBlock
                        content={userInterfaceContent}
                        closeBlock={toogleDropDownBlock}
                        boolean={userInterface}
                        method={setUserInterface}
                    />}
                <li className={s.ourService_item}>
                    <p className={s.ourService_description}>Микро UX</p>
                    <button
                        className={s.ourService_arrowButton}
                        onClick={() => toogleDropDownBlock(microUX, setMicroUX)}
                    >
                        <img
                            src={arrowDown}
                            alt='arrow' /></button>
                </li>
                {microUX &&
                    <DropDownBlock
                        content={microUxContent}
                        closeBlock={toogleDropDownBlock}
                        boolean={microUX}
                        method={setMicroUX}
                    />}
            </ul>
            <img
                src={bag}
                alt='bag'
                className={s.bag}
            />
        </div>
    )
}
export default OurService;