import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter'
const Cart = () => {
    const{products} =useSelector(state => state.CartReducer);
    return (
        <div className='cart'>
            <div className='contanier'>
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                <div className='row'>
                    <div className='col-9'>
                    <div className='cart_heading'>
                        <div className='row'>
                            <div className='col-2'>Picture </div>
                            <div className='col-2'>Name</div>
                            <div className='col-2'>Price</div>
                            <div className='col-2'>Inc/Dec</div>
                            <div className='col-2'>Yortal Pricec</div>
                            <div className='col-2'>Remove</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className='row' key ={product.id}> 
                        <div className='col-2'>
                         <div className='cart_image'>
                             <img src={`/image/${product.image}`}alt=''/>
                         </div>
                        </div>
                        <div className='col-2'>
                            <div className='cart_name'>
                                {product.name}
                            </div>

                        </div>
                        <div className='col-2'>
                            <div className='cart_price'>
                                {currencyFormatter.format(product.discountPrice,{code:'USD'})}
                            </div>
                            <div>
                        </div>
                    )) }
                    </div>
                    <div className='col-3'>
                        summary
                    </div>
                </div>
               </>:  "Your cart is empty!"}

                

            </div>
        </div>
    )
}

export default Cart
