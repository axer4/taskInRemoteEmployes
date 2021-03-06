import Slider from "react-slick";
import images from "../../images/slider";
import arrowDown from '../../images/arrowDown.svg';
import s from './Slider.module.css';
const { cube, cake, barcode, content, test } = images;
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '450px', right: '650px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.nextArrow} /></div>
  );
}
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '450px', left: '600px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.prevArrow} /></div>
  )
}
const NextArrowLaptop = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '450px', right: '350px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.nextArrow} /></div>
  );
}
const PrevArrowLaptop = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '450px', left: '300px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.prevArrow} /></div>
  )
}
const NextArrowMobile = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '642px', right: '94px', }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.nextArrow} /></div>
  );
}
const PrevArrowMobile = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '642px', left: '54px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.prevArrow} /></div>
  );
}
export const NextArrowMobileExamples = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '820px', right: '94px', marginTop: '15px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.nextArrow} /></div>
  );
}
export const PrevArrowMobileExamples = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", top: '820px', left: '54px', marginTop: '15px' }}
      onClick={onClick}
    ><img src={arrowDown} alt='arrow' className={s.prevArrow} /></div>
  );
}
const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrowLaptop />,
          prevArrow: <PrevArrowLaptop />,
        }
      },
      {
        breakpoint: 1023.5,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 767.5,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrowMobile />,
          prevArrow: <PrevArrowMobile />,
        }
      },

    ],
  };
  return (
    <div className={s.container}>
      <Slider {...settings}>
        <div className={s.slider_item}>
          <div className={s.heading_and_description}>
            <h3 className={s.slider_heading}>1. Анализ</h3>
            <p className={s.slider_description}>Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. </p>
            <img
              src={cube}
              alt='cube'
              className={s.slider_img}
            />
          </div>
        </div>
        <div className={s.slider_item}>
          <div className={s.heading_and_description}>
            <h3 className={s.slider_heading}>2. Визуальное решение</h3>
            <p className={s.slider_description}>Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.</p>
          </div>
          <img
            src={cake}
            alt='cake'
            className={s.slider_img}
            style={{ width: '227px', height: '222px' }}
          />
        </div>
        <div className={s.slider_item}>
          <div className={s.heading_and_description}>
            <h3 className={s.slider_heading}>3. Техническая реализация</h3>
            <p className={s.slider_description}>После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.</p>
          </div>
          <img
            src={barcode}
            alt='barcode'
            className={s.slider_img}
          />
        </div>
        <div className={s.slider_item}>
          <div className={s.heading_and_description}>
            <h3 className={s.slider_heading}>4. Наполнение контентом </h3>
            <p className={s.slider_description}>Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. </p>
          </div>
          <img
            src={content}
            alt='content'
            className={s.slider_img}
          />
        </div>
        <div className={s.slider_item}>
          <div className={s.heading_and_description}>
            <h3 className={s.slider_heading}>5. Тестирование </h3>
            <p className={s.slider_description}>Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.</p>
          </div>
          <img
            src={test}
            alt='test'
            className={s.slider_img}
          />
        </div>
      </Slider>
    </div>
  );
}
export default SimpleSlider;