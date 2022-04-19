import s from './ShopExamples.module.css';
import images from '../../images/shopExamples/index';
import Slider from 'react-slick/lib/slider';
import Media from 'react-media';
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
const settings = {
    dots: true,
    vertical:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    swipeToSlide: true
}
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
            <Media query="(max-width: 1023.5px)" render={() =>
          ( <section className={s.examples}>
            <h2 className={s.examples_heading}>Примеры онлайн-магазинов</h2>
            <div className={s.slider_examples}>
            <Slider {...settings}>
            <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для оптовых покупок</p>
                            </div>
                        <img 
                        src={twoCarts}
                        alt='twoCarts'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для флористов</p>
                            </div>
                        <img 
                        src={flowers}
                        alt='flowers'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для парикмахеров</p>
                            </div>
                        <img 
                        src={hairdrayer}
                        alt='hairdrayer'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для визажистов</p>
                            </div>
                        <img 
                        src={shiny}
                        alt='shiny'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для кондитеров</p>
                            </div>
                        <img 
                        src={bigCake}
                        alt='bigCake'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
                    <div className={s.item_card}>
                        <div className={s.card_overlay}>
                            <h3 className={s.overlay_heading}>Онлайн-магазин</h3>
                            <p className={s.overlay_description}>для художников</p>
                            </div>
                        <img 
                        src={colorCatalogue}
                        alt='colorCatalogue'
                        className={s.card_img}
                        width='563px'
                        height='447px'
                        />
                    </div>
        </Slider>
        </div>
        </section>
          )}
        />
        <Media query="(min-width:1024px)" render={ () => (
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
            </section>)}/>
        </div>
    )
}
export default ShopExamples;