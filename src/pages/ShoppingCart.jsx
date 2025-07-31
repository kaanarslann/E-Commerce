import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { updateProductCount, deleteProduct } from "../store/thunks/shoppingCartThunks";

export default function ShoppingCart() {
    
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.shoppingCart.cart);

    return (
        <section className="shopping-cart-main mx-9 md:mx-35 flex flex-col gap-5">
            <div className="shopping-cart-title py-5">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem]">My Shopping Cart</h2>
            </div>
            <div className="shopping-cart-content">
                <ul>
                    {shoppingCart.map((item) => (
                        <li key={item.product.id}>
                            <div className="cart-main flex flex-col">
                                <div className="cart-item flex items-center gap-5">
                                    <div className="cart-item-checkbox">
                                        <input type="checkbox" className="w-5 h-5"/>
                                    </div>
                                    <div className="cart-item-img w-[30%]">
                                        <img src={item.product.images[0].url} className="w-50 h-50 object-contain"/>
                                    </div>
                                    <div className="cart-item-text flex flex-col gap-1 w-[70%] text-[#252B42]">
                                        <h2 className="font-bold">{item.product.name}</h2>
                                        <h3 className="font-normal">{item.product.description}</h3>
                                        <h4 className="font-normal">Adet: {item.count}</h4>
                                        <h2>${item.product.price}</h2>
                                    </div>
                                </div>
                                <div className="cart-item-buttons flex mx-auto gap-5">
                                    <div className="quantity-buttons flex items-center gap-2">
                                        <button className="bg-[#BDBDBD] text-[#737373] w-5 rounded-sm hover:cursor-pointer" onClick={() => item.count > 1 && dispatch(updateProductCount(item.product.id, item.count - 1))}>-</button>
                                        <span className="text-sm">{item.count}</span>
                                        <button className="bg-[#BDBDBD] text-[#737373] w-5 rounded-sm hover:cursor-pointer" onClick={() => dispatch(updateProductCount(item.product.id, item.count + 1))}>+</button>
                                    </div>
                                    <button className="hover:cursor-pointer" onClick={() => dispatch(deleteProduct(item.product.id))}>
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
} 