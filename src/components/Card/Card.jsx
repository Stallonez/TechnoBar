import './Card.css';

const Card = (props) => {
    return (
        <div className="mainCard">
            <div className='creditInfo_flex_container'>
                <div className='creditInfo_flex_element'>
                    <div className='year'>
                        0-0-12
                    </div>
                </div>
                <div className='creditInfo_flex_element'>
                    <div className='percent'>
                        -10%
                    </div>
                </div>
            </div>
            <div className="imgCard">
                <img src="https://api.technodom.kz/f3/api/v1/images/272/272/248492_1v.webp" alt="" />
            </div>
            <div className='productInfo'>
                <div>Игровой ноутбук</div>
                <div>Lenovo IdeaPad</div>
            </div>
            <div className='priceInfo'>
                <div className='priceInfo__currentPrice'>120000</div>
                <div className='priceInfo__discountPrice'>123333</div>
            </div>
        </div>
    )
}

export default Card;