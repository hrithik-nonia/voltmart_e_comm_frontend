// built in import
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

// component imports
import LandingPage from "../pages/LandingPage";
import FilterPage from "../pages/FilterPage";
import AdminPage from "../pages/AdminPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SecureCheckOutPage from "../pages/SecureCheckOutPage";
import ShopingCartPage from "../pages/ShopingCartPage";
import { Navbar } from "../components/commonComponents/Components";

function FirstOutlet() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function SecondOutlet() {
  return <Outlet />;
}

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* first layout for long navbar */}

          <Route element={<FirstOutlet />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-order" element={<MyOrdersPage />} />
            <Route path="/check-out" element={<SecureCheckOutPage />} />
            <Route path="/cart" element={<ShopingCartPage />} />
            <Route path="/product-detail" element={<ProductDetailPage />} />
            <Route path="/filter" element={<FilterPage />} />
          </Route>

          {/* second layout for short navbar */}
          <Route element={<SecondOutlet />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRoutes;
