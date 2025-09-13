/* eslint-disable no-unused-vars */
import React,{useContext,createContext,useReducer} from 'react'

const StoreContext = createContext({
    items :[],
    cart: [],
    // eslint-disable-next-line no-unused-vars
    addToCart: (id)=>{},
    removeFromCart: (id)=>{},
})

const defaultState = {
 items : [
{
title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
}
],
    cart: [],
}

const storeReducer = (state,action) =>{
    if(action.type === 'ADD_TO_CART'){
        const item = state.items.find((item) => item.title === action.title);
        if(!item) return state;
        const existingIndex = state.cart.findIndex((cartItem) => cartItem.title === action.title);
        let updatedCart;
        if(existingIndex >= 0){
            const updatedItem = {
                ...state.cart[existingIndex],
                quantity: state.cart[existingIndex].quantity + 1,   
            };
            updatedCart = [...state.cart];
            updatedCart[existingIndex] = updatedItem;
        }else{
            updatedCart = state.cart.concat({
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl,
                quantity: 1,
            });
        }

        return {
            items: state.items,
            cart: updatedCart,
        }
    }
    if(action.type === 'REMOVE_FROM_CART'){
        const existingIndex = state.cart.findIndex((item) => item.title === action.title);
        if(existingIndex < 0) return state;
        const updatedCart = [...state.cart];
        updatedCart.splice(existingIndex, 1);
        return {
            items: state.items,
            cart: updatedCart,
        }
    }
    return defaultState;
}

export const StoreProvider = ({children}) =>{
    const [state,dispatch] = useReducer(storeReducer,defaultState);
    const addToCart = (title) =>{
        dispatch({type: 'ADD_TO_CART', title});
    }   
    const removeFromCart = (title) =>{
        dispatch({type: 'REMOVE_FROM_CART', title});
    }
    const contextValue = {
        items: state.items,
        cart: state.cart,
        addToCart,
        removeFromCart
    }

    return <StoreContext.Provider value={contextValue}>
        {children}
    </StoreContext.Provider>
}

export default StoreContext