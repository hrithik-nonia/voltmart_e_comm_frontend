// built in import
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// component imports
const LandingPage = lazy(() => import("../pages/LandingPage"));
const FilterPage = lazy(() => import("../pages/FilterPage"));
const AdminDashBoard = lazy(() => import("../pages/AdminDashBoard"));
const MyOrdersPage = lazy(() => import("../pages/MyOrdersPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const SecureCheckOutPage = lazy(() => import("../pages/SecureCheckOutPage"));
const ShopingCartPage = lazy(() => import("../pages/ShopingCartPage"));
const AdminProductPage = lazy(() => import("../pages/AdminProductPage"));
const AdminOrderPage = lazy(() => import("../pages/AdminOrderPage"));
const AdminCategoriePage = lazy(() => import("../pages/AdminCategoriePage"));
const AdminCustomersPage = lazy(() => import("../pages/AdminCustomerPage"));
const AdminAnalyticsPage = lazy(() => import("../pages/AdminAnalyticsPage"));
const AdminSettingPage = lazy(() => import("../pages/AdminSettingPage"));

import VoltmartPreloader from "../components/commonComponents/VoltmartPreloader";
import Navbar from "../components/commonComponents/NavBar";
import VoltmartFooter from "../components/commonComponents/VoltmartFooter";
import DashboardTopBar from "../components/commonComponents/AdminNavbar";
import AdminSidebar from "../components/commonComponents/AdminSidebar";
import RoleRedirect from "./RoleRedirect";
import { ProtectedRoute } from "./ProtectedRoute";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";

function FirstOutlet() {
  return (
    <>
      <ErrorBoundary fallback={<div>Navbar Component Fatta!</div>}>
        <Navbar />
      </ErrorBoundary>

      <Outlet />

      <ErrorBoundary fallback={<div>Footer Component Fatta!</div>}>
        <VoltmartFooter />
      </ErrorBoundary>
    </>
  );
}

function SecondOutlet() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6">
        <div className="hidden md:flex md:col-span-2 lg:col-span-1">
          <ErrorBoundary fallback={<div>Sidebar Component Fatta!</div>}>
            <AdminSidebar />
          </ErrorBoundary>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <ErrorBoundary fallback={<div>Kuch To Fatta!</div>}>
            <DashboardTopBar />
          </ErrorBoundary>
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
              <Route
                path="/shop"
                element={
                  <ErrorBoundary fallback={<div>Landing Page Fatta!</div>}>
                    <LandingPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/my-order"
                element={
                  <ProtectedRoute role="user">
                    <ErrorBoundary fallback={<div>Orders Page Fatta!</div>}>
                      <MyOrdersPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/check-out"
                element={
                  <ProtectedRoute role="user">
                    <ErrorBoundary fallback={<div>Paymant Page Fatta!</div>}>
                      <SecureCheckOutPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute role="user">
                    <ErrorBoundary fallback={<div>Cart Page Fatta!</div>}>
                      <ShopingCartPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product-detail/:productId"
                element={
                  <ErrorBoundary
                    fallback={<div>Product Detail Page Fatta!</div>}
                  >
                    <ProductDetailPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/filter"
                element={
                  <ErrorBoundary fallback={<div>Filter Page Fatta!</div>}>
                    <FilterPage />
                  </ErrorBoundary>
                }
              />
            </Route>

            {/* second layout for short navbar */}
            <Route element={<SecondOutlet />}>
              <Route
                path="/adminDashboard"
                element={
                  <ProtectedRoute role="admin">
                    <ErrorBoundary
                      fallback={<div>Admin Dashboard Page Fatta!</div>}
                    >
                      <AdminDashBoard />
                    </ErrorBoundary>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/adminProductPage"
                element={
                  <ErrorBoundary
                    fallback={<div>Admin Product Page Fatta!</div>}
                  >
                    <AdminProductPage />
                  </ErrorBoundary>
                }
              />

              <Route
                path="/adminOrderPage"
                element={
                  <ErrorBoundary fallback={<div>Admin Order Page Fatta!</div>}>
                    <AdminOrderPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/adminCategoriePage"
                element={
                  <ErrorBoundary
                    fallback={<div>Admin Categorie Page Fatta!</div>}
                  >
                    <AdminCategoriePage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/adminCustomersPage"
                element={
                  <ErrorBoundary
                    fallback={<div>Admin Customers Page Fatta!</div>}
                  >
                    <AdminCustomersPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/adminAnalyticsPage"
                element={
                  <ErrorBoundary
                    fallback={<div>Admin Analytics Page Fatta!</div>}
                  >
                    <AdminAnalyticsPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/adminSettingPage"
                element={
                  <ErrorBoundary
                    fallback={<div>Admin Setting Page Fatta!</div>}
                  >
                    <AdminSettingPage />
                  </ErrorBoundary>
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
