import { createContext, useState, useContext } from "react";
import { food_list } from "../../assets/assets";

// Create the StoreContext using createContext
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Use useState to manage cart state
  const [cartItems, setCartItems] = useState({});

  // Functions to manage cart items
  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems }; // Create a copy
      updatedCartItems[itemId] = prevCartItems[itemId] ? prevCartItems[itemId] + 1 : 1; // Update quantity or set to 1
      return updatedCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems }; // Create a copy
      if (updatedCartItems[itemId]) { // Check if item exists in cart
        updatedCartItems[itemId] -= 1;
        if (updatedCartItems[itemId] <= 0) { // Remove item if quantity reaches 0
          delete updatedCartItems[itemId];
        }
      }
      return updatedCartItems;
    });
  };

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) { // Handle potential missing itemInfo
          totalAmount += itemInfo.price * cartItems[itemId];
        } else {
          console.warn(`Item with ID ${itemId} not found in food_list`); // Log warning for missing items
        }
      }
    }
    return totalAmount;
  };

  // Create a single ContextValue object for efficiency
  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  // Provide the ContextValue to child components
  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// Export the provider component
export default StoreContextProvider;

