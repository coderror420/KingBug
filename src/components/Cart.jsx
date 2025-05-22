import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
       dispatch(clearCart());
    };
    return (
        <div className="text-center my-4 p-4">
            <h1 className="text-2xl font-bold">cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length!=0 && <button className="p-2 m-4 bg-yellow-400 rounded-xl" onClick={handleClearCart}>Clear Cart</button>}
                {cartItems.length===0?<div className="my-10 text-xl">The cart is empty!! looks like someone is cooking something real, ahh i can already smell it👀</div>: 
                <div><ItemList items={cartItems}/>
                <button className="p-2 m-4 bg-yellow-400 rounded-xl">Order Now</button></div>}
            </div>
            
          
        </div>
    )

}
export default Cart;