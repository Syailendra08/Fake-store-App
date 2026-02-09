import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import { auth } from "../middleware/auth";

// membuat daftar routing
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        // mengisi <Outlet /> di Template.jsx
        children: [
            {path: "/", element: <App />},
            {path: "/products", element: <Products />},
            {path: "/profile", element: <Profile />},
            {path: "/categories/:categoryId", element: <ProductCategory />},
            {path: "/login", element: <Login />},
            
         ]
    },
    {
         path: "/",
        element: <Template />,
        loader: auth, // menjalankan fungsi ketika proses perpindahan halaman, menjalankan pengecekan middleware/auth.js baru meneruskan halaman
        children: [
        {path: "/cart", element: <Cart />},
        ]
    }
    
]);