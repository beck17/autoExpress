function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <a className="logo" href="#">
              <img className="logo__img" src="images/logo.svg" alt="" />
            </a>
            <a className="phone" href="tel:+79225556677">
              +7 (922) 555 66 77
            </a>
          </div>
          <div className="header__content">
            <h1 className="header__title">
              авто из сша “под ключ”
            </h1>
            <h2 className="header__subtitle">
              ЗАКАЖИ СЕБЕ АВТО ИЗ США С ВЫГОДОЙ ДО 40%
            </h2>
            <p className="header__text">
              Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
            </p>
            <img className="header__images img-top" src="images/car.png" alt="" />
              <a className="button" href="#">
                КОНСУЛЬТАЦИЯ ЭКСПЕРТА
              </a>
              <div className="header__social social">
                <a className="social__link" href="#">
                  <img className="social__img" src="images/instagram.svg" alt="" />
                </a>
                <a className="social__link" href="#">
                  <img className="social__img" src="images/telegram.svg" alt="" />
                </a>
                <a className="social__link" href="#">
                  <img className="social__img" src="images/whatsapp.svg" alt="" />
                </a>
                <a className="social__link" href="#">
                  <img className="social__img" src="images/facebook.svg" alt="" />
                </a>
              </div>
              <img className="header__images" src="images/car.png" alt="" />
          </div>
        </div>
      </header>

      <section className="services">
        <div className="container">
          <h2 className="title">
            НАШИ УСЛУГИ
          </h2>
          <div className="services__inner">
            <div className="services__content">
              <div className="services__content-box">
                <h6 className="services__content-title">
                  Почему ввоз авто из США?
                </h6>
                <div className="services__content-textbox">
                  <p className="services__content-text">
                    Мы сравнили рынки США с Европейскими и поняли, что покупка автомобиля в
                    Америке выгоднее в несколько раз, как бы парадоксально это не звучало.
                    Это вызвано продуманной логистикой, уровнем развития сервисов по оцениванию
                    состояния авто и самим процессом покупки автомобиля.
                  </p>
                  <p className="services__content-text">
                    Большинство граждан США берут автомобиль в лизинг на несколько лет и все
                    время эксплуатации сама лизинговая компания занимается постоянным ТО
                    автомобиля, вследствие чего, машины из США – один из лучших выборов для
                    автолюбителей Украины.
                  </p>
                </div>
              </div>
              <div className="services__content-box">
                <h6 className="services__content-title">
                  Из-за чего такая низкая цена?
                </h6>
                <div className="services__content-textbox">
                  <p className="services__content-text">
                    Мы сравнили рынки США с Европейскими и поняли, что покупка автомобиля в
                    Америке выгоднее в несколько раз, как бы парадоксально это не звучало.
                    Это вызвано продуманной логистикой, уровнем развития сервисов по оцениванию
                    состояния авто и самим процессом покупки автомобиля.
                  </p>
                </div>
                <a className="button button__decor" href="#">КОНСУЛЬТАЦИЯ ЭКСПЕРТА</a>
              </div>
            </div>
            <ol className="services__list">
              <li className="services__item">
                <p className="services__item-title">
                  Покупка авто
                </p>
                <p className="services__item-text">
                  Подбор автомобиля и экспертная проверка
                </p>
              </li>
              <li className="services__item">
                <p className="services__item-title">
                  Доставка морем
                </p>
                <p className="services__item-text">
                  Расчет оптимальной стоимости доставки авто
                </p>
              </li>
              <li className="services__item">
                <p className="services__item-title">
                  Растаможка авто
                </p>
                <p className="services__item-text">
                  Прохождение таможенного оформления (2-3 дня)
                </p>
              </li>
              <li className="services__item">
                <p className="services__item-title">
                  Ремонт авто
                </p>
                <p className="services__item-text">
                  Комплексный ремонт автомобиля на СТО
                </p>
              </li>
              <li className="services__item">
                <p className="services__item-title">
                  Сертификация
                </p>
                <p className="services__item-text">
                  Услуга предоставляется по желанию
                </p>
              </li>
              <li className="services__item">
                <p className="services__item-title">
                  Постановка на учет
                </p>
                <p className="services__item-text">
                  Оформление автомобиля в России
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="benefits__inner">
            <img className="benefits__images" src="images/car1.png" alt=""/>
              <div className="benefits__content">
                <h2 className="title benefits__title">ПОЧЕМУ МЫ?</h2>
                <ul className="benefits__list">
                  <li className="benefits__item">
                    <p className="benefits__item-num">650</p>
                    <p className="benefits__item-title">успешно доставленных авто</p>
                    <p className="benefits__item-text">
                      большой опыт пригона автомобилей из США под ключ,
                      все клиенты остались довольны на 100%
                    </p>
                  </li>
                  <li className="benefits__item">
                    <p className="benefits__item-num">5</p>
                    <p className="benefits__item-title">лет на рынке России</p>
                    <p className="benefits__item-text">
                      Работаем по всей территории Украины,
                      работаем по договору с клиентами
                    </p>
                  </li>
                  <li className="benefits__item">
                    <p className="benefits__item-num">100 %</p>
                    <p className="benefits__item-title">доверия клиентов</p>
                    <p className="benefits__item-text">
                      Онлайн отчетность. Вы всегда в курсе статуса подбора
                      вашего авто. Фото и видео отчет
                    </p>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="container">
          <h2 className="title">ПРИГНАННЫЕ НАМИ АВТО</h2>
          <div className="slider__items">
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/inf.jpg" alt="" />
                  <h4 className="slider__item-title">INFINITI QX50 2016 г.</h4>
                  <p className="slider__item-text">Цена 30.000$<br />Экономия 4500 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/tesla.jpg" alt="" />
                  <h4 className="slider__item-title">TESLA MODEL 3 2018 г.</h4>
                  <p className="slider__item-text">Цена 35.000$<br />Экономия 5000 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/lexus.jpg" alt="" />
                  <h4 className="slider__item-title">LEXUS 2019 г..</h4>
                  <p className="slider__item-text">Цена 32.000$<br />Экономия 4000 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/inf.jpg" alt="" />
                  <h4 className="slider__item-title">INFINITI QX50 2016 г.</h4>
                  <p className="slider__item-text">Цена 30.000$<br />Экономия 4500 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/tesla.jpg" alt="" />
                  <h4 className="slider__item-title">TESLA MODEL 3 2018 г.</h4>
                  <p className="slider__item-text">Цена 35.000$<br />Экономия 5000 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/lexus.jpg" alt="" />
                  <h4 className="slider__item-title">LEXUS 2019 г..</h4>
                  <p className="slider__item-text">Цена 32.000$<br />Экономия 4000 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/inf.jpg" alt="" />
                  <h4 className="slider__item-title">INFINITI QX50 2016 г.</h4>
                  <p className="slider__item-text">Цена 30.000$<br />Экономия 4500 $</p>
              </div>
            </div>
            <div className="slider__item">
              <div className="slider__item-box">
                <img className="slider__img" src="images/tesla.jpg" alt="" />
                  <h4 className="slider__item-title">TESLA MODEL 3 2018 г.</h4>
                  <p className="slider__item-text">Цена 35.000$<br />Экономия 5000 $</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <div className="contacts__inner">
            <div className="contacts__info">
              <h2 className="title">контакты</h2>
              <ul className="contacts__list">
                <li className="contacts__item">
                  <p className="contacts__item-title">Адрес</p>
                  <p className="contacts__item-text">Сыктывкар</p>
                  <p className="contacts__item-text">ул. Печорская, д.28</p>
                </li>
                <li className="contacts__item">
                  <p className="contacts__item-title">Время работы</p>
                  <p className="contacts__item-text">Пн-Сб: с 9:00 до 19:00,</p>
                  <p className="contacts__item-text">Вс: выходной</p>
                </li>
                <li className="contacts__item">
                  <p className="contacts__item-title">Телефон</p>
                  <p className="contacts__item-text">+7 (922) 555 66 77</p>
                </li>
              </ul>
            </div>
            <form action="" className="contacts__form">
              <h2 className="title contacts__title">Оставить заявку</h2>
              <input className="contacts__input" type="text" placeholder="Как вас зовут?" />
                <input className="contacts__input" type="tel" placeholder="Ваш номер телефона" />
                  <button className="contacts__btn button">отправить заявку</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">

            <a className="logo" href="#">
              <img className="logo__img" src="images/logo.svg" alt="" />
            </a>

            <div className="social footer__social">
              <a className="social__link" href="#">
                <img className="social__img" src="images/instagram.svg" alt="" />
              </a>
              <a className="social__link" href="#">
                <img className="social__img" src="images/telegram.svg" alt="" />
              </a>
              <a className="social__link" href="#">
                <img className="social__img" src="images/whatsapp.svg" alt="" />
              </a>
              <a className="social__link" href="#">
                <img className="social__img" src="images/facebook.svg" alt="" />
              </a>
            </div>

            <a href="#" className="footer__copy">
              Политика конфиденциальности
            </a>

          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
