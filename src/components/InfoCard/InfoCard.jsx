import './InfoCard.css';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
    return <div>
        <div className='mainInfoCard__flex'>
            <div className='mainInfoCard__element'>
                <h1>Ноутбук Asus X515JF Pentium 6805 / 8ГБ / 256SSD / MX130 2ГБ / 15.6 / DOS / (X515JF-EJ257)</h1>
                <h6>Артикул: 257141 == ID - {props.id}</h6>
                <div className='content_row'>
                    <div className='content_element'>
                        <div className='imgBlock'>
                            <img className='imgElement'
                                src="https://api.technodom.kz/f3/api/v1/images/272/272/231330_1.webp" alt=""
                            />
                        </div>
                    </div>
                    <div className='content_element'>
                        <div className='percent'>0-0-12</div>
                        <p>Описание</p>
                        <div className='text_row'>
                            <div className='text_element'>Диагональ дисплея, дюйм</div>
                            <div className='text_element'>14</div>
                        </div>
                        <div className='line'></div>
                        <p>Все характеристики</p>
                    </div>
                </div>
            </div>
            <div className='linkToShopingCart__element'>
                Корзина
                <Link to="/card">Добавить в корзину</Link>
            </div>
        </div>
    </div>
}

export default InfoCard;