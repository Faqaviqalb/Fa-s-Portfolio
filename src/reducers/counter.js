const cartData = localStorage.getItem("cart");
const cart = cartData ? JSON.parse(cartData) : [];
const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

const counterReducer = (state=totalQuantity, action) =>{
    switch (action.type) {
        case "Increment" :
            return state+1
        case "Decrement" :
            return state-1
        default:
        return state;
    }
}

export default counterReducer;