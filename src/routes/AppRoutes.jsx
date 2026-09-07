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
import DashboardTopBar from "../components/commonComponents/AdminNavbar";
import AdminSidebar from "../components/commonComponents/AdminSidebar";
import RoleRedirect from "./RoleRedirect";
import { ProtectedRoute } from "./ProtectedRoute";

function FirstOutlet() {
  return (
    <>
      <Navbar />
      <Outlet />
      <VoltmartFooter />
    </>
  );
}

function SecondOutlet() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6">
        <div className="hidden md:flex md:col-span-2 lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <DashboardTopBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <>
      <Suspense fallback={<VoltmartPreloader />}>
        <BrowserRouter>
          <Routes>
            {/* first layout for long navbar */}

            <Route element={<FirstOutlet />}>
              <Route path="/" element={<RoleRedirect />} />
              <Route path="/shop" element={<LandingPage />} />
              <Route
                path="/my-order"
                element={
                  <ProtectedRoute role="user">
                    <MyOrdersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/check-out"
                element={
                  <ProtectedRoute role="user">
                    <SecureCheckOutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute role="user">
                    <ShopingCartPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/product-detail" element={<ProductDetailPage />} />
              <Route path="/filter" element={<FilterPage />} />
            </Route>

            {/* second layout for short navbar */}
            <Route element={<SecondOutlet />}>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute role="admin">
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
