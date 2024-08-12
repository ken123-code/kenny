import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addItem } from "./cartSlice";

const ProductsList = () => {
    const dispatch = useDispatch();
    const {items, status, error} = useSelector(state => state.products);
    useEffect(() => {
        if(status === 'start') {
            dispatch(fetchProducts())
        }
    },[])

    if(status === 'loading') return <div>Loading...</div>
    if(status === 'failed') return <div>{error}</div>

    return(
        <div>
            {items.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    {/* <button>Add to cart</button> */}
                    <button onClick={()=>dispatch(addItem(product))}>Add to cart</button>
                    
                </div>
            ))}
        </div>
    )
}

export default ProductsList;