import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";




const Product = ({post}) => {

  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();
  const addToCart = ()=> {
    dispatch(add(post));
    toast.success("Item added to the Cart");
  }
  const removeFromCart=()=> {
    dispatch(remove(post.id));
    toast.success("Item added to the Cart");                  
  } 


  return ( <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div><p>{post.description}</p></div>
    <div> 
      <img src={post.image}/>
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    {
  cart && Array.isArray(cart) && cart.some((p) => p.id === post.id) ? (
    <button onClick={removeFromCart}>Remove Item</button>
  ) : (
    <button onClick={addToCart}>Add to Cart</button>
  )
}
  </div>
  )
};

export default Product;
