import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";

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
            {path: "/categories/:categoryId", element: <ProductCategory />}
         ]
    }
    
]);