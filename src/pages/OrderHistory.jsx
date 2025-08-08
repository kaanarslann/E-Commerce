import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../store/thunks/clientThunks";


export default function OrderHistory() {
    
    const dispatch = useDispatch();
    
    const orderHistory = useSelector((state) => state.client.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [])
    
    return (
        <section className="order-history-main">
            <div className="history-title">
                <h2>Order History</h2>
            </div>
            <div className="history-container">
                {orderHistory.map((order) => (
                    <div key={order.id}>
                        <div className="history-date-price-card">
                            <div className="history-date">
                                <h3>Order Date</h3>
                                <h3>{order.order_date}</h3>
                            </div>
                            <div className="history-price">
                                <h3>Order Price</h3>
                                <h3>{order.price}</h3>
                            </div>
                            <div className="history-card">
                                <h3>Credit Card No</h3>
                                <h3>{order.card_no}</h3>
                            </div>
                        </div>    
                        <div className="history-products">
                            <div>
                                <h3>Product(s)</h3>
                                <div className="history-product">
                                    {order.products.map((product) => (
                                        <div key={product.id}>
                                            <div className="history-product-img">
                                                <img src={product.images[0].url}/>
                                            </div>
                                            <div className="history-product-details">
                                                <div className="product-name">
                                                    <h4>Name:</h4>
                                                    <h4>{product.name}</h4>
                                                </div>
                                                <div className="product-descp">
                                                    <h4>Description:</h4>
                                                    <h4>{product.description}</h4>
                                                </div>
                                                <div className="product-count">
                                                    <h4>Quantity:</h4>
                                                    <h4>{product.count}</h4>
                                                </div>
                                                <div className="product-price">
                                                    <h4>Price:</h4>
                                                    <h4>{product.price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}