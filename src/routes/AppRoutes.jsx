// built in import
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// component imports
const LandingPage = lazy(() => import("../pages/LandingPage"));
const FilterPage = lazy(() => import("../pages/FilterPage"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const MyOrdersPage = lazy(() => import("../pages/MyOrdersPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const SecureCheckOutPage = lazy(() => import("../pages/SecureCheckOutPage"));
const ShopingCartPage = lazy(() => import("../pages/ShopingCartPage"));

import VoltmartPreloader from "../components/commonComponents/VoltmartPreloader";
import Navbar from "../components/commonComponents/NavBar";
import VoltmartFooter from "../components/commonComponents/VoltmartFooter";

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
      <Suspense fallback={<VoltmartPreloader />}>
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
        <VoltmartFooter />
      </Suspense>
    </>
  );
}
export default AppRoutes;
