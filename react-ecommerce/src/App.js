import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from "./features/productList/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  >
        <Route index element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<RootLayout/>}>
        <Route path="home" element={<Home />} />
        <Route path="productDetail" element={<ProductDetailPage />} />
      </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
