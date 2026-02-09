import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, qty) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id == product.id);
      if (exist) {
        return prev.map((item) => {
          if (item.id == product.id) {
            return { ...item, qty: item.qty + qty };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            image: product.image ? product.image[0] : "",
            price: product.price,
            qty: qty,
          },
        ];
      }
    });
  }

  function changeQty(productId, type) {
    setCart((prev) =>
        // loop data cart
      prev.map((item) => {
        // jika id yang lagi dilooping sama dengan productId yang dikirim
        if (item.id == productId) {
            // jika tipe perubahannya +
          if (type == "+") {
            return { ...item, qty: item.qty + 1 };
          } else {
            // jika item perubahannya -, diupdate maka diangka 1 kurangnya
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            }
          }
        } else {
          return item;
        }
      })
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQty }}>
      {children}
    </CartContext.Provider>
  );
}
