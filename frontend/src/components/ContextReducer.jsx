import React, { createContext, useReducer, useContext } from 'react';

// Create context
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = { cartItems: [] };

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const itemIndex = state.cartItems.findIndex(item => item.title === action.payload.title);
      if (itemIndex !== -1) {
        // Item already in cart, update quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      }
      // Item not in cart, add new item
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'UPDATE':
      const updatedItems = state.cartItems.map(item =>
        item.title === action.payload.title
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cartItems: updatedItems };

    case 'REMOVE':
      const filteredItems = state.cartItems.filter(item => item.title !== action.payload.title);
      return { ...state, cartItems: filteredItems };

    case 'CLEAR':
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// Custom hooks to use context
export const useCart = () => {
  return useContext(CartStateContext);
};

export const useDispatchCart = () => {
  return useContext(CartDispatchContext);
};
