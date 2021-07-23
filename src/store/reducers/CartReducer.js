const initState ={
 products: [],
 totalPrice:0,
 totalQuantities:0

}
const CartReducer =(state=initState,action)=> {
  switch(action.type){
      case 'ADD_TO_CART':
          const check = state.products.find(product =>product.id===action.payload.product.id);
     default:
    return state;

  }
}
export default CartReducer;