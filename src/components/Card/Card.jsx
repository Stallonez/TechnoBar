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
                <img src={props.item.img} alt="" className="imgCard" />
            </div>
            <div className='productInfo'>
                <div>Игровой ноутбук</div>
                <div>{props.item.name}</div>
            </div>
            <div className='priceInfo'>
                <div className='priceInfo__currentPrice'>{props.item.price}</div>
                <div className='priceInfo__discountPrice'>{props.item.price}</div>
            </div>
        </div>
    )
}

export default Card;