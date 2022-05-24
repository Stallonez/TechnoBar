import { connect } from "react-redux";

const ShopingCart = (props) => {
    console.log(props);
    return <div>
        <h1>Наша корзина</h1>
        <div>
            {props.carts.map(cart => {
                return <div>
                    <div>{cart.name}</div>
                    <div>{cart.discount}</div>
                    <div>{cart.img}</div>
                    <div>{cart.newPrice}</div>
                    <div>{cart.price}</div>

                </div>
            })}
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        carts: state.cart.carts,
    }
}


export default connect(mapStateToProps)(ShopingCart);