import s from './ShopExamples.module.css';
import images from '../../images/shopExamples/index';
const {
    bigCake,
    flowers,
    twoCarts,
    hairdrayer,
    shiny,
    colorCatalogue,
    pinkWave,
    whiteSphere} = images;
const shopCatalogue = [ 
    {
     img: twoCarts,
     heading:'Онлайн-магазин',
     description: 'для оптовых покупок',
     alt: 'twoCarts'
    },
    {
        img:flowers,
        heading:'Онлайн-магазин',
        description:'для флористов',
        alt:'flowers'
    },
    {
        img:hairdrayer,
        heading:'Онлайн-магазин',
        description:'для парикмахеров',
        alt:'hair drayer'
    },
    {
        img:shiny,
        heading:'Онлайн-магазин',
        description:'для визажистов',
        alt: 'shiny'
    },
    {
        img:bigCake,
        heading:'Онлайн-магазин',
        description:'для кондитеров',
        alt:'cake'
    },
    {
        img:colorCatalogue,
        heading:'Онлайн-магазин',
        description:'для художников',
        alt:'colors catalogue'
    }
];
const ShopExamples = () => {
    return (
        <div className={s.container}>
            <img 
            src={pinkWave}
            alt='pinkWave'
            className={s.pinkWave}
            />
            <img
            src={whiteSphere}
            alt='white sphere'
            className={s.whiteSphere}
            />
            <section className={s.examples}>
            <h2 className={s.examples_heading}>Примеры онлайн-магазинов</h2>
            <ul className={s.examples_list}>
                {shopCatalogue.map(item => {
                    return <li className={s.examples_item}>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>{item.heading}</h3>
                            <p className={s.overlay_description}>{item.description}</p>
                            </div>
                        <img 
                        src={item.img}
                        alt={item.alt}
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    </li>
                })}

            </ul>
            </section>
        </div>
    )
}
export default ShopExamples;