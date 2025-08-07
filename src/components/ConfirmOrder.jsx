import { useSelector, useDispatch } from "react-redux";
import { confirmOrder } from "../store/thunks/shoppingCartThunks";
import {useHistory} from "react-router-dom";

export default function ConfirmOrder() {
    
    const cart = useSelector((state) => state.shoppingCart.cart);
    const checkedCart = cart.filter((item) => item.checked);
    const address = useSelector((state) => state.shoppingCart.address);
    const payment = useSelector((state) => state.shoppingCart.payment);
    const price = useSelector((state) => state.shoppingCart.price);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleConfirmButton = () => {
        const addressId = address.id;
        const cardInfo = payment;
        const products = checkedCart;
        const totalPrice = price; 
        dispatch(confirmOrder(addressId, cardInfo, products, totalPrice, history));
    }

    
    return (
        <section className="confirm-order-main mt-10 ml-5 flex flex-col gap-5">
            <div className="confirm-title">
                <h2 className="text-2xl font-bold">Please confirm your order:</h2>
            </div>
            <div className="confirm-products flex flex-col">
                <h2>Product(s):</h2>
                <div className="products-container flex">
                    {checkedCart.map((item) => ( 
                        <div key={item.product.id} className="flex gap-3">
                            <div className="product-image w-[30%] flex">
                                <img src={item.product.images[0].url} />
                            </div>
                            <div className="product-details w-[70%] flex flex-col mt-3">
                                <h3>Product Name: {item.product.name}</h3>
                                <h3>Product Details: {item.product.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="confirm-price">
                <h2>Total Price: $ {price}</h2>
            </div>
            <div className="confirm-address">
                <h2>Address:</h2>
                <div className="address-container">
                    <h3>Address: {address.address}</h3>
                    <h3>Neighborhood: {address.neighborhood}</h3>
                    <h3>District: {address.district}</h3>
                    <h3>City: {address.city}</h3>
                    <h3>{address.name} {address.surname}</h3>
                    <h3>{address.phone}</h3>
                </div>
            </div>
            <div className="confirm-card">
                <h2>Payment:</h2>
                <div className="paymeny-container">
                    <h3>Name: {payment.name_on_card}</h3>
                    <h3>Card No: {payment.card_no}</h3>
                    <h3>Expire Date: {payment.expire_month} / {payment.expire_year}</h3>
                </div>
            </div>
            <button className="border p-2 hover:cursor-pointer" onClick={() => handleConfirmButton()}>Confirm Order</button>
        </section>
    );
}