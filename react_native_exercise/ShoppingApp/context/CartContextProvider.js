import React, { useState, createContext, useContext } from "react";
import { Alert } from "react-native";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);
  function addToCart(item) {
    const itemExists = items.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      Alert.alert("Item already in a cart Quantity increase by 1");
      incrementItemCount(item.id);
    } else {
      setItems((prevItem) => [...prevItem, item]);
      Alert.alert("Item added to the Cart");
    }
  }

  function incrementItemCount(itemId) {
    setItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    );
  }

  function decrementItemCount(itemId) {
    const item = items.find(cartItem => cartItem.id === itemId);
    
    if (item && item.count > 1) {
      setItems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, count: cartItem.count - 1 }
            : cartItem
        )
      );
    } else if (item) {
      Alert.alert(
        "Confirm Removal",
        "This will remove the item from your cart. Do you want to proceed?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "Remove",
            onPress: () => setItems(prevItems => prevItems.filter(cartItem => cartItem.id !== itemId)),
          },
        ],
        { cancelable: false }
      );
    }
  }

  function clearItem() {
    return Alert.alert(
      "Confirm Deletion",
      "Do you want to delete all the items from the cart?",
      [
        {
          text: "No",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => setItems([]),
        },
      ],
      { cancelable: false }
    );
  }
  function getCart() {
    return items;
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        getCart,
        clearItem,
        incrementItemCount,
        decrementItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
